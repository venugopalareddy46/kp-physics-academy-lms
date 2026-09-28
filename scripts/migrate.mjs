import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';
import dotenv from 'dotenv';
dotenv.config({path:'.env'});

const file = process.env.SQLITE_PATH || './data/kp-physics.sqlite';
fs.mkdirSync(path.dirname(path.resolve(file)), {recursive:true});
const db = new Database(file);
db.pragma('foreign_keys = ON');
db.pragma('journal_mode = WAL');

for (const name of fs.readdirSync('db/migrations').filter(x=>x.endsWith('.sql')).sort()) {
  console.log('Running', name);
  db.exec(fs.readFileSync(path.join('db/migrations', name), 'utf8'));
}
db.close();
console.log('SQLite migration complete:', file);
