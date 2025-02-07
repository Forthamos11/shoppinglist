// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "~/env.js";
import * as schema from "./schema.ts";

if (env.DATABASE_URL === undefined) {
  throw new Error("DATABASE_URL must be set");
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
