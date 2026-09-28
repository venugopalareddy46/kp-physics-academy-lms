import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

let sqlite: Database.Database | undefined;

type Row = Record<string, unknown>;

type QueryResult<T extends Row = Row> = {
  rows: T[];
  rowCount: number;
};

function dbFile() {
  const configured = process.env.SQLITE_PATH || "./data/kp-physics.sqlite";
  return path.isAbsolute(configured) ? configured : path.join(process.cwd(), configured);
}

export function db() {
  if (!sqlite) {
    const file = dbFile();
    fs.mkdirSync(path.dirname(file), { recursive: true });
    sqlite = new Database(file);
    sqlite.pragma("foreign_keys = ON");
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("busy_timeout = 5000");
  }
  return sqlite;
}

function sqliteSql(sql: string) {
  return sql
    .replace(/\$\d+/g, "?")
    .replace(/\bnow\(\)/gi, "CURRENT_TIMESTAMP")
    .replace(/::(?:int|integer|numeric|text|jsonb)/gi, "");
}

export function query<T extends Row = Row>(text: string, values: unknown[] = []): QueryResult<T> {
  const statement = db().prepare(sqliteSql(text));
  const normalized = values.map((value) => {
    if (typeof value === "boolean") return value ? 1 : 0;
    return value;
  });

  if (/^\s*(select|pragma|with)\b/i.test(text) || /\breturning\b/i.test(text)) {
    const rows = statement.all(...normalized) as T[];
    return { rows, rowCount: rows.length };
  }

  const result = statement.run(...normalized);
  return { rows: [], rowCount: Number(result.changes || 0) };
}

export function execute(sql: string) {
  return db().exec(sql);
}
