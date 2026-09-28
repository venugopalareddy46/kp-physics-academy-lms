import {NextResponse} from "next/server"; import {getSession} from "@/lib/auth"; import {remove} from "@/lib/r2";
export const runtime="nodejs";
export async function POST(req:Request){const s=await getSession();if(!s||s.role!=="admin")return NextResponse.json({error:"Admin access required"},{status:403});const {key}=await req.json();if(!key||typeof key!=="string")return NextResponse.json({error:"key required"},{status:400});await remove(key);return NextResponse.json({success:true})}
