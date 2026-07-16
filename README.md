# Saksham - Personal Portfolio

A minimal, engineering-focused personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **MDX** for blog posts and project pages
- **Framer Motion** for subtle animations
- **Lucide React** for icons
- **Shiki** for syntax highlighting

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── blog/              # Blog listing and post pages
├── projects/          # Projects listing and detail pages
├── experience/        # Experience timeline page
├── layout.tsx         # Root layout with navbar and footer
├── page.tsx           # Landing page
└── globals.css        # Global styles with Tailwind v4

components/
├── background.tsx     # Premium engineering-inspired background
├── navbar.tsx         # Sticky navigation
├── container.tsx      # Responsive container
├── section.tsx        # Section wrapper
├── badge.tsx          # Technology badges
├── project-card.tsx   # Project preview card
├── blog-card.tsx      # Blog post preview card
├── timeline.tsx       # Experience timeline
├── code-block.tsx     # Syntax-highlighted code blocks
├── callout.tsx        # MDX callout component
├── terminal.tsx       # Terminal component
├── file-tree.tsx      # File tree component
├── architecture-diagram.tsx  # Architecture diagram wrapper
├── footer.tsx         # Footer with social links
├── social-links.tsx   # Social media links
└── fade-in.tsx        # Framer Motion fade-in animation

lib/
├── utils.ts           # Utility functions (cn helper)
├── mdx.ts             # MDX content parsing
├── mdx-components.tsx # Custom MDX components
└── shiki.ts           # Shiki syntax highlighting

content/
├── blog/              # MDX blog posts
└── projects/          # MDX project pages
```

## Adding Content

### Blog Posts

Create a new MDX file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2024-01-15"
tags: ["distributed-systems", "go"]
readingTime: "5 min read"
---

Your content here...
```

### Projects

Create a new MDX file in `content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
date: "2024-01-15"
tags: ["go", "distributed-systems"]
readingTime: "8 min read"
---

## Overview

Project overview...

## Architecture

Architecture details...
```

## Design Philosophy

This portfolio follows a minimal, timeless design inspired by:
- Apple
- Vercel
- Linear
- Raycast
- Stripe Docs

The design prioritizes:
- Typography
- Whitespace
- Readability
- Engineering aesthetic
- Performance

## Deployment

Optimized for deployment on Vercel:

```bash
vercel
```

## License

MIT

