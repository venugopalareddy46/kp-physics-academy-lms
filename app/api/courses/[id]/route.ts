import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = await query(`SELECT * FROM courses WHERE id=$1`, [id]);
  if (!c.rowCount) return NextResponse.json({ error: "Course not found" }, { status: 404 });
  const s = await query(`SELECT * FROM subjects WHERE course_id=$1 ORDER BY order_number,id`, [id]);
  return NextResponse.json({ success: true, course: c.rows[0], subjects: s.rows });
}

async function update(req: Request, id: string) {
  const b = Object.fromEntries(await req.formData());
  const title=String(b.title??"").trim(), slug=String(b.slug??"").trim(), description=String(b.description??"").trim();
  if(!title||!slug) return NextResponse.json({error:"title and slug required"},{status:400});
  const price=Number(b.price??0); if(!Number.isFinite(price)||price<0)return NextResponse.json({error:"Invalid price"},{status:400});
  const isPublished=String(b.isPublished??"false")==="true";
  const r=await query(`UPDATE courses SET title=$1,slug=$2,description=$3,price=$4,is_free=$5,is_published=$6,updated_at=CURRENT_TIMESTAMP WHERE id=$7 RETURNING *`,[title,slug,description||null,price,price===0,isPublished,id]);
  if(!r.rowCount)return NextResponse.json({error:"Course not found"},{status:404});
  return NextResponse.redirect(new URL("/admin/courses",req.url),303);
}

export async function POST(req:Request,{params}:{params:Promise<{id:string}>}){const s=await getSession();if(!s||s.role!=="admin")return NextResponse.json({error:"Admin access required"},{status:403});const{id}=await params;const fd=await req.formData();if(fd.get("_method")!=="PATCH")return NextResponse.json({error:"Unsupported method"},{status:405});return update(new Request(req.url,{method:"POST",body:fd}),id)}
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){const s=await getSession();if(!s||s.role!=="admin")return NextResponse.json({error:"Admin access required"},{status:403});const{id}=await params;return update(req,id)}
export async function DELETE(_:Request,{params}:{params:Promise<{id:string}>}){const s=await getSession();if(!s||s.role!=="admin")return NextResponse.json({error:"Admin access required"},{status:403});const{id}=await params;const r=await query(`DELETE FROM courses WHERE id=$1`,[id]);if(!r.rowCount)return NextResponse.json({error:"Course not found"},{status:404});return NextResponse.json({success:true})}
