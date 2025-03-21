import { pgTable, text } from 'drizzle-orm/pg-core';

export const john = pgTable('john', {
  name: text('name').primaryKey().unique(),
  item: text('item').unique().notNull(),
});
