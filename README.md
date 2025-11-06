# 🍝 Cozy Kitchen Blog — A Modern Food & Recipe Website

Welcome to **Cozy Kitchen Blog**, a beautifully crafted and responsive recipe website built with **Next.js**, **Markdown**, and **Tailwind CSS**.  
It’s a space where food meets creativity — from simple comfort dishes to chef-level experiments, all shared in an elegant, easy-to-browse format.

---

## Features

- 🥗 **Markdown-Based Recipes** — Easily add or edit recipes in the `posts/` folder using `.md` files.  
- 🖼️ **Dynamic Images & GIFs** — Support for step-by-step visuals, multiple images, and cooking animations.  
- 🌗 **Light/Dark Mode Toggle** — User-friendly theme switching for comfort viewing.  
- 🧩 **Category Filters & Pagination** — Helps users explore recipes efficiently.  
- 💬 **Comment System** — Engage with readers using a custom comment box component.  
- 🛒 **Affiliate Product Integration** — Promote products (like utensils or ingredients) directly inside your posts.  
- 📱 **Fully Responsive Design** — Works perfectly on mobile, tablet, and desktop.

---

## 🧁 Tech Stack

| Tool | Purpose |
|------|----------|
| **Next.js** | Framework for React-based static generation |
| **React** | Component-based frontend |
| **Tailwind CSS** | Utility-first modern styling |
| **Gray-Matter** | For reading metadata (frontmatter) from markdown files |
| **Remark / Remark-HTML** | Converts markdown into HTML content |
| **Framer Motion** | Smooth animations and transitions |
| **MongoDB (optional)** | Stores comments if connected |
| **Vercel** | Hosting and continuous deployment |

---
💌 About the Creator

Developed by Nisha Kumari,
a passionate developer and food enthusiast who loves combining creativity with technology.
From designing AI-powered tools to crafting beautiful web experiences — she believes code can be both functional and flavorful 🍰

🧾 License
This project is open-source under the MIT License.
Feel free to fork, learn, or improve it — but please give credit where due 🌷

## 🪄 Adding a New Recipe

1. Go to the `/posts` folder.  
2. Create a new markdown file — example:  
3. Add your recipe metadata at the top:
```yaml
---
title: "Creamy Garlic Butter Pasta"
date: "2025-06-16"
author: "Lenyn"
image: "/images/creamy-pasta/pasta.jpg"
category: "Dinner"
products:
  - name: "Olive Oil (Wish you have one too!)"
    link: "https://amzn.to/476hjgx"
    image: "/images/products/olive_oil.jpg"
  - name: "Cutlery Set"
    link: "https://amzn.to/3Lkhy643"
    image: "/images/products/cutlery-set.jpg"
---
4. Write your recipe below in Markdown format — include images, gifs, and steps.

5. Push the file to GitHub — Vercel will automatically deploy it live ✨


