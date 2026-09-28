import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import crypto from 'node:crypto';
dotenv.config({path:'.env'});

const [email, password, ...nameParts]=process.argv.slice(2);
const name=nameParts.join(' ')||'KP Admin';
if(!email||!password){console.error('Usage: node scripts/create-admin.mjs admin@example.com StrongPassword "Admin Name"');process.exit(1)}
const file=process.env.SQLITE_PATH||'./data/kp-physics.sqlite';
const db=new Database(file);
const hash=await bcrypt.hash(password,12);
const id=crypto.randomUUID();
const existing=db.prepare('SELECT id FROM users WHERE email=?').get(email.toLowerCase());
if(existing){
  db.prepare("UPDATE users SET password_hash=?,full_name=?,role='admin',is_active=1,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(hash,name,existing.id);
}else{
  db.prepare("INSERT INTO users(id,email,password_hash,full_name,role,is_active) VALUES(?,?,?,?,'admin',1)").run(id,email.toLowerCase(),hash,name);
}
db.close();
console.log('Admin created/updated:',email);
