import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Compass,
  ShieldCheck,
  Cpu,
  Terminal,
  Users,
  Sparkles,
  BookOpen,
  Layers,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function CommunityEngine() {
  // Navigation Flow State Tracker // v1.0
  const [currentStep, setCurrentStep] = useState('IDENTITY'); // IDENTITY ➔ PATH_KNOW / PATH_EXPLORE
  const [userProfile, setUserProfile] = useState({
    name: '',
    trackingNode: '',
  });

  return (
    <>
      <Head>
        <title>Focolove // Core Hub Portal</title>
        <link
          href="https://googleapis.com"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#0c0a0c',
          color: '#e2e8f0',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          padding: '6rem 2rem 4rem 2rem',
          overflow: 'hidden',
        }}
      >
        {/* Background Network Matrix Grids */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.012) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
            maskImage:
              'radial-gradient(ellipse 60% 50% at 50% 40%, #000 70%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* STEP 1: INITIAL IDENTITY MATRIX PROTOCOL */}
          {currentStep === 'IDENTITY' && (
            <div
              style={{
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease',
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
                  color: '#ff007f',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  marginBottom: '1.5rem',
                }}
              >
                <Sparkles
                  style={{
                    width: '12px',
                    height: '12px',
                    color: '#00ffff',
                  }}
                />

                <span>PROTOCOL // INITIALIZE_IDENTITY</span>
              </div>

              <h1
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  margin: '0 0 1rem 0',
                }}
              >
                Create Your Identity
              </h1>

              <p
                style={{
                  color: '#8c8c9e',
                  fontWeight: '300',
                  maxWidth: '520px',
                  margin: '0 auto 3rem auto',
                  lineHeight: '1.6',
                }}
              >
                Initialize your local structural data packet. Choose your
                cognitive parameters to align with international workspace
                nodes.
              </p>

              {/* Selection Split Branches */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginTop: '2rem',
                }}
              >
                {/* Branch A: I Know My Path */}
                <div
                  onClick={() => setCurrentStep('PATH_KNOW')}
                  style={{
                    backgroundColor: '#120f14',
                    border: '1px solid #1c1822',
                    padding: '2rem',
                    borderRadius: '6px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  className="selection-node-box"
                >
                  <div
                    style={{
                      p: '8px',
                      width: 'fit-content',
                      backgroundColor: '#18141b',
                      border: '1px solid #251f2b',
                      borderRadius: '4px',
                      display: 'flex',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Terminal
                      style={{
                        color: '#00ffff',
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: '0 0 8px 0',
                    }}
                  >
                    I KNOW MY PATH
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: '#8c8c9e',
                      margin: 0,
                      lineHeight: '1.6',
                      fontWeight: '300',
                    }}
                  >
                    Deploy your active skills directly. Enter the validation
                    engine and initialize your **SKILL_PASSPORT**.
                  </p>
                </div>

                {/* Branch B: Help Me Explore */}
                <div
                  onClick={() => setCurrentStep('PATH_EXPLORE')}
                  style={{
                    backgroundColor: '#120f14',
                    border: '1px solid #1c1822',
                    padding: '2rem',
                    borderRadius: '6px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  className="selection-node-box"
                >
                  <div
                    style={{
                      p: '8px',
                      width: 'fit-content',
                      backgroundColor: '#18141b',
                      border: '1px solid #251f2b',
                      borderRadius: '4px',
                      display: 'flex',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Compass
                      style={{
                        color: '#ff007f',
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: '0 0 8px 0',
                    }}
                  >
                    HELP ME EXPLORE
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: '#8c8c9e',
                      margin: 0,
                      lineHeight: '1.6',
                      fontWeight: '300',
                    }}
                  >
                    Analyze global data points. Scan socioeconomic parameters
                    via the localized **DISCOVERY_MAP**.
                  </p>
                </div>
              </div>
            </div>
          )}

                    {/* STEP 2: BRANCH A - SKILL PASSPORT ECOSYSTEM (UPDATED INTERACTIVE LAYOUT) */}
          {currentStep === 'PATH_KNOW' && (
            <div style={{ animation: 'fadeIn 0.4s ease' }}>
              <button onClick={() => setCurrentStep('IDENTITY')} style={{ background: 'none', border: 'none', color: '#64748b', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', cursor: 'pointer', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ← RE_INITIALIZE_IDENTITY_SELECTION
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#00ffff', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                <ShieldCheck style={{ width: '14px', height: '14px' }} />
                <span>SECURE_NODE // SKILL_PASSPORT_CONNECTED</span>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 1.5rem 0', trackingTight: '-0.5px' }}>YOUR PLATFORM ECOSYSTEM</h2>

                            {/* 🟢 FIXED: CORE 3 PILLARS CONTAINER WITH PERMANENT NEON BORDERS & CLASSNAMES */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
                
                {/* 01 // LEARN (Cyan Node) */}
                <div 
                  className="eco-card learn-node"
                  style={{ 
                    backgroundColor: '#120f14', 
                    border: '1px solid rgba(86, 248, 248, 0.69)', // Permanent Cyan Border
                    padding: '1.8rem', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '12px',
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.03)'
                  }}
                >
                  <div style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#00ffff', fontWeight: 'bold' }}>[01 // LEARN]</div>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '13.5px', color: '#a0a0b0', lineHeight: '1.8', fontWeight: '300' }}>
                    <li>Career Coding Skills</li>
                    <li>Technical Mentorship</li>
                    <li>Advanced Optimization</li>
                  </ul>
                </div>

                {/* 02 // BUILD (Pink Node) */}
                <div 
                  className="eco-card build-node"
                  style={{ 
                    backgroundColor: '#120f14', 
                    border: '1px solid rgba(255, 78, 167, 0.75)', // Permanent Pink Border
                    padding: '1.8rem', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '12px',
                    boxShadow: '0 0 15px rgba(255, 0, 127, 0.03)'
                  }}
                >
                  <div style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#ff007f', fontWeight: 'bold' }}>[02 // BUILD]</div>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '13.5px', color: '#a0a0b0', lineHeight: '1.8', fontWeight: '300' }}>
                    <li>Cross-Border Projects</li>
                    <li>Active Startup Teams</li>
                    <li>Portfolio Generation</li>
                  </ul>
                </div>

                {/* 03 // CONTRIBUTE (Amber Node) */}
                <div 
                  className="eco-card contribute-node"
                  style={{ 
                    backgroundColor: '#120f14', 
                    border: '1px solid rgba(253, 183, 21, 0.79)', // Permanent Amber Border
                    padding: '1.8rem', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '12px',
                    boxShadow: '0 0 15px rgba(255, 170, 0, 0.03)'
                  }}
                >
                  <div style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#ffaa00', fontWeight: 'bold' }}>[03 // CONTRIBUTE]</div>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '13.5px', color: '#a0a0b0', lineHeight: '1.8', fontWeight: '300' }}>
                    <li>Socioeconomic Research</li>
                    <li>Grassroots Human Rights</li>
                    <li>Climate Grid Analysis</li>
                  </ul>
                </div>

              </div>

              {/* 🟢 OPPORTUNITIES ACCESS CONTROL CHANNEL (TRANSFORMED TO TRUE RESPONSIVE BUTTONS) */}
              <div style={{ marginTop: '4rem', borderTop: '1px dashed #1c1822', paddingTop: '2.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontFamily: "'JetBrains Mono', monospace", color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.3px' }}>// DYNAMIC_OPPORTUNITIES_STREAM</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  {['Internships', 'Research Labs', 'Global Jobs', 'Fellowships', 'Core Startups'].map((opt) => (
                    <button 
                      key={opt} 
                      onClick={(e) => { e.preventDefault(); }}
                      style={{ 
                        padding: '12px 16px', 
                        backgroundColor: 'rgba(52, 211, 153, 0.02)', 
                        border: '1px solid rgba(16, 185, 129, 0.2)', 
                        borderRadius: '4px', 
                        fontSize: '11px', 
                        fontFamily: "'JetBrains Mono', monospace", 
                        textAlign: 'center', 
                        color: '#34d399',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        cursor: 'pointer',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      className="opportunity-cyber-btn"
                    >
                      {opt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* STEP 2: BRANCH B - DISCOVERY MAP ENGINE */}
          {currentStep === 'PATH_EXPLORE' && (
            <div
              style={{
                animation: 'fadeIn 0.4s ease',
                textAlign: 'left',
              }}
            >
              <button
                onClick={() => setCurrentStep('IDENTITY')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                }}
              >
                ← RE_INITIALIZE_IDENTITY_SELECTION
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#ff007f',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem',
                }}
              >
                <Cpu
                  style={{
                    width: '14px',
                    height: '14px',
                  }}
                />

                DIAGNOSTICS // DISCOVERY_MAP_ACTIVE
              </div>

              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  margin: '0 0 1rem 0',
                }}
              >
                SCANNING INTERFACE MODULES
              </h2>

              <p
                style={{
                  color: '#8c8c9e',
                  fontSize: '14px',
                  fontWeight: '300',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                }}
              >
                Your local core tracking node is scanning international
                databanks. We are generating customized roadmap diagnostics
                based on your parameters.
              </p>

              <div
                style={{
                  padding: '2rem',
                  backgroundColor: '#120f14',
                  border: '1px dashed #ff007f',
                  borderRadius: '6px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#ff007f',
                    fontWeight: 'bold',
                  }}
                  className="blink-text"
                >
                  [PROCESSING_MAP_PARAMETERS // FETCHING_COUNSELORS_CHANNELS...]
                </div>

                <p
                  style={{
                    fontSize: '12px',
                    color: '#64748b',
                    margin: '10px 0 0 0',
                  }}
                >
                  Our automated cognitive architecture is optimizing paths to
                  match with international partners.
                </p>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          .selection-node-box:hover {
            border-color: #00ffff !important;
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0, 255, 255, 0.08) !important;
            background-color: #16121a !important;
          }

          .selection-node-box:hover h3 {
            color: #00ffff !important;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }

            50% {
              opacity: 0.4;
            }
          }

          .blink-text {
            animation: blink 1.5s infinite ease-in-out;
          }
                  /* 🚀 HIGH-TECH ECOSYSTEM CARDS IDENTITY INTERACTIVE GLOWS */
        .eco-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .eco-card:hover {
          transform: translateY(-4px);
          background-color: #151117 !important;
        }
        
        /* 01 // LEARN Card Cyan Filter Glow */
        .eco-card.learn-node:hover {
          border-color: #00ffff !important;
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.08) !important;
        }
        
        /* 02 // BUILD Card Pink Filter Glow */
        .eco-card.build-node:hover {
          border-color: #ff007f !important;
          box-shadow: 0 10px 25px rgba(255, 0, 127, 0.08) !important;
        }
        
        /* 03 // CONTRIBUTE Card Amber Filter Glow */
        .eco-card.contribute-node:hover {
          border-color: #ffaa00 !important;
          box-shadow: 0 10px 25px rgba(255, 170, 0, 0.08) !important;
        }

        /* 🚀 DYNAMIC OPPORTUNITIES RESPONSIVE CYBER GREEN BUTTONS */
        .opportunity-cyber-btn:hover {
          background-color: rgba(16, 185, 129, 0.1) !important;
          border-color: #10b981 !important;
          color: #ffffff !important;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.25) !important;
          transform: scale(1.02);
        }
        `}</style>
      </div>
    </>
  );
}
