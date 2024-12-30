import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({
  path: ".env.local",
});
const neonUrl = process.env.DATABASE_URL!;

if (!neonUrl) throw new Error("DATABASE_URL not found in environment");

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: neonUrl,
  },
  verbose: true,
  strict: true,
});
