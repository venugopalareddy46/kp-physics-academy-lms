(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AdminControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackButton",
    ()=>BackButton,
    "DeleteCourseButton",
    ()=>DeleteCourseButton,
    "LogoutButton",
    ()=>LogoutButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function LogoutButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: "/api/auth/logout",
        method: "post",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = LogoutButton;
function BackButton({ fallback = "/admin" }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(BackButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = BackButton;
function DeleteCourseButton({ id, title }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s1(DeleteCourseButton, "ytMl8GXyBQIkZXghr9h+JxchIn8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = DeleteCourseButton;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LogoutButton");
__turbopack_context__.k.register(_c1, "BackButton");
__turbopack_context__.k.register(_c2, "DeleteCourseButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContentManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [chapters, setChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [lessons, setLessons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [assignments, setAssignments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSubject, setSelectedSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [selectedChapter, setSelectedChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentManager.useEffect": ()=>{
            loadCourseContent().catch({
                "ContentManager.useEffect": (e)=>setMsg(e.message)
            }["ContentManager.useEffect"]);
        }
    }["ContentManager.useEffect"], [
        courseId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentManager.useEffect": ()=>{
            if (!selectedSubject) {
                setChapters([]);
                setSelectedChapter("");
                return;
            }
            api(`/api/chapters?subjectId=${selectedSubject}`).then({
                "ContentManager.useEffect": (d)=>{
                    setChapters(d.chapters);
                    if (!d.chapters.some({
                        "ContentManager.useEffect": (x)=>x.id === selectedChapter
                    }["ContentManager.useEffect"])) setSelectedChapter(d.chapters[0]?.id || "");
                }
            }["ContentManager.useEffect"]).catch({
                "ContentManager.useEffect": (e)=>setMsg(e.message)
            }["ContentManager.useEffect"]);
        }
    }["ContentManager.useEffect"], [
        selectedSubject
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentManager.useEffect": ()=>{
            if (!selectedChapter) {
                setLessons([]);
                return;
            }
            api(`/api/lessons?chapterId=${selectedChapter}`).then({
                "ContentManager.useEffect": (d)=>setLessons(d.lessons)
            }["ContentManager.useEffect"]).catch({
                "ContentManager.useEffect": (e)=>setMsg(e.message)
            }["ContentManager.useEffect"]);
        }
    }["ContentManager.useEffect"], [
        selectedChapter
    ]);
    const visibleLessons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContentManager.useMemo[visibleLessons]": ()=>{
            const q = search.toLowerCase().trim();
            return q ? lessons.filter({
                "ContentManager.useMemo[visibleLessons]": (x)=>String(x.title).toLowerCase().includes(q)
            }["ContentManager.useMemo[visibleLessons]"]) : lessons;
        }
    }["ContentManager.useMemo[visibleLessons]"], [
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
    const card = (title, children, add)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "panel cms-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cms-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "CMS"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContentManager.tsx",
                                    lineNumber: 103,
                                    columnNumber: 129
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    const actions = (type, x, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "actions",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cms",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⌕"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 107,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        placeholder: "Search subjects, chapters, lessons, tests and assignments…"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentManager.tsx",
                        lineNumber: 107,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-message",
                children: msg
            }, void 0, false, {
                fileName: "[project]/components/ContentManager.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-grid",
                children: [
                    card("Subjects", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(subjects, "name").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `cms-row ${selectedSubject === x.id ? "selected" : ""}`,
                                    onClick: ()=>setSelectedSubject(x.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 206
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
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
                            !subjects.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    card("Chapters", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(chapters, "title").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `cms-row ${selectedChapter === x.id ? "selected" : ""}`,
                                    onClick: ()=>setSelectedChapter(x.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 207
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
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
                            selectedSubject && !chapters.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            card("Lessons & Media", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-list",
                children: [
                    visibleLessons.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cms-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: x.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 113,
                                            columnNumber: 119
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
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
                    !visibleLessons.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cms-grid",
                children: [
                    card("Tests", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(tests, "title").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cms-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 120
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
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
                            !tests.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    card("Assignments", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cms-list",
                        children: [
                            filtered(assignments, "title").map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cms-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: x.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 132
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
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
                            !assignments.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cms-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: editing.id ? "EDIT" : "CREATE"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 119,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        kind === "subject" ? "Name" : "Title",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Description",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                ].includes(kind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Order",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                kind === "lesson" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Video duration (seconds)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                editing.videoKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-danger",
                                                    onClick: ()=>deleteMedia("videoKey"),
                                                    children: "Delete video"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 187
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                editing.pdfKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-danger",
                                                    onClick: ()=>deleteMedia("pdfKey"),
                                                    children: "Delete PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 423
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-secondary",
                                                    onClick: ()=>upload("thumbnailKey"),
                                                    children: "🖼 Thumbnail"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContentManager.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 514
                                                }, this),
                                                editing.thumbnailKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                kind === "test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Duration (minutes)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Total marks",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                kind === "assignment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Due date/time",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Maximum marks",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary",
                                            disabled: busy,
                                            onClick: save,
                                            children: busy ? "Saving…" : "Save changes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContentManager.tsx",
                                            lineNumber: 132,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(ContentManager, "hloBMWmWOYE7ACUCaeM19Vc+BBk=");
_c = ContentManager;
var _c;
__turbopack_context__.k.register(_c, "ContentManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_02_dh0t._.js.map