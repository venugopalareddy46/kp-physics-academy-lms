"use client";
import { useEffect, useMemo, useState } from "react";

type Any = any;
const blank = { title:"", name:"", description:"", orderNumber:0, isFree:false, isPublished:false, videoDuration:"", durationMinutes:30, totalMarks:0, maxMarks:100, dueAt:"" };

async function api(url:string, opts:RequestInit={}) {
  const headers = { "Content-Type":"application/json", ...(opts.headers || {}) };
  const res = await fetch(url, {...opts, headers});
  const data = await res.json().catch(()=>({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export default function ContentManager({courseId}:{courseId:string}) {
  const [subjects,setSubjects] = useState<Any[]>([]), [chapters,setChapters] = useState<Any[]>([]), [lessons,setLessons] = useState<Any[]>([]);
  const [tests,setTests] = useState<Any[]>([]), [assignments,setAssignments] = useState<Any[]>([]);
  const [selectedSubject,setSelectedSubject] = useState(""), [selectedChapter,setSelectedChapter] = useState("");
  const [search,setSearch] = useState(""), [editing,setEditing] = useState<Any|null>(null), [kind,setKind] = useState("");
  const [busy,setBusy] = useState(false), [msg,setMsg] = useState("");

  const loadCourseContent = async () => {
    const [s,t,a] = await Promise.all([
      api(`/api/subjects?courseId=${courseId}`), api(`/api/tests?courseId=${courseId}`), api(`/api/assignments?courseId=${courseId}`)
    ]);
    setSubjects(s.subjects); setTests(t.tests); setAssignments(a.assignments);
    if (!selectedSubject || !s.subjects.some((x:Any)=>x.id===selectedSubject)) {
      setSelectedSubject(s.subjects[0]?.id || ""); setChapters([]); setSelectedChapter("");
    }
  };
  useEffect(()=>{loadCourseContent().catch(e=>setMsg(e.message));},[courseId]);
  useEffect(()=>{
    if (!selectedSubject) { setChapters([]); setSelectedChapter(""); return; }
    api(`/api/chapters?subjectId=${selectedSubject}`).then(d=>{
      setChapters(d.chapters); if (!d.chapters.some((x:Any)=>x.id===selectedChapter)) setSelectedChapter(d.chapters[0]?.id || "");
    }).catch(e=>setMsg(e.message));
  },[selectedSubject]);
  useEffect(()=>{
    if (!selectedChapter) { setLessons([]); return; }
    api(`/api/lessons?chapterId=${selectedChapter}`).then(d=>setLessons(d.lessons)).catch(e=>setMsg(e.message));
  },[selectedChapter]);

  const visibleLessons = useMemo(()=>{
    const q=search.toLowerCase().trim(); return q ? lessons.filter(x=>String(x.title).toLowerCase().includes(q)) : lessons;
  },[lessons,search]);
  const filtered = (items:Any[], field:string) => items.filter(x=>String(x[field]??"").toLowerCase().includes(search.toLowerCase().trim()));

  const closeEditor = () => { setEditing(null); setKind(""); };
  const openNew = (type:string) => {
    if (type==="chapter" && !selectedSubject) return setMsg("Select a subject first.");
    if (type==="lesson" && !selectedChapter) return setMsg("Select a chapter first.");
    setMsg(""); setKind(type); setEditing({...blank, title:type==="lesson"?"New Lesson":type==="chapter"?"New Chapter":type==="test"?"New Test":type==="assignment"?"New Assignment":"", name:type==="subject"?"New Subject":""});
  };

  const save = async () => {
    if (!editing || !kind) return;
    setBusy(true); setMsg("");
    try {
      let url="", body:Any={};
      if (kind==="subject") { url=editing.id?`/api/subjects/${editing.id}`:"/api/subjects"; body={courseId,name:editing.name,description:editing.description,orderNumber:Number(editing.orderNumber)}; }
      if (kind==="chapter") { url=editing.id?`/api/chapters/${editing.id}`:"/api/chapters"; body={subjectId:selectedSubject,title:editing.title,description:editing.description,orderNumber:Number(editing.orderNumber)}; }
      if (kind==="lesson") { url=editing.id?`/api/lessons/${editing.id}`:"/api/lessons"; body={chapterId:selectedChapter,title:editing.title,description:editing.description,orderNumber:Number(editing.orderNumber),isFree:!!editing.isFree,isPublished:!!editing.isPublished,videoKey:editing.videoKey||null,pdfKey:editing.pdfKey||null,thumbnailKey:editing.thumbnailKey||null,videoDuration:editing.videoDuration?Number(editing.videoDuration):null}; }
      if (kind==="test") { url=editing.id?`/api/tests/${editing.id}`:"/api/tests"; body={courseId,title:editing.title,description:editing.description,durationMinutes:Number(editing.durationMinutes),totalMarks:Number(editing.totalMarks),isPublished:!!editing.isPublished}; }
      if (kind==="assignment") { url=editing.id?`/api/assignments/${editing.id}`:"/api/assignments"; body={courseId,title:editing.title,description:editing.description,dueAt:editing.dueAt||null,maxMarks:Number(editing.maxMarks)}; }
      await api(url,{method:editing.id?"PATCH":"POST",body:JSON.stringify(body)});
      setMsg("Saved successfully."); closeEditor(); await loadCourseContent();
      if (selectedChapter) { const d=await api(`/api/lessons?chapterId=${selectedChapter}`); setLessons(d.lessons); }
    } catch(e) { setMsg(e instanceof Error?e.message:"Save failed"); }
    finally { setBusy(false); }
  };

  const removeItem = async (type:string,id:string,label:string) => {
    if (!confirm(`Delete “${label}”? This cannot be undone.`)) return;
    setBusy(true);
    try {
      const prefix = type==="subject"?"subjects":type==="chapter"?"chapters":type==="lesson"?"lessons":type==="test"?"tests":"assignments";
      await api(`/api/${prefix}/${id}`,{method:"DELETE"}); setMsg("Deleted successfully."); await loadCourseContent();
      if (selectedChapter) { const d=await api(`/api/lessons?chapterId=${selectedChapter}`); setLessons(d.lessons); }
    } catch(e) { setMsg(e instanceof Error?e.message:"Delete failed"); }
    finally { setBusy(false); }
  };

  const upload = async (field:"videoKey"|"pdfKey"|"thumbnailKey") => {
    if (!editing) return;
    const input=document.createElement("input"); input.type="file"; input.accept=field==="videoKey"?"video/*":field==="pdfKey"?"application/pdf,.pdf":"image/*";
    input.onchange=async()=>{
      const file=input.files?.[0]; if(!file)return; setBusy(true);
      try {
        const old=editing[field], fd=new FormData(); fd.append("file",file); fd.append("folder",`courses/${courseId}/${field.replace("Key","")}`);
        const res=await fetch("/api/media/upload",{method:"POST",body:fd}); const data=await res.json(); if(!res.ok)throw new Error(data.error||"Upload failed");
        if(old) await api("/api/media",{method:"DELETE",body:JSON.stringify({key:old})});
        setEditing({...editing,[field]:data.key}); setMsg(`${field.replace("Key","")} uploaded. Save the lesson to apply it.`);
      } catch(e) { setMsg(e instanceof Error?e.message:"Upload failed"); }
      finally { setBusy(false); }
    }; input.click();
  };
  const deleteMedia = async (field:"videoKey"|"pdfKey"|"thumbnailKey") => {
    if(!editing?.[field])return; if(!confirm("Delete this media file?"))return;
    try { await api("/api/media",{method:"DELETE",body:JSON.stringify({key:editing[field]})}); setEditing({...editing,[field]:null}); setMsg("Media removed. Save the lesson to apply it."); }
    catch(e){setMsg(e instanceof Error?e.message:"Delete failed");}
  };

  const card = (title:string, children:any, add:()=>void) => <section className="panel cms-card"><div className="cms-head"><div><span className="eyebrow">CMS</span><h2>{title}</h2></div><button className="btn btn-primary" onClick={add}>+ Add</button></div>{children}</section>;
  const actions=(type:string,x:Any,label:string)=><div className="actions"><button className="btn btn-secondary" onClick={e=>{e.stopPropagation();setKind(type);setEditing({...blank,...x,videoKey:x.video_key,pdfKey:x.pdf_key,thumbnailKey:x.thumbnail_key,isFree:!!x.is_free,isPublished:!!x.is_published,durationMinutes:x.duration_minutes,totalMarks:x.total_marks,maxMarks:x.max_marks,dueAt:x.due_at||""})}}>Edit</button><button className="btn btn-danger" onClick={e=>{e.stopPropagation();removeItem(type,x.id,label)}}>Delete</button></div>;

  return <div className="cms">
    <div className="searchbar"><span>⌕</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search subjects, chapters, lessons, tests and assignments…"/><button className="btn btn-secondary" onClick={()=>setSearch("")}>Clear</button></div>
    {msg&&<div className="cms-message">{msg}</div>}
    <div className="cms-grid">
      {card("Subjects",<div className="cms-list">{filtered(subjects,"name").map(x=><div className={`cms-row ${selectedSubject===x.id?"selected":""}`} key={x.id} onClick={()=>setSelectedSubject(x.id)}><div><b>{x.name}</b><small>{x.description||"No description"}</small></div>{actions("subject",x,x.name)}</div>)}{!subjects.length&&<div className="empty">No subjects yet.</div>}</div>,()=>openNew("subject"))}
      {card("Chapters",<div className="cms-list">{filtered(chapters,"title").map(x=><div className={`cms-row ${selectedChapter===x.id?"selected":""}`} key={x.id} onClick={()=>setSelectedChapter(x.id)}><div><b>{x.title}</b><small>{x.description||"No description"}</small></div>{actions("chapter",x,x.title)}</div>)}{selectedSubject&&!chapters.length&&<div className="empty">No chapters yet.</div>}</div>,()=>openNew("chapter"))}
    </div>
    {card("Lessons & Media",<div className="cms-list">{visibleLessons.map(x=><div className="cms-row" key={x.id}><div><b>{x.title}</b><small>{x.video_key?"🎬 Video":"—"}{x.pdf_key?" • 📄 PDF":""}{x.is_published?" • Published":" • Draft"}</small></div>{actions("lesson",x,x.title)}</div>)}{!visibleLessons.length&&<div className="empty">Select a chapter or add a lesson.</div>}</div>,()=>openNew("lesson"))}
    <div className="cms-grid">
      {card("Tests",<div className="cms-list">{filtered(tests,"title").map(x=><div className="cms-row" key={x.id}><div><b>{x.title}</b><small>{x.duration_minutes} min • {x.total_marks} marks{x.is_published?" • Published":" • Draft"}</small></div>{actions("test",x,x.title)}</div>)}{!tests.length&&<div className="empty">No tests yet.</div>}</div>,()=>openNew("test"))}
      {card("Assignments",<div className="cms-list">{filtered(assignments,"title").map(x=><div className="cms-row" key={x.id}><div><b>{x.title}</b><small>{x.max_marks} marks{x.due_at?` • Due ${x.due_at}`:""}</small></div>{actions("assignment",x,x.title)}</div>)}{!assignments.length&&<div className="empty">No assignments yet.</div>}</div>,()=>openNew("assignment"))}
    </div>
    {editing&&<div className="modal-backdrop"><div className="modal">
      <div className="cms-head"><div><span className="eyebrow">{editing.id?"EDIT":"CREATE"}</span><h2>{kind}</h2></div><button className="btn btn-secondary" onClick={closeEditor}>Close</button></div>
      <div className="form">
        <label>{kind==="subject"?"Name":"Title"}<input value={kind==="subject"?(editing.name??""):(editing.title??"")} onChange={e=>setEditing({...editing,...(kind==="subject"?{name:e.target.value}:{title:e.target.value})})}/></label>
        <label>Description<textarea rows={4} value={editing.description??""} onChange={e=>setEditing({...editing,description:e.target.value})}/></label>
        {['subject','chapter','lesson'].includes(kind)&&<label>Order<input type="number" value={editing.orderNumber??0} onChange={e=>setEditing({...editing,orderNumber:e.target.value})}/></label>}
        {kind==="lesson"&&<>
          <label>Video duration (seconds)<input type="number" value={editing.videoDuration??""} onChange={e=>setEditing({...editing,videoDuration:e.target.value})}/></label>
          <div className="actions"><button className="btn btn-secondary" onClick={()=>upload("videoKey")}>🎬 {editing.videoKey?"Replace video":"Upload video"}</button>{editing.videoKey&&<button className="btn btn-danger" onClick={()=>deleteMedia("videoKey")}>Delete video</button>}<button className="btn btn-secondary" onClick={()=>upload("pdfKey")}>📄 {editing.pdfKey?"Replace PDF":"Upload PDF"}</button>{editing.pdfKey&&<button className="btn btn-danger" onClick={()=>deleteMedia("pdfKey")}>Delete PDF</button>}<button className="btn btn-secondary" onClick={()=>upload("thumbnailKey")}>🖼 Thumbnail</button>{editing.thumbnailKey&&<button className="btn btn-danger" onClick={()=>deleteMedia("thumbnailKey")}>Delete thumbnail</button>}</div>
          <label className="check"><input type="checkbox" checked={!!editing.isFree} onChange={e=>setEditing({...editing,isFree:e.target.checked})}/> Free lesson</label>
          <label className="check"><input type="checkbox" checked={!!editing.isPublished} onChange={e=>setEditing({...editing,isPublished:e.target.checked})}/> Published</label>
        </>}
        {kind==="test"&&<><label>Duration (minutes)<input type="number" value={editing.durationMinutes??30} onChange={e=>setEditing({...editing,durationMinutes:e.target.value})}/></label><label>Total marks<input type="number" value={editing.totalMarks??0} onChange={e=>setEditing({...editing,totalMarks:e.target.value})}/></label><label className="check"><input type="checkbox" checked={!!editing.isPublished} onChange={e=>setEditing({...editing,isPublished:e.target.checked})}/> Published</label></>}
        {kind==="assignment"&&<><label>Due date/time<input type="datetime-local" value={editing.dueAt??""} onChange={e=>setEditing({...editing,dueAt:e.target.value})}/></label><label>Maximum marks<input type="number" value={editing.maxMarks??100} onChange={e=>setEditing({...editing,maxMarks:e.target.value})}/></label></>}
        <div className="actions"><button className="btn btn-primary" disabled={busy} onClick={save}>{busy?"Saving…":"Save changes"}</button><button className="btn btn-secondary" onClick={closeEditor}>Cancel</button></div>
      </div>
    </div></div>}
  </div>;
}
