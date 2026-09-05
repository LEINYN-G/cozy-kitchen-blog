import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* ✨ Elegant Font Imports */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Satisfy&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fffaf6 0%, #f8eee7 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          overflow: "hidden",
        }}
      >
        {/* ☕ Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/coffee.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        ></div>

        {/* 🌫 Overlay */}
        <div
          style={{
            position: "absolute",
            top: "3%",
            left: "3%",
            width: "94%",
            height: "94%",
            borderRadius: "30px",
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        ></div>

        {/* ☁️ Animated Steam */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            width: "100px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 10%, transparent 70%)",
            animation: "steamRise 8s infinite ease-in-out",
            filter: "blur(15px)",
            zIndex: 2,
          }}
        ></div>

        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            fontFamily: "'Satisfy', cursive",
            fontSize: "1.8rem",
            color: "#f8eee7",
            marginBottom: "0.5rem",
            zIndex: 3,
          }}
        >
          Brew. Cook. Love. Repeat.
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.4rem",
            color: "#ffffff",
            textShadow: "0px 3px 10px rgba(0,0,0,0.3)",
            marginBottom: "1.5rem",
            zIndex: 3,
          }}
        >
          Welcome to <span style={{ color: "#e7cfb7" }}>Focolove!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            maxWidth: "650px",
            color: "#fffaf3",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
            zIndex: 3,
          }}
        >
           In a high-velocity global environment, Focolove operates as a research interface for decelerated, mindful human optimization. We analyze the neurochemical warmth of precise brewing mechanics alongside the biological bio-availability of micronutrient-dense, wholesome whole foods. 
          <br /><br />
          Every formula originates inside the Cozy Kitchen Lab —a testing ground engineered for strict sensory calibration, computational recipe tracking, and empirical ingredient validation. Here, nutrition isn't viewed merely as metabolic fuel; it is structured as a physiological pathway to neurological healing, cellular connection, and conscious homeostasis. 
          <br /><br />
          Whether decrypting multi-molecular coffee extraction graphs or designing custom low-glycemic, anti-inflammatory dietary frameworks, Focolove delivers clinically evaluated, health-focused blueprints designed to sustain both metabolic stamina and cognitive architecture.
          <br /><br />
          <span style={{ color: '#e7cfb7', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', tracking: '1px' }}>
            🧪 METRIC PROMISE // ZERO DISINFORMATION
          </span>
          <br />
          We publish exclusively verified data. Every single component is cross-tested, bio-evaluated, and verified for peak systemic synergy. This is our protocol for engineering thermal human comfort through analytical food science.
        </motion.p>

        {/* ☕ Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ marginTop: "2rem", zIndex: 3 }}
        >
          <Link href="/page/1?category=kitchen">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 30px rgba(230, 190, 150, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  "linear-gradient(90deg, #e7cfb7 0%, #b78c65 100%)",
                color: "#3e2f23",
                border: "none",
                borderRadius: "40px",
                padding: "1rem 3rem",
                fontSize: "1.1rem",
                fontFamily: "'Satisfy', Cursive",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ☕ Explore!
            </motion.button>
          </Link>
        </motion.div>

        {/* ❤️ Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{
            fontFamily: "'Satisfy', cursive",
            marginTop: "3rem",
            fontSize: "1.1rem",
            color: "#f8eee7",
            textShadow: "0px 2px 5px rgba(0,0,0,0.3)",
            zIndex: 3,
          }}
        >
          Made with ❤️ and a shot of espresso.
        </motion.p>

        {/* 🌫 Steam animation */}
        <style jsx>{`
          @keyframes steamRise {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-60px) scale(1.1);
              opacity: 0.4;
            }
            100% {
              transform: translateY(-120px) scale(1.2);
              opacity: 0;
            }
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 2.4rem !important;
            }
            p {
              font-size: 1rem !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
