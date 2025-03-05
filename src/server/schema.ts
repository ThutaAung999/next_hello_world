import {serial, pgTable, text } from "drizzle-orm/pg-core";

export const todos = pgTable("todos",{
   id: serial("id").primaryKey(),
    title:text("title").notNull(),
})

/* import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
 */

export const posts= pgTable("posts",{
  id: serial("id").primaryKey(),
  title:text("title").notNull(),
  description:text("description").notNull(),
})