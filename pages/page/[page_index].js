import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Sparkles, Terminal, ArrowRight, LayoutGrid, Calendar} from 'lucide-react';

const POSTS_PER_PAGE = 6;

export default function HomePage({ posts, totalPages, currentPage }) {
  const router = useRouter();
  const { category: queryCategory } = router.query;

  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // URL parameters handler synchronization
  useEffect(() => {
    if (queryCategory) {
      const formattedCategory = queryCategory.toString();
      setSelectedCategory(formattedCategory);
    } else {
      setSelectedCategory('All');
    }
  }, [queryCategory]);

  const types = ['All', ...new Set(posts.map(p => p.type).filter(Boolean))];

  const typeFiltered =
    selectedType === 'All'
      ? posts
      : posts.filter(post => post.type === selectedType);

  const categories = [
    'All',
    ...new Set(posts.map(p => p.category).filter(Boolean))
  ];

  const filtered =
    selectedCategory === 'All'
      ? typeFiltered
      : typeFiltered.filter(
          post =>
            post.category?.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginated = filtered.slice(start, start + POSTS_PER_PAGE);

  // Helper method to assign proper identity colors dynamically based on category metadata keys
  const getCategoryColor = cat => {
    switch (cat?.toLowerCase()) {
      case 'tech':
        return '#00ffff';
      case 'mental-health':
        return '#ff007f';
      case 'kitchen':
        return '#ffaa00';
      case 'society':
        return '#b55fe6';
      default:
        return '#00ffff';
    }
  };

  // 🚀 FIXED CLIENT-SIDE ROUTING FUNCTION
  const handleCategoryChange = catName => {
    setSelectedCategory(catName);

    if (catName === 'All') {
      router.push(`/page/1`, undefined, { shallow: true });
    } else {
      router.push(`/page/1?category=${catName}`, undefined, {
        shallow: true
      });
    }
  };

  return (
    <>
      {/* 1. CYBERPUNK THEMED INTERFACE CONTAINER */}
      <main
        style={{
          padding: '3rem 2rem',
          backgroundColor: '#0c0a0c',
          color: '#e2e8f0',
          minHeight: '100vh',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Grid Mesh & Ambient Light Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.012) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
            maskImage:
              'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(0, 255, 255, 0.04)',
            filter: 'blur(100px)',
            pointerEvents: 'none'
          }}
        />

        {/* TOP BRAND NAVIGATION ASSISTANCE BUTTON */}
        <div
          style={{
            maxWidth: '1050px',
            margin: '0 auto 2.5rem auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#64748b',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            ← RETURN_TO_CORE_HUB
          </Link>
        </div>

        <header
          style={{
            maxWidth: '1050px',
            margin: '0 auto 3rem auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 12px',
              backgroundColor: '#141115',
              border: '1px solid #221d24',
              borderRadius: '4px',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: getCategoryColor(selectedCategory),
              fontWeight: '600',
              letterSpacing: '0.5px',
              marginBottom: '1rem'
            }}
          >
            <Sparkles style={{ width: '12px', height: '12px' }} />
            <span>DATABANK // STORAGE_NODES</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            {selectedCategory !== 'All'
              ? `FILE_NODE // ${selectedCategory}`
              : 'ALL_PUBLICATIONS'}
          </h1>
        </header>

        {/* CONTROLS ENGINE GRID */}
        <section
          style={{
            maxWidth: '1050px',
            margin: '0 auto 3rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* 2. DYNAMIC NEON SELECTION BUTTONS GRID FOR TYPE FILTER */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#5c5c6e',
                textTransform: 'uppercase',
                marginRight: '10px'
              }}
            >
              EXPLORE_TYPE:
            </span>

            {types.map(type => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setSelectedCategory('All');
                  router.push(`/page/1`, undefined, {
                    shallow: true
                  });
                }}
                style={{
                  padding: '6px 16px',
                  borderRadius: '4px',
                  border:
                    selectedType === type
                      ? '1px solid #00ffff'
                      : '1px solid #1c1822',
                  background:
                    selectedType === type
                      ? 'rgba(0, 255, 255, 0.05)'
                      : '#120f14',
                  color:
                    selectedType === type
                      ? '#00ffff'
                      : '#a0a0b0',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
                className="filter-btn"
              >
                {type}
              </button>
            ))}
          </div>

          {/* 3. MATTE DARK SELECTION GRID FOR CATEGORIES */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#5c5c6e',
                textTransform: 'uppercase',
                marginRight: '10px'
              }}
            >
              FILTER_CHANNELS:
            </span>

            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '4px',
                  border:
                    selectedCategory.toLowerCase() ===
                    cat.toLowerCase()
                      ? `1px solid ${getCategoryColor(cat)}`
                      : '1px solid #1c1822',
                  background:
                    selectedCategory.toLowerCase() ===
                    cat.toLowerCase()
                      ? 'rgba(255,255,255,0.02)'
                      : '#120f14',
                  color:
                    selectedCategory.toLowerCase() ===
                    cat.toLowerCase()
                      ? '#ffffff'
                      : '#8c8c9e',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  boxShadow:
                    selectedCategory.toLowerCase() ===
                    cat.toLowerCase()
                      ? `0 0 15px ${getCategoryColor(cat)}20`
                      : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              color: '#64748b',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px'
            }}
          >
            // LOG_ERROR: NO_COMPONENTS_FOUND_IN_THIS_NODE
          </p>
        )}

        {/* CARDS DATA STREAM */}
        <section
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {paginated.map(post => {
            const isDraft = post.status === 'draft';

            const cardInner = (
              <div
                className="post-card"
                style={{
                  backgroundColor: '#120f14',
                  color: '#e2e8f0',
                  borderRadius: '6px',
                  border: '1px solid #1c1822',
                  overflow: 'hidden',
                  opacity: isDraft ? 0.4 : 1,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: isDraft ? 'not-allowed' : 'pointer'
                }}
              >
                {isDraft && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(12,10,12,0.7)',
                      color: '#ff007f',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '11px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                      zIndex: 2
                    }}
                  >
                    🔒 NODE_RESTRICTED // COMING_SOON
                  </div>
                )}

                <div
                  style={{
                    width: '100%',
                    position: 'relative',
                    height: 0,
                    paddingTop: '56.25%'
                  }}
                >
                  <Image
                    src={
                      post.image ||
                      '/images/default-thumb.jpg'
                    }
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>

                <div
                  style={{
                    padding: '1.5rem',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {post.category && (
                    <span
                      style={{
                        fontSize: '10px',
                        fontFamily: "'JetBrains Mono', monospace",
                        textTransform: 'uppercase',
                        color: getCategoryColor(
                          post.category
                        ),
                        fontWeight: 'bold',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {post.category}
                    </span>
                  )}

                  <h2
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: '0.4rem 0'
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      color: '#64748b',
                      fontSize: '11px',
                      fontFamily: "'JetBrains Mono', monospace",
                      margin: '0 0 1rem 0'
                    }}
                  >
                    [{post.date}]
                  </p>

                  <p
                    style={{
                      color: '#8c8c9e',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      margin: 0,
                      fontWeight: '300'
                    }}
                  >
                    {isDraft
                      ? 'Secure decryption protocols required to review this file.'
                      : `${post.excerpt}...`}
                  </p>
                </div>
              </div>
            );

            return isDraft ? (
              <div key={post.slug}>
                {cardInner}
              </div>
            ) : (
              <Link
                href={`/posts/${post.slug}`}
                key={post.slug}
                style={{ textDecoration: 'none' }}
              >
                {cardInner}
              </Link>
            );
          })}
        </section>

       {/* 🛠️ FIXED PAGINATION PANEL (Removes hard routes that trigger 404) */}
        {totalPages > 1 && (
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
            {currentPage > 1 && (
              <Link href={`/page/${currentPage - 1}${selectedCategory !== 'All' ? `?category=${selectedCategory}` : ''}`}>
                <button className="nav-page-btn">⬅ PREV_NODE</button>
              </Link>
            )}
            {currentPage < totalPages && (
              <Link href={`/page/${currentPage + 1}${selectedCategory !== 'All' ? `?category=${selectedCategory}` : ''}`}>
                <button className="nav-page-btn">NEXT_NODE ➡</button>
              </Link>
            )}
          </div>
        )}            

        {/* FOOTER */}
        <footer
          style={{
            maxWidth: '1050px',
            margin: '5rem auto 0 auto',
            padding: '2rem 0 0 0',
            borderTop: '1px solid #1c1822',
            textAlign: 'center',
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#475569'
          }}
        >
          © Copyright Focolove. Designed by Nisha{' '}
          <a
            href="creativecommons.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00ffff' }}
          >
            CC BY 4.0 License.
          </a>
        </footer>

        {/* Styled JSX Dynamic Hover Custom Animations Injection */}
        <style jsx global>{`
          .post-card {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }

          .post-card:hover {
            transform: translateY(-5px);
            border-color: #00ffff !important;
            box-shadow: 0 12px 25px rgba(0, 255, 255, 0.05) !important;
          }

          .filter-btn {
            transition: all 0.25s ease !important;
          }

          .filter-btn:hover {
            border-color: #00ffff !important;
            color: #ffffff !important;
          }

          .nav-page-btn {
            background-color: #120f14;
            border: 1px solid #1c1822;
            color: #a0a0b0;
            padding: 8px 20px;
            border-radius: 4px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s;
          }

          .nav-page-btn:hover {
            border-color: #00ffff;
            color: #00ffff;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
          }
        `}</style>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const totalPages = Math.ceil(
    files.length / POSTS_PER_PAGE
  );

  const paths = Array.from(
    { length: totalPages },
    (_, i) => ({
      params: {
        page_index: (i + 1).toString()
      }
    })
  );

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page_index) || 1;
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(filename => {
    const markdown = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data, content } = matter(markdown);

    return {
      slug: filename.replace('.md', ''),
      ...data,
      excerpt:
        content
          .split('\n')
          .find(line => line.trim())
          ?.slice(0, 140)
    };
  });

  const totalPages = Math.ceil(
    posts.length / POSTS_PER_PAGE
  );

  return {
    props: {
      posts,
      totalPages,
      currentPage: page
    }
  };
}
