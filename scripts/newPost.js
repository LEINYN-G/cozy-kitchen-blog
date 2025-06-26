const fs = require('fs');
const path = require('path');

const titleToSlug = (title) =>
  title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('❌ Please provide a post title');
  process.exit(1);
}

const postTitle = args.join(' ');
const slug = titleToSlug(postTitle);
const date = new Date().toISOString().split('T')[0];

// Paths
const postsDir = path.join(__dirname, '..', 'posts');
const imgDir = path.join(__dirname, '..', 'public', 'images', slug);

// Create directories if needed
if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir);
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

// Placeholder markdown
let imageRefs = `
![Main Dish](/images/${slug}/main.jpg)

## Ingredients

- List your ingredients here.

![Step](/images/${slug}/step1.gif)

## Instructions

1. Your first step.
2. Your second step.

![Final Dish](/images/${slug}/final.jpg)
`;

const mdContent = `---
title: "${postTitle}"
date: "${date}"
---

${imageRefs}

Write your recipe description here.
`;

const postPath = path.join(postsDir, `${slug}.md`);
fs.writeFileSync(postPath, mdContent);
console.log(`✅ Created post: posts/${slug}.md`);
console.log(`📁 Created media folder: public/posts/${slug}/`);
console.log(`📷 Add images like main.jpg, step1.gif, final.jpg to the folder.`);
