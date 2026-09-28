"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function LogoutButton(){return <form action="/api/auth/logout" method="post"><button className="sidebar-logout" type="submit">↪ Log out</button></form>}
export function BackButton({fallback="/admin"}:{fallback?:string}){const router=useRouter();return <button className="btn btn-secondary" type="button" onClick={()=>window.history.length>1?router.back():router.push(fallback)}>← Back</button>}
export function DeleteCourseButton({id,title}:{id:string;title:string}){const router=useRouter();const[busy,setBusy]=useState(false);async function remove(){if(!confirm(`Delete “${title}”? This cannot be undone.`))return;setBusy(true);try{const res=await fetch(`/api/courses/${id}`,{method:"DELETE"});const data=await res.json();if(!res.ok)throw new Error(data.error||"Delete failed");router.refresh()}catch(e){alert(e instanceof Error?e.message:"Delete failed")}finally{setBusy(false)}}return <button className="btn btn-danger" onClick={remove} disabled={busy}>{busy?"Deleting…":"Delete"}</button>}
