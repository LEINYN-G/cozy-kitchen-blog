import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const POSTS_PER_PAGE = 6;

export default function HomePage({ posts, totalPages, currentPage, theme, setTheme }) {

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const categories = ['All', ...new Set(posts.map(p => p.category).filter(Boolean))];

  const filtered = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const paginated = filtered.slice(0, POSTS_PER_PAGE);

  return (
    <main style={{ padding: '2rem', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem' }}>🍽️ My Cozy Kitchen</h1>
     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <label style={{ fontSize: '0.85rem' }}>{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</label>
  <div
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    style={{
      width: '50px',
      height: '26px',
      borderRadius: '30px',
      backgroundColor: theme === 'light' ? '#ccc' : '#666',
      display: 'flex',
      alignItems: 'center',
      padding: '3px',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    }}
  >
    <div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        transform: theme === 'light' ? 'translateX(0)' : 'translateX(24px)',
        transition: 'transform 0.3s ease'
      }}
    />
  </div>
</div>

      {/* Category Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="category">Filter by category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '0.5rem',
            marginLeft: '0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {paginated.map((post) => {
  const isDraft = post.status === 'draft';

  const card = (
    <div
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-color)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px var(--card-shadow)',
        opacity: isDraft ? 0.6 : 1,
        position: 'relative',
        filter: isDraft ? 'blur(1px)' : 'none',
        transition: 'all 0.3s ease',
        pointerEvents: isDraft ? 'none' : 'auto',
      }}
    >
      {isDraft && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          🔒 Coming Soon
        </div>
      )}

      <Image
        src={post.image || '/images/default-thumb.jpg'}
        alt={post.title}
        width={400}
        height={240}
        style={{ objectFit: 'cover', width: '100%' }}
      />
      <div style={{ padding: '1rem' }}>
        <h2>{post.title}</h2>
        <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>{post.date}</p>
        <p>{isDraft ? 'This recipe is under wraps for now 👩‍🍳' : `${post.excerpt}...`}</p>
      </div>
    </div>
  );

  return isDraft ? (
    <div key={post.slug}>{card}</div>
  ) : (
    <Link key={post.slug} href={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
      {card}
    </Link>
  );
})}
      </section>

      {/* Pagination */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {currentPage > 1 && (
          <Link href={`/page/${currentPage - 1}`}>
            <button>⬅ Previous</button>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/page/${currentPage + 1}`}>
            <button>Next ➡</button>
          </Link>
        )}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const totalPages = Math.ceil(files.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page_index: (i + 1).toString() }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page_index) || 1;
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdown = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data, content } = matter(markdown);

    return {
      slug: filename.replace('.md', ''),
      ...data,
      excerpt: content.split('\n').find((line) => line.trim())?.slice(0, 140) || '',
    };
  });

  return {
    props: {
      posts,
      currentPage: page,
      totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    },
  };
}
