import {Brand} from "./Brand";
export function Topbar(){return <header className="topbar"><div className="container" style={{display:"flex",alignItems:"center",width:"100%"}}><Brand/><nav className="nav"><a href="/">Home</a><a href="/courses">Courses</a><a href="/student">Student</a><a href="/admin">Admin</a><a className="btn btn-primary" href="/login">Login</a></nav></div></header>}
