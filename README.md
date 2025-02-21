# Akieni Sharing Session 🚀

Welcome to today's sharing session! We'll be diving into `Astro` ✨. Here are the topics we will cover:

## Table of Contents 📌

- [Akieni Sharing Session 🚀](#akieni-sharing-session-)
  - [Table of Contents 📌](#table-of-contents-)
  - [🚀 Introduction to Astro](#-introduction-to-astro)
  - [💡 The Idea Behind Astro](#-the-idea-behind-astro)
  - [🛠️ Astro's Infrastructure](#️-astros-infrastructure)
  - [🌟 Astro's Features](#-astros-features)
  - [🤔 Why Choose Astro?](#-why-choose-astro)
  - [🔄 Different Rendering Modes in Astro](#-different-rendering-modes-in-astro)
  - [🚀 Initializing an Astro Project](#-initializing-an-astro-project)
  - [🏝️ Islands Architecture](#️-islands-architecture)
  - [📚 Content Collection](#-content-collection)

---

## 🚀 Introduction to Astro

Astro is a modern web framework focused on speed and performance, allowing developers to build optimized static and dynamic websites efficiently. The web framework for content-driven websites

## 💡 The Idea Behind Astro

Astro follows an approach that prioritizes shipping less JavaScript by default, ensuring faster page loads and better performance.

## 🛠️ Astro's Infrastructure

Astro is built on a modular architecture that enables integration with various frontend frameworks such as React, Vue, and Svelte while maintaining a simple and lightweight core.

## 🌟 Astro's Features

- 🔹 Component-based development
- 🔹 Partial hydration (Islands Architecture)
- 🔹 Static site generation (SSG) and server-side rendering (SSR)
- 🔹 Markdown and MDX support
- 🔹 Content Collections for structured content management

## 🤔 Why Choose Astro?

Astro is ideal for performance-focused websites, blogs, and e-commerce platforms, reducing JavaScript bloat and improving SEO.

## 🔄 Different Rendering Modes in Astro

Astro offers multiple rendering strategies:

- ⚡ Static Site Generation (SSG)
- 🌐 Server-Side Rendering (SSR)

## 🚀 Initializing an Astro Project

To create a new Astro project, run:

```sh
pnpm create astro@latest
```

Follow the prompts to set up your project.

## 🏝️ Islands Architecture

Astro's [Islands Architecture](https://docs.astro.build/en/concepts/islands/) allows selective hydration of interactive components while keeping the rest of the page static.

> The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions […] that can then be “hydrated” on the client into small self-contained widgets, reusing their server-rendered initial HTML.
> — Jason Miller, Creator of Preact

You can read more about the [Islands Architecture](https://jasonformat.com/islands-architecture), blog post written by [Jason Miller](https://x.com/_developit?lang=fr)

## 📚 Content Collection

Astro provides a structured way to manage content using Content Collections, making it easy to handle markdown-based content efficiently.

```ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean()
    description: z.string()
  }),
});

export const collections = { blog };
```

So now let's fetch data from the content collection

```ts
const posts = await getCollection("blog", ({ data }) => {
  return !data.draft;
});
```
get a single post by slog

```ts
type Props = CollectionEntry<'blog'>
const { slug } = Astro.params

if (!slug) {
  return Astro.redirect('/blogs')
}

const post = await getEntry('blog', slug)

if (!post) {
  return Astro.redirect('/')
}

const { data } = post

const { Content } = await post.render()
```
