import { pgTable, varchar, uuid, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").notNull(),
});
