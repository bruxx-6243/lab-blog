import { defineAction } from "astro:actions";
import { Comment, db } from "astro:db";
import { z } from "astro:schema";

export const server = {
  createComment: defineAction({
    accept: "form",
    input: z.object({
      author: z.string(),
      body: z.string(),
      post_id: z.string(),
    }),
    handler: async (input) => {
      await db.insert(Comment).values(input);

      return {
        status: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: "Comment created" }),
      };
    },
  }),
};
