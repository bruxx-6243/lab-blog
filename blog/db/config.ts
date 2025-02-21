import { column, defineDb, defineTable } from "astro:db";

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    author: column.text(),
    body: column.text(),
    post_id: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comment },
});
