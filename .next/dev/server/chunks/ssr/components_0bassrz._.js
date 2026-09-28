module.exports = [
"[project]/components/AdminControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackButton",
    ()=>BackButton,
    "DeleteCourseButton",
    ()=>DeleteCourseButton,
    "LogoutButton",
    ()=>LogoutButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function LogoutButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: "/api/auth/logout",
        method: "post",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "sidebar-logout",
            type: "submit",
            children: "↪ Log out"
        }, void 0, false, {
            fileName: "[project]/components/AdminControls.tsx",
            lineNumber: 4,
            columnNumber: 85
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AdminControls.tsx",
        lineNumber: 4,
        columnNumber: 39
    }, this);
}
function BackButton({ fallback = "/admin" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn btn-secondary",
        type: "button",
        onClick: ()=>window.history.length > 1 ? router.back() : router.push(fallback),
        children: "← Back"
    }, void 0, false, {
        fileName: "[project]/components/AdminControls.tsx",
        lineNumber: 5,
        columnNumber: 100
    }, this);
}
function DeleteCourseButton({ id, title }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function remove() {
        if (!confirm(`Delete “${title}”? This cannot be undone.`)) return;
        setBusy(true);
        try {
            const res = await fetch(`/api/courses/${id}`, {
                method: "DELETE"
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Delete failed");
            router.refresh();
        } catch (e) {
            alert(e instanceof Error ? e.message : "Delete failed");
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn btn-danger",
        onClick: remove,
        disabled: busy,
        children: busy ? "Deleting…" : "Delete"
    }, void 0, false, {
        fileName: "[project]/components/AdminControls.tsx",
        lineNumber: 6,
        columnNumber: 495
    }, this);
}
}),
"[project]/components/ContentManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const blank = {
    title: "",
    name: "",
    description: "",
    orderNumber: 0,
    isFree: false,
    isPublished: false,
    videoDuration: "",
    durationMinutes: 30,
    totalMarks: 0,
    maxMarks: 100,
    dueAt: ""
};
async function api(url, opts = {}) {
    const headers = {
        "Content-Type": "application/json",
        ...opts.headers || {}
    };
    const res = await fetch(url, {
        ...opts,
        headers
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
}
function ContentManager({ courseId }) {
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [chapters, setChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [lessons, setLessons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [assignments, setAssignments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSubject, setSelectedSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [selectedChapter, setSelectedChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const loadCourseContent = async ()=>{
        const [s, t, a] = await Promise.all([
            api(`/api/subjects?courseId=${courseId}`),
            api(`/api/tests?courseId=${courseId}`),
            api(`/api/assignments?courseId=${courseId}`)
        ]);
        setSubjects(s.subjects);
        setTests(t.tests);
        setAssignments(a.assignments);
        if (!selectedSubject || !s.subjects.some((x)=>x.id === selectedSubject)) {
            setSelectedSubject(s.subjects[0]?.id || "");
            setChapters([]);
            setSelectedChapter("");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCourseContent().catch((e)=>setMsg(e.message));
    }, [
        courseId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedSubject) {
            setChapters([]);
            setSelectedChapter("");
            return;
        }
        api(`/api/chapters?subjectId=${selectedSubject}`).then((d)=>{
            setChapters(d.chapters);
            if (!d.chapters.some((x)=>x.id === selectedChapter)) setSelectedChapter(d.chapters[0]?.id || "");
        }).catch((e)=>setMsg(e.message));
    }, [
        selectedSubject
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedChapter) {
            setLessons([]);
            return;
        }
        api(`/api/lessons?chapterId=${selectedChapter}`).then((d)=>setLessons(d.lessons)).catch((e)=>setMsg(e.message));
    }, [
        selectedChapter
    ]);
    const visibleLessons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = search.toLowerCase().trim();
        return q ? lessons.filter((x)=>String(x.title).toLowerCase().includes(q)) : lessons;
    }, [
        lessons,
        search
    ]);
    const filtered = (items, field)=>items.filter((x)=>String(x[field] ?? "").toLowerCase().includes(search.toLowerCase().trim()));
    const closeEditor = ()=>{
        setEditing(null);
        setKind("");
    };
    const openNew = (type)=>{
        if (type === "chapter" && !selectedSubject) return setMsg("Select a subject first.");
        if (type === "lesson" && !selectedChapter) return setMsg("Select a chapter first.");
        setMsg("");
        setKind(type);
        setEditing({
            ...blank,
            title: type === "lesson" ? "New Lesson" : type === "chapter" ? "New Chapter" : type === "test" ? "New Test" : type === "assignment" ? "New Assignment" : "",
            name: type === "subject" ? "New Subject" : ""
        });
    };
    const save = async ()=>{
        if (!editing || !kind) return;
        setBusy(true);
        setMsg("");
        try {
            let url = "", body = {};
            if (kind === "subject") {
                url = editing.id ? `/api/subjects/${editing.id}` : "/api/subjects";
                body = {
                    courseId,
                    name: editing.name,
                    description: editing.description,
                    orderNumber: Number(editing.orderNumber)
                };
            }
            if (kind === "chapter") {
                url = editing.id ? `/api/chapters/${editing.id}` : "/api/chapters";
                body = {
                    subjectId: selectedSubject,
                    title: editing.title,
                    description: editing.description,
                    orderNumber: Number(editing.orderNumber)
                };
            }
            if (kind === "lesson") {
                url = editing.id ? `/api/lessons/${editing.id}` : "/api/lessons";
                body = {
                    chapterId: selectedChapter,
                    title: editing.title,
                    description: editing.description,
                    orderNumber: Number(editing.orderNumber),
                    isFree: !!editing.isFree,
                    isPublished: !!editing.isPublished,
                    videoKey: editing.videoKey || null,
                    pdfKey: editing.pdfKey || null,
                    thumbnailKey: editing.thumbnailKey || null,
                    videoDuration: editing.videoDuration ? Number(editing.videoDuration) : null
                };
            }
            if (kind === "test") {
                url = editing.id ? `/api/tests/${editing.id}` : "/api/tests";
                body = {
                    courseId,
                    title: editing.title,
                    description: editing.description,
                    durationMinutes: Number(editing.durationMinutes),
                    totalMarks: Number(editing.totalMarks),
                    isPublished: !!editing.isPublished
                };
            }
            if (kind === "assignment") {
                url = editing.id ? `/api/assignments/${editing.id}` : "/api/assignments";
                body = {
                    courseId,
                    title: editing.title,
                    description: editing.description,
                    dueAt: editing.dueAt || null,
                    maxMarks: Number(editing.maxMarks)
                };
            }
            await api(url, {
                method: editing.id ? "PATCH" : "POST",
                body: JSON.stringify(body)
            });
            setMsg("Saved successfully.");
            closeEditor();
            await loadCourseContent();
            if (selectedChapter) {
                const d = await api(`/api/lessons?chapterId=${selectedChapter}`);
                setLessons(d.lessons);
            }
        } catch (e) {
            setMsg(e instanceof Error ? e.message : "Save failed");
        } finally{
            setBusy(false);
        }
    };
    const removeItem = async (type, id, label)=>{
        if (!confirm(`Delete “${label}”? This cannot be undone.`)) return;
        setBusy(true);
        try {
            const prefix = type === "subject" ? "subjects" : type === "chapter" ? "chapters" : type === "lesson" ? "lessons" : type === "test" ? "tests" : "assignments";
            await api(`/api/${prefix}/${id}`, {
                method: "DELETE"
            });
            setMsg("Deleted successfully.");
            await loadCourseContent();
            if (selectedChapter) {
                const d = await api(`/api/lessons?chapterId=${selectedChapter}`);
                setLessons(d.lessons);
            }
        } catch (e) {
            setMsg(e instanceof Error ? e.message : "Delete failed");
        } finally{
            setBusy(false);
        }
    };
    const upload = async (field)=>{
        if (!editing) return;
        const input = document.createElement("input");
        input.type = "file";
        input.accept = field === "videoKey" ? "video/*" : field === "pdfKey" ? "application/pdf,.pdf" : "image/*";
        input.onchange = async ()=>{
            const file = input.files?.[0];
            if (!file) return;
            setBusy(true);
            try {
                const old = editing[field], fd = new FormData();
                fd.append("file", file);
                fd.append("folder", `courses/${courseId}/${field.replace("Key", "")}`);
                const res = await fetch("/api/media/upload", {
                    method: "POST",
                    body: fd
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Upload failed");
                if (old) await api("/api/media", {
                    method: "DELETE",
                    body: JSON.stringify({
                        key: old
                    })
                });
                setEditing({
                    ...editing,
                    [field]: data.key
                });
                setMsg(`${field.replace("Key", "")} uploaded. Save the lesson to apply it.`);
            } catch (e) {
                setMsg(e instanceof Error ? e.message : "Upload failed");
            } finally{
                setBusy(false);
            }
        };
        input.click();
    };
    const deleteMedia = async (field)=>{
        if (!editing?.[field]) return;
        if (!confirm("Delete this media file?")) return;
        try {
            await api("/api/media", {
                method: "DELETE",
                body: JSON.stringify({
                    key: editing[field]
                })
            });
            setEditing({
                ...editing,
                [field]: null
            });
            setMsg("Media removed. Save the lesson to apply it.");
        } catch (e) {
            setMsg(e instanceof Error ? e.message : "Delete failed");
        }
    };
    const card = (title, children, add)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "panel cms-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cms-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "CMS"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 103,
                                    columnNumber: 129
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 103,
                                    columnNumber: 165
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContentManager.tsx",
                            lineNumber: 103,
                            columnNumber: 124
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary",
                            onClick: add,
                            children: "+ Add"
                        }, void 0, false, {
                            fileName: "[project]/components/ContentManager.tsx",
                            lineNumber: 103,
                            columnNumber: 187
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContentManager.tsx",
                    lineNumber: 103,
                    columnNumber: 98
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ContentManager.tsx",
            lineNumber: 103,
            columnNumber: 62
        }, this);
    const actions = (type, x, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "actions",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-secondary",
                    onClick: (e)=>{
                        e.stopPropagation();
                        setKind(type);
                        setEditing({
                            ...blank,
                            ...x,
                            videoKey: x.video_key,
                            pdfKey: x.pdf_key,
                            thumbnailKey: x.thumbnail_key,
                            isFree: !!x.is_free,
                            isPublished: !!x.is_published,
                            durationMinutes: x.duration_minutes,
                            totalMarks: x.total_marks,
                            maxMarks: x.max_marks,
                            dueAt: x.due_at || ""
                        });
                    },
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/components/ContentManager.tsx",
                    lineNumber: 104,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-danger",
                    onClick: (e)=>{
                        e.stopPropagation();
                        removeItem(type, x.id, label);
                    },
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/components/ContentManager.tsx",
                    lineNumber: 104,
                    columnNumber: 419
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ContentManager.tsx",
            lineNumber: 104,
            columnNumber: 51
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cms",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⌕"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 107,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        placeholder: "Search subjects, chapters, lessons, tests and assignments…"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 107,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        onClick: ()=>setSearch(""),
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 107,
                        columnNumber: 182
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 107,
                columnNumber: 5
            }, this),
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-message",
                children: msg
            }, void 0, false, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-grid",
                children: [
                    card("Subjects", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(subjects, "name").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `cms-row ${selectedSubject === x.id ? "selected" : ""}`,
                                    onClick: ()=>setSelectedSubject(x.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 206
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: x.description || "No description"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 221
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 110,
                                            columnNumber: 201
                                        }, this),
                                        actions("subject", x, x.name)
                                    ]
                                }, x.id, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 110,
                                    columnNumber: 84
                                }, this)),
                            !subjects.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: "No subjects yet."
                            }, void 0, false, {
                                fileName: "[project]/components/ContentManager.tsx",
                                lineNumber: 110,
                                columnNumber: 331
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 110,
                        columnNumber: 24
                    }, this), ()=>openNew("subject")),
                    card("Chapters", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(chapters, "title").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `cms-row ${selectedChapter === x.id ? "selected" : ""}`,
                                    onClick: ()=>setSelectedChapter(x.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 207
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: x.description || "No description"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 223
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 111,
                                            columnNumber: 202
                                        }, this),
                                        actions("chapter", x, x.title)
                                    ]
                                }, x.id, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 111,
                                    columnNumber: 85
                                }, this)),
                            selectedSubject && !chapters.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: "No chapters yet."
                            }, void 0, false, {
                                fileName: "[project]/components/ContentManager.tsx",
                                lineNumber: 111,
                                columnNumber: 351
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 111,
                        columnNumber: 24
                    }, this), ()=>openNew("chapter"))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, this),
            card("Lessons & Media", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-list",
                children: [
                    visibleLessons.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cms-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: x.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 113,
                                            columnNumber: 119
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: [
                                                x.video_key ? "🎬 Video" : "—",
                                                x.pdf_key ? " • 📄 PDF" : "",
                                                x.is_published ? " • Published" : " • Draft"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 113,
                                            columnNumber: 135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 113,
                                    columnNumber: 114
                                }, this),
                                actions("lesson", x, x.title)
                            ]
                        }, x.id, true, {
                            fileName: "[project]/components/ContentManager.tsx",
                            lineNumber: 113,
                            columnNumber: 78
                        }, this)),
                    !visibleLessons.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty",
                        children: "Select a chapter or add a lesson."
                    }, void 0, false, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 113,
                        columnNumber: 314
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 113,
                columnNumber: 29
            }, this), ()=>openNew("lesson")),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-grid",
                children: [
                    card("Tests", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(tests, "title").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cms-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 120
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        x.duration_minutes,
                                                        " min • ",
                                                        x.total_marks,
                                                        " marks",
                                                        x.is_published ? " • Published" : " • Draft"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 136
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 115,
                                            columnNumber: 115
                                        }, this),
                                        actions("test", x, x.title)
                                    ]
                                }, x.id, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 115,
                                    columnNumber: 79
                                }, this)),
                            !tests.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: "No tests yet."
                            }, void 0, false, {
                                fileName: "[project]/components/ContentManager.tsx",
                                lineNumber: 115,
                                columnNumber: 298
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, this), ()=>openNew("test")),
                    card("Assignments", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(assignments, "title").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cms-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 132
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        x.max_marks,
                                                        " marks",
                                                        x.due_at ? ` • Due ${x.due_at}` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 148
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 116,
                                            columnNumber: 127
                                        }, this),
                                        actions("assignment", x, x.title)
                                    ]
                                }, x.id, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 116,
                                    columnNumber: 91
                                }, this)),
                            !assignments.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: "No assignments yet."
                            }, void 0, false, {
                                fileName: "[project]/components/ContentManager.tsx",
                                lineNumber: 116,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 116,
                        columnNumber: 27
                    }, this), ()=>openNew("assignment"))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 114,
                columnNumber: 5
            }, this),
            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cms-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: editing.id ? "EDIT" : "CREATE"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 119,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: kind
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 119,
                                            columnNumber: 99
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 119,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-secondary",
                                    onClick: closeEditor,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 119,
                                    columnNumber: 120
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContentManager.tsx",
                            lineNumber: 119,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        kind === "subject" ? "Name" : "Title",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: kind === "subject" ? editing.name ?? "" : editing.title ?? "",
                                            onChange: (e)=>setEditing({
                                                    ...editing,
                                                    ...kind === "subject" ? {
                                                        name: e.target.value
                                                    } : {
                                                        title: e.target.value
                                                    }
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 121,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 121,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Description",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 4,
                                            value: editing.description ?? "",
                                            onChange: (e)=>setEditing({
                                                    ...editing,
                                                    description: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 122,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 122,
                                    columnNumber: 9
                                }, this),
                                [
                                    'subject',
                                    'chapter',
                                    'lesson'
                                ].includes(kind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Order",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: editing.orderNumber ?? 0,
                                            onChange: (e)=>setEditing({
                                                    ...editing,
                                                    orderNumber: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 123,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 123,
                                    columnNumber: 57
                                }, this),
                                kind === "lesson" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Video duration (seconds)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: editing.videoDuration ?? "",
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            videoDuration: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 125,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-secondary",
                                                    onClick: ()=>upload("videoKey"),
                                                    children: [
                                                        "🎬 ",
                                                        editing.videoKey ? "Replace video" : "Upload video"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 36
                                                }, this),
                                                editing.videoKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-danger",
                                                    onClick: ()=>deleteMedia("videoKey"),
                                                    children: "Delete video"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 187
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-secondary",
                                                    onClick: ()=>upload("pdfKey"),
                                                    children: [
                                                        "📄 ",
                                                        editing.pdfKey ? "Replace PDF" : "Upload PDF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 282
                                                }, this),
                                                editing.pdfKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-danger",
                                                    onClick: ()=>deleteMedia("pdfKey"),
                                                    children: "Delete PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 423
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-secondary",
                                                    onClick: ()=>upload("thumbnailKey"),
                                                    children: "🖼 Thumbnail"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 514
                                                }, this),
                                                editing.thumbnailKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-danger",
                                                    onClick: ()=>deleteMedia("thumbnailKey"),
                                                    children: "Delete thumbnail"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 633
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 126,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: !!editing.isFree,
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            isFree: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 36
                                                }, this),
                                                " Free lesson"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 127,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: !!editing.isPublished,
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            isPublished: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 36
                                                }, this),
                                                " Published"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 128,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 124,
                                    columnNumber: 27
                                }, this),
                                kind === "test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Duration (minutes)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: editing.durationMinutes ?? 30,
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            durationMinutes: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 52
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 130,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Total marks",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: editing.totalMarks ?? 0,
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            totalMarks: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 206
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 130,
                                            columnNumber: 188
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: !!editing.isPublished,
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            isPublished: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 356
                                                }, this),
                                                " Published"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 130,
                                            columnNumber: 331
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this),
                                kind === "assignment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Due date/time",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "datetime-local",
                                                    value: editing.dueAt ?? "",
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            dueAt: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Maximum marks",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: editing.maxMarks ?? 100,
                                                    onChange: (e)=>setEditing({
                                                            ...editing,
                                                            maxMarks: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 197
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 131,
                                            columnNumber: 177
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 131,
                                    columnNumber: 31
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary",
                                            disabled: busy,
                                            onClick: save,
                                            children: busy ? "Saving…" : "Save changes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 132,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-secondary",
                                            onClick: closeEditor,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 132,
                                            columnNumber: 141
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 132,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContentManager.tsx",
                            lineNumber: 120,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContentManager.tsx",
                    lineNumber: 118,
                    columnNumber: 47
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 118,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentManager.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=components_0bassrz._.js.map