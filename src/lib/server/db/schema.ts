import { timestamp, pgTable, text } from 'drizzle-orm/pg-core';

export const john = pgTable('john', {
  name: text('name').primaryKey().unique(),
  item: text('item').unique().notNull(),
  uploader: text('uploader').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull(),
});
