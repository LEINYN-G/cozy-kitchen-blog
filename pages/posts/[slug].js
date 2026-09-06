// pages/posts/[slug].js
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CommentBox from '../../components/CommentBox';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Cyberpunk style theme

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
  // FIXED: Added decodeURIComponent to handle spaces (%20) safely in filenames
  const decodedSlug = decodeURIComponent(slug);

  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'posts', decodedSlug + '.md'),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  // Directly returning raw content string so ReactMarkdown can parse it dynamically
  return {
    props: {
      frontmatter: data,
      content, 
    },
  };
}

export default function PostPage({ frontmatter, content, theme, setTheme }) {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  // fetch the variables from frontmatter and will defaults fallback set if in-case they're not defined in the frontmatter of the markdown file. 
  const pageBg = frontmatter.bg_theme || 'var(--bg-color)';
  const pageText = frontmatter.text_theme || 'var(--text-color)';
  const cardBg = frontmatter.card_theme || 'var(--card-bg)';

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
        backgroundColor: pageBg,   // 🚀 DYNAMIC BACKGROUND COLOR
        color: pageText,           // 🚀 DYNAMIC TEXT COLOR
        padding: '2rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        transition: 'all 0.3s ease'
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
          box-shadow: 0 2px 8px rgba(93, 74, 147, 0.08);
        }
        .post-article {
          padding: 2rem;
        }
        @media (max-width: 640px) {
          .post-article {
            padding: 1rem;
          }
        }

        .shop-item-node:hover {
          border-color: #00ffff !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 255, 255, 0.05) !important;
        }
        .buy-btn-node:hover {
         background-color: #00ffff !important;
         color: #0c0a0c !important;
         box-shadow: 0 0 15px rgba(0, 255, 255, 0.3) !important;
        }

        .cyber-product-shelf {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .cyber-product-shelf:hover {
          border-color: #00ffff !important;
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.08) !important;
        }
        .cyber-purchase-trigger:hover {
          background-color: #ff007f !important;
          color: #ffffff !important;
          box-shadow: 0 0 20px rgba(255, 0, 127, 0.4) !important;
          transform: translateY(-1px);
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
          backgroundColor: cardBg,   // 🚀 DYNAMIC INNER BOX BG
          color: pageText,           // 🚀 DYNAMIC ARTICLE FONT COLOR
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          lineHeight: '1.7',
          transition: 'all 0.3s ease'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: pageText }}>{frontmatter.title}</h1>
        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: pageText, opacity: 0.7 }}>{frontmatter.date}</p>

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

        <ReactMarkdown
  children={content}
  components={{
    // Existing code block rendering mappings (SyntaxHighlighter) bilkul same rahenge...

    // 🚀 1. OVERRIDING HEADINGS TO CREATE INTEGRATED PRODUCTS SHELF CARDS
    h3({ children }) {
      const productName = children.toString() || 'PRODUCT_NODE';
      
      // Fetch dynamic local images link form frontmatter
      let productImage = '/images/default-thumb.jpg'; //Fallback link

      if (productName.toLowerCase().includes('almond')) productImage = frontmatter.almond_img || productImage;
      if (productName.toLowerCase().includes('lavender')) productImage = frontmatter.lavender_img || productImage;
      if (productName.toLowerCase().includes('tea')) productImage = frontmatter.teatree_img || productImage;
      if (productName.toLowerCase().includes('beans')) productImage = frontmatter.beans_img || productImage;
      if (productName.toLowerCase().includes('oats')) productImage = frontmatter.oats_img || productImage;

     // to pass the hydration i've used react fragment (<>) and heading semantic component
      return (
        <span style={{ display: 'block', margin: '2.5rem 0 1rem 0' }}>
          <span 
            className="cyber-product-shelf"
            style={{
              backgroundColor: '#110e14',
              border: '1px solid #1e1924',
              borderRadius: '8px',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }} 
          >
            <span style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#0a080d', border: '1px solid #2a2233', display: 'block' }}>
                <img src={productImage} alt={productName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <span>
                <span style={{ display: 'block', fontSize: '9px', fontFamily: "'JetBrains Mono', monospace", color: '#00ffff', tracking: '1px', border: '1px solid rgba(0,255,255,0.2)', padding: '1px 6px', borderRadius: '3px', width: 'fit-content' }}>
                  MARKETPLACE // SECURE_NODE
                </span>
                {/* Real semantic text parameter heading here to protect it from wrapping breakdowns */}
                <strong style={{ display: 'block', fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', margin: '6px 0 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {children}
                </strong>
              </span>
            </span>
          </span>
        </span>
      );
    },

    // 🚀 2. CLEAN UP PARAGRAPHS INSIDE CARDS
    p({ children }) {
      // Normal output text styling inside blocks
      return <p style={{ color: '#a0a0b0', lineHeight: '1.7', fontSize: '14px', margin: '0.5rem 0' }}>{children}</p>;
    },

    // 🚀 3. TRANSFORM COPIED AMZN AFFILIATE SHORT LINKS INTO FUTURISTIC BUTTONS
    a({ href, children }) {
      // Direct raw plain link arrays extract processing
      const linkText = children?.toString() || '';
      const isAmazonNode = linkText.includes('amzn.to') || href?.includes('amzn.to') || linkText.includes('Amazon');

      if (isAmazonNode) {
        // Safe parameter redirection URL binding fallback
        const targetUrl = linkText.startsWith('http') ? linkText : href;
        
        return (
          <div style={{ marginTop: '1rem' }}>
            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 0, 127, 0.04)',
                border: '1px solid #ff007f',
                color: '#ff007f',
                borderRadius: '4px',
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: '700',
                letterSpacing: '0.5px',
                boxShadow: '0 0 15px rgba(255, 0, 127, 0.1)',
                transition: 'all 0.25s ease'
              }}
              className="cyber-purchase-trigger"
            >
              ⚡ INITIALIZE_PURCHASE_NODE
            </a>
          </div>
        );
      }

      return <a href={href} style={{ color: '#00ffff', textDecoration: 'underline' }}>{children}</a>;
    }
  }}
/>

        {/* Multiple Products Section */}
        {frontmatter.products && frontmatter.products.length > 0 && (
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              borderRadius: '12px',
              backgroundColor: cardBg,
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            }}
          >
            <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', color: pageText }}>🛒 Featured Products</h3>
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
                    backgroundColor: cardBg,
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
                      backgroundColor: 'rgb(17, 195, 94)',
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
      <div style={{ maxWidth: '600px', margin: '1.5rem auto' }}>
        <CommentBox slug={slug} />
      </div>
    </main>
  );
}
