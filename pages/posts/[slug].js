// pages/posts/[slug].js
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

  // ✅ Fix: safely generate slug
  const slug = frontmatter?.title
    ? frontmatter.title.toLowerCase().replace(/\s+/g, '-')
    : 'untitled';

  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(() => setComments([]));
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, slug }),
    });
    const data = await res.json();
    if (res.ok) {
      setComments((prev) => [data.comment, ...prev]);
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        .post-article {
          padding: 2rem;
        }
        @media (max-width: 640px) {
          .post-article {
            padding: 1rem;
          }
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
        className="post-article"
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

        {/* Hero Image */}
        {frontmatter.image && (
          <div
            style={{
              width: '100%',
              maxWidth: '800px',
              margin: '0.5rem auto 1.5rem',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '42%' }}>
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, 800px"
              />
            </div>
          </div>
        )}

        {/* Markdown Content */}
        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* ✅ Multiple Products Section */}
        {frontmatter.products && frontmatter.products.length > 0 && (
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              borderRadius: '12px',
              backgroundColor: 'var(--card-bg)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            }}
          >
            <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>🛒 Featured Products</h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'space-between',
              }}
            >
              {frontmatter.products.map((item, index) => (
                <div
                  key={index}
                  style={{
                    flex: '1 1 260px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '1rem',
                    backgroundColor: 'var(--bg-color)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={260}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginBottom: '0.8rem',
                      width: '100%',
                      height: '200px',
                    }}
                  />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.name}</h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.6rem 1rem',
                      backgroundColor: '#db923eff',
                      color: '#fff',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '600',
                    }}
                  >
                    Buy Now →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Comments */}
      <div style={{ maxWidth: '800px', margin: '1.5rem auto' }}>
        <CommentBox slug={slug} />
      </div>
    </main>
  );
}
