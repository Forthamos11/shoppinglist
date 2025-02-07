// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "~/env.js";
import * as schema from "./schema.ts";

if (env.POSTGRES_URL === undefined) {
  throw new Error("POSTGRES_URL must be set");
}

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql, { schema });
