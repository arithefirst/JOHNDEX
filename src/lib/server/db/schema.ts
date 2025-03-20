import { pgTable, text } from 'drizzle-orm/pg-core';

export const user = pgTable('john', {
  name: text('name').primaryKey().unique(),
  item: text('item'),
});
