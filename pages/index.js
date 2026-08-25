import Link from 'next/link';
import Head from 'next/head';
import { Terminal, Heart, Coffee, Users, ArrowRight, Sparkles, LayoutGrid } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      title: "Tech & Innovation",
      icon: <Terminal style={{ color: '#00ffff', width: '20px', height: '20px' }} />,
      desc: "Deep dives into JavaScript, React, system design, and tech career roadmaps.",
      link: "/page/1?category=Tech", 
      status: "ACTIVE_NODE",
      accent: '#00ffff',
      glowColor: 'rgba(0, 255, 255, 0.15)'
    },
    {
      title: "Mental Well-being",
      icon: <Heart style={{ color: '#ff007f', width: '20px', height: '20px' }} />,
      desc: "Navigating screen fatigue, tech burnout, and building emotional resilience.",
      link: "/page/1?category=Mental-Health",
      status: "SYNCED",
      accent: '#ff007f',
      glowColor: 'rgba(255, 0, 127, 0.15)'
    },
    {
      title: "Cozy Kitchen (Nourish)",
      icon: <Coffee style={{ color: '#ffaa00', width: '20px', height: '20px' }} />,
      desc: "Healthy food, coffee science, and recipes crafted to fuel your brain and body.",
      link: "/cozy-kitchen", 
      status: "CORE_ENG",
      accent: '#ffaa00',
      glowColor: 'rgba(255, 170, 0, 0.15)'
    },
    {
      title: "Society & Awareness",
      icon: <Users style={{ color: '#b55fe6', width: '20px', height: '20px' }} />,
      desc: "Candid socio-economic dialogues covering unemployment, upskilling, and modern realities.",
      link: "/page/1?category=Society",
      status: "BROADCAST",
      accent: '#b55fe6',
      glowColor: 'rgba(181, 95, 230, 0.15)'
    }
  ];

  return (
    <>
      <Head>
        <title>Focolove — Core Hub</title>
        <link href="https://googleapis.com" rel="stylesheet" />
      </Head>

      {/* Main Wrapper with Neo-Tokyo Dark Matte Background */}
      <div style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        backgroundColor: '#0c0a0c', 
        color: '#e2e8f0',
        overflow: 'hidden', 
        paddingBottom: '5rem',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>

        {/* 1. BRAND NAVBAR (TSX-Inspired Alignment) */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          backgroundColor: 'rgba(12, 10, 12, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1c1822',
          zIndex: 100,
           display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem'
        }}>

        {/* Logo Terminal Node */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00ffff', fontWeight: '800', fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}>
            <Sparkles style={{ width: '16px', height: '16px' }} />
            <span>⚡ NT_HUB</span>
          </Link>

        {/* Core Routes Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#ffffff', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}>Home</Link>
            <Link href="/page/1?category=Tech" style={{ color: '#a0a0b0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}>Tech</Link>
            <Link href="/cozy-kitchen" style={{ color: '#a0a0b0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}>Kitchen</Link>
            <Link href="/page/1?category=Mental-Health" style={{ color: '#a0a0b0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}>Well-being</Link>
            <Link href="/page/1?category=Society" style={{ color: '#a0a0b0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}>Society</Link>
          </div>

           {/* Action CTA Trigger */}
          <Link href="/cozy-kitchen" style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 20px', backgroundColor: '#ff007f', color: '#ffffff', fontWeight: '700', borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s' }} className="btn-pink">
            JOIN COMMUNITY
          </Link>
        </nav>
        
        {/* 2. BACKGROUND CHARACTER IMAGE WITH VIGNETTE OVERLAY */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '55%',
          height: '100%',
          backgroundImage: "url('/images/lenyn.jpg')", // Save your 3rd image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.17, // Blends subtly with darkness
          mixBlendMode: 'luminosity',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>

        {/* Digital Grid Canvas Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, #000 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }}></div>

        {/* Dynamic Light Neon Smudges */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(0, 255, 255, 0.05)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '25%', right: '5%', width: '450px', height: '450px', borderRadius: '50%', background: 'rgba(255, 0, 127, 0.04)', filter: 'blur(120px)', pointerEvents: 'none' }} />

         {/* HERO SECTION */}
        <header style={{ 
          maxWidth: '1050px', 
          margin: '0 auto', 
          padding: '10rem 1.5rem 4rem 1.5rem', 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          position: 'relative',
          zIndex: 3
        }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '1 1 500px', textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: '#141115', border: '1px solid #221d24', borderRadius: '6px', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#ff007f', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '1.5rem' }}>
              <Sparkles style={{ width: '13px', height: '13px', color: '#00ffff' }} />
              <span>STATUS ONLINE</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', fontWeight: '800', lineHeight: '1.1', color: '#ffffff', letterSpacing: '-0.03em', margin: 0 }}>
              BUILD SKILLS <br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px #ffffff', opacity: 0.9 }}>CREATE FUTURE</span>
            </h1>

            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: '#a0a0b0', maxWidth: '540px', fontWeight: '300', lineHeight: '1.7', margin: '1.5rem 0 2.5rem 0' }}>
              Join the Focolove network ecosystem. Code clean components, structure cognitive mental clarity frameworks, and engineer local culinary architectures.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/page/1" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 28px', border: '1px solid #00ffff', color: '#00ffff', fontWeight: '600', borderRadius: '4px', cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', tracking: '0.5px', textDecoration: 'none', transition: 'all 0.3s' }} className="btn-cyan">
                EXPLORE WORK
              </Link>
              <Link href="/cozy-kitchen" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 28px', backgroundColor: '#ff007f', color: '#ffffff', fontWeight: '600', borderRadius: '4px', cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace', monospace", fontSize: '12px', tracking: '0.5px', textDecoration: 'none', transition: 'all 0.3s' }} className="btn-pink">
                JOIN COMMUNITY
              </Link>
            </div>
          </div>

          {/* 2. Right Side Glowing Circular Holographic Display */}
          <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00ffff 0%, #ff007f 100%)',
              padding: '4px',
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.25), 0 0 20px rgba(255, 0, 127, 0.2)'
            }} className="holo-circle">
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#0c0a0c',
                backgroundImage: "url('/images/lenyn.jpg')", // Subtly blended background thumb
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                {/* Visual Internal Vignette Text overlay */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(12, 10, 12, 0.75)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem' }}>
                  <div style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#ff007f', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Founder Node</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginTop: '4px', trackingTight: '-0.5px' }}>BIHAR, INDIA</div>
                  <div style={{ display: 'inline-block', fontSize: '9px', fontFamily: "'JetBrains Mono', monospace", border: '1px solid rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '3px', marginTop: '12px', color: '#00ffff' }}>FOCUS_SYSTEM</div>
                </div>
              </div>
            </div>
          </div>

        </header>

        {/* COMPONENT NODES ROW */}
        <section style={{ maxWidth: '1050px', margin: '2rem auto 0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #1c1822', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>
              <LayoutGrid style={{ color: '#00ffff', width: '18px', height: '18px' }} />
              DATA_CHANNELS
            </h2>
          </div>

                    {/* Clean Dashboard Nodes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="pillar-card"
                style={{ 
                  backgroundColor: '#120f14', 
                  border: '1px solid #1c1822', 
                  borderRadius: '6px', 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  minHeight: '210px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                    <div style={{ padding: '8px', backgroundColor: '#18141b', border: '1px solid #251f2b', borderRadius: '4px', display: 'flex' }}>
                      {pillar.icon}
                    </div>
                    <span style={{ 
                      fontSize: '9px', 
                      fontFamily: "'JetBrains Mono', monospace", 
                      padding: '1px 6px', 
                      borderRadius: '3px', 
                      border: `1px solid ${pillar.accent}`, 
                      color: pillar.accent, 
                      backgroundColor: 'rgba(0,0,0,0.4)' 
                    }}>
                      {pillar.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '12.5px', color: '#8c8c9e', fontWeight: '300', margin: '0 0 1rem 0', lineHeight: '1.6' }}>
                    {pillar.desc}
                  </p>
                </div>

                <Link href={pillar.link} style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#5c5c6e', display: 'inline-flex', alignItems: 'center', gap: '6px', letterSpacing: '0.5px', textTransform: 'uppercase', textDecoration: 'none' }} className="card-link">
                  CONNECT_NODE <ArrowRight style={{ width: '13px', height: '13px' }} className="arrow-icon" />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Styled JSX Hooks for Hover Styles and Animations */}
      <style jsx global>{`
        .btn-cyan:hover {
          background-color: rgba(0, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }
        .btn-pink:hover {
          background-color: #e00070;
          box-shadow: 0 0 25px rgba(255, 0, 127, 0.4);
        }
        .pillar-card {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        }
        .pillar-card:hover {
          transform: translateY(-4px);
          border-color: #ff007f !important;
          box-shadow: 0 10px 25px rgba(255, 0, 127, 0.08) !important;
          background-color: #16121a !important;
        }
        .pillar-card:hover h3 {
          color: #00ffff !important;
        }
        .pillar-card:hover .card-link {
          color: #ffffff !important;
        }
        .pillar-card:hover .arrow-icon {
          transform: translateX(4px);
        }
        @keyframes rotateHolo {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .holo-circle {
          animation: rotateHolo 20s infinite linear;
        }
      `}</style>
    </>
  );
}
