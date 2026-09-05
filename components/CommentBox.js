import { useEffect, useState } from 'react';

export default function CommentBox({ slug }) {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [slug]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Submitting...');
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, slug }),
    });
    const data = await res.json();
    if (res.ok) {
      setComments(prev => [data.comment, ...prev]);
      setFormData({ name: '', email: '', comment: '' });
      setStatus('✅ Comment added!');
      setTimeout(() => setStatus(''), 2000);
    } else {
      setStatus(`❌ ${data.error}`);
    }
  };

  // 🚀 1. UNIQUE SEED GENERATOR FOR REALISTIC FAKE COMMENTS COUNT
  // Yeh algorithm har single slug ke name ke rules par unique number create karega
    {/* 🚀 FIXED: DYNAMIC VARIABLE SEED GENERATOR FOR ACCURATE RANDOM COMMENTS COUNT */}
  const generateFakeCommentCount = (postSlug) => {
    if (!postSlug) return 4;
    
    // Slugs ki character weights calculation mechanism loop
    let charWeightSum = 0;
    for (let i = 0; i < postSlug.length; i++) {
      charWeightSum += postSlug.charCodeAt(i) * (i + 1); // Mutliplied by index position to ensure variations
    }
    
    // Alag-alag random baseline metrics create karne ka matrix algorithm (Range: 4 se 18 comments)
    const randomizedBaseline = (charWeightSum % 15) + 4; 
    
    // Real comment dynamically add default balance framework logic tracking
    return randomizedBaseline + comments.length;
  };

  const dynamicCommentsCount = generateFakeCommentCount(slug);

  return (
    <section style={{ marginTop: '3rem', background: 'var(--card-bg)', borderRadius: '12px', padding: '2rem', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>💬 Leave a Comment</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="comment"
          placeholder="Write your comment here..."
          rows="4"
          value={formData.comment}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>📝 Submit</button>
        {status && <p style={{ fontStyle: 'italic', color: 'var(--text-color)', marginTop: '0.5rem' }}>{status}</p>}
      </form>

      <hr style={{ margin: '2rem 0', opacity: 0.2 }} />

      {/* 🚀 2. REPLACED OLD TITLE WITH TERMINAL DATA LOGGER GRID */}
      <h3 style={{ 
        marginBottom: '1.5rem', 
        fontSize: '13px', 
        fontFamily: "'JetBrains Mono', monospace", 
        color: '#ff007f', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px',
        fontWeight: '600'
      }}>
        <span>💟</span>
        <span>DATABASE_NODES // {dynamicCommentsCount} FEEDBACK_LOGS FOUND</span>
      </h3>

      <div>
        {comments.map((c, i) => (
          <div key={i} style={{
            marginBottom: '1.5rem',
            padding: '1rem',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <strong>{c.name}</strong> <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>({new Date(c.date).toLocaleString()})</span>
            <p style={{ marginTop: '0.5rem' }}>{c.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: 'var(--bg-color)',
  color: 'var(--text-color)',
  fontFamily: 'inherit',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#ff007f', // Cyber Pink color to match the core style
  color: '#fff',
  border: 'none',
  padding: '0.7rem 1.2rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '12px',
  letterSpacing: '0.5px'
};
