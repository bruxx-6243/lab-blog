import { Comment, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Comment).values([
    {
      author: "Glody",
      body: "This is a comment",
      post_id: "second",
    },
    {
      author: "Daniel",
      body: "This is a comment",
      post_id: "first",
    },
    {
      author: "Alex",
      body: "This is a comment",
      post_id: "second",
    },
    {
      author: "Achile",
      body: "This is a comment",
      post_id: "first",
    },
  ]);
}
