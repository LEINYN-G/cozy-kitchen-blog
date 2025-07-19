import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CommentBox from '../../components/CommentBox';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'posts', slug + '.md'),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter: data,
      contentHtml,
    },
  };
}

export default function PostPage({ frontmatter, contentHtml, theme, setTheme }) {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

  const slug = frontmatter.title.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, slug }),
    });
    const data = await res.json();
    if (res.ok) {
      setComments(prev => [data.comment, ...prev]);
      setFormData({ name: '', email: '', comment: '' });
    } else {
      alert(data.error);
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        padding: '2rem',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style jsx global>{`
        .markdown-content img {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px;
          margin: 1rem 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            background: 'var(--card-bg)',
            color: 'var(--text-color)',
            cursor: 'pointer',
            boxShadow: '0 0 5px var(--card-shadow)',
          }}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <article
        style={{
          maxWidth: '800px',
          margin: 'auto',
          padding: '2rem',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-color)',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          lineHeight: '1.7',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{frontmatter.title}</h1>
        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>{frontmatter.date}</p>

        {frontmatter.image && (
          <div style={{ marginBottom: '1.5rem' }}>
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              width={600}
              height={300}
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
          </div>
        )}

        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {frontmatter.product && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '12px',
            backgroundColor: 'var(--card-bg)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>🛒 Recommended Product</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={frontmatter.product.image}
                alt={frontmatter.product.name}
                style={{
                  width: '140px',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  {frontmatter.product.name}
                </p>
                <a
                  href={frontmatter.product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#7b4c3a',
                    color: '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '0.3rem'
                  }}
                >
                  Buy Now!
                </a>
              </div>
            </div>
          </div>
        )}
      </article>

      <CommentBox slug={slug} />
    </main>
  );
}
