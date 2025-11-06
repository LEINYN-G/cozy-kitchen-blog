import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/*Elegant Font Imports */}
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
        {/*Background Image */}
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

        {/* Overlay */}
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

        {/* Animated Steam */}
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
          In a world that’s always rushing, Focolove was born to remind us to slow down — to find warmth in a freshly brewed cup and joy in a wholesome meal.
          It began in a Cozy Kitchen, where every recipe is crafted with care, tested with love, and shared with honesty.

          Here, food isn’t just fuel — it’s a way to heal, connect, and live consciously. Whether you’re trying a new pasta recipe, exploring the latest coffee trends, 
          or discovering mindful meal ideas, Focolove brings you tasted and tested, health-focused recipes that nourish both body and soul.
          So brew your favorite cup, pull up a chair, and let’s make every day a little more cozy — one delicious moment at a time. ☕🍰

          💌 My Promise

          At Focolove, I share only what I truly enjoy — recipes tested, tasted, and loved.🍽️ 
          This is my way of spreading warmth through food and coffee.
        </motion.p>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ marginTop: "2rem", zIndex: 3 }}
        >
          <Link href="/page/1">
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
              ☕ Explore Recipes
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer line */}
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

        {/* Steam animation */}
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
