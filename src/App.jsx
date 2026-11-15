import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Sparkles,
  MoreVertical,
  Check,
  CheckCircle2,
} from "lucide-react";
import CursorGrid from "./components/CursorGrid";
import vrLogo from "./assets/VR-Logo.png";
import "./App.css";

const BrandIcon = ({ brand }) => {
  switch (brand) {
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "gmail":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "discord":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "threads":
      return (
        <svg viewBox="0 0 192 192" fill="currentColor" className="w-5 h-5">
          <path d="M141.537 88.988a66.175 66.175 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.737-8.71 14.556-10.927 21.341-10.927h.23c8.249.053 14.484 2.46 18.529 7.156 2.932 3.41 4.893 8.103 5.864 14.01a83.243 83.243 0 0 0-24.252-3.503c-24.848 0-40.834 13.2-40.834 33.689 0 20.11 17.717 33.2 37.15 33.2 19.78 0 34.383-10.15 40.744-28.333 3.112 6.567 4.398 14.54 4.398 23.773v3.29c0 .653-.006 1.3-.019 1.94A63.788 63.788 0 0 1 96 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64c0 5.29-.644 10.43-1.856 15.345-1.634-6.6-4.227-12.47-7.607-17.357zM97.21 132.5c-13.755 0-22.632-7.12-22.632-18.16 0-12.773 10.516-19.15 29.226-19.15a70.87 70.87 0 0 1 19.503 2.745c-1.644 21.263-13.266 34.565-26.097 34.565z" />
        </svg>
      );
    case "reddit":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.096.35.35 0 0 0 0 .487c.758.759 2.064 1.054 2.947 1.054.884 0 2.19-.295 2.948-1.054a.35.35 0 0 0 0-.487.327.327 0 0 0-.462 0c-.57.57-1.636.81-2.486.81-.85 0-1.916-.24-2.486-.81a.332.332 0 0 0-.23-.096z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.003 1.996c-4.417 0-6.83 3.197-6.83 5.992 0 .937.288 2.222.618 3.167.127.361.168.647.01.892-.178.277-.55.45-.989.58-.532.158-1.109.33-1.328.783-.178.368-.04.793.398 1.233.722.723 1.833 1.012 3.303 1.107.282.018.527.185.625.437.27.697.747 1.488 1.544 1.854.898.412 1.83.185 2.649.034.737-.136 1.42-.262 2.008.083.588-.345 1.271-.219 2.008-.083.82.151 1.751.378 2.65-.034.797-.366 1.273-1.157 1.543-1.854.098-.252.343-.419.626-.437 1.47-.095 2.58-.384 3.303-1.107.438-.44.576-.865.398-1.233-.219-.453-.796-.625-1.328-.783-.438-.13-.811-.303-.99-.58-.157-.245-.116-.531.011-.892.33-.945.618-2.23.618-3.167 0-2.795-2.413-5.992-6.83-5.992z" />
        </svg>
      );
    case "spotify":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      );
    default:
      return null;
  }
};

const links = [
  {
    id: "instagram",
    name: "Instagram",
    brand: "instagram",
    url: "https://www.instagram.com/_darkxzz__",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    brand: "linkedin",
    url: "https://www.linkedin.com/in/vinaal/",
  },
  {
    id: "gmail",
    name: "Gmail",
    brand: "gmail",
    isCopy: true,
    copyValue: "vinaalm898@gmail.com",
    subtitle: "Email: vinaalm898@gmail.com",
    copiedText: "✓ Copied to clipboard",
  },
  {
    id: "github",
    name: "Github",
    brand: "github",
    url: "https://github.com/Dark-Vinaal",
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    brand: "twitter",
    url: "https://x.com/__Vinaal__",
  },
  {
    id: "discord",
    name: "Discord",
    brand: "discord",
    isCopy: true,
    copyValue: "darkxzz999",
    subtitle: "Username: darkxzz999",
    copiedText: "✓ Copied Discord username",
  },
  {
    id: "facebook",
    name: "Facebook",
    brand: "facebook",
    url: "https://www.facebook.com/Darkxxzz",
  },
  {
    id: "threads",
    name: "Threads",
    brand: "threads",
    url: "https://www.threads.com/@_darkxzz__",
  },
  {
    id: "reddit",
    name: "Reddit",
    brand: "reddit",
    url: "https://www.reddit.com/user/Darkxzz999",
  },
  {
    id: "telegram",
    name: "Telegram",
    brand: "telegram",
    url: "http://t.me/Darkxzz999",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    brand: "snapchat",
    url: "https://www.snapchat.com/add/darkxzz_999",
  },
  {
    id: "spotify",
    name: "Spotify",
    brand: "spotify",
    url: "https://open.spotify.com/user/am4z0k7sr2zo5g6ayocr6auba?si=68ad5f7a8a9e4712",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const LinkItem = ({ link, copiedId, handleCopy }) => {
  const [isVibrating, setIsVibrating] = useState(false);
  const hoverTimerRef = useRef(null);

  const handleMouseEnter = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setIsVibrating(true);
    }, 700);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setIsVibrating(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const isCopied = copiedId === link.id;

  if (link.isCopy) {
    return (
      <motion.div
        key={link.id}
        variants={itemVariants}
        whileHover={{ scale: 1.08, zIndex: 30 }}
        whileTap={{ scale: 0.96 }}
        animate={
          isVibrating
            ? {
                x: [0, -3.5, 3.5, -3.5, 3.5, -2, 2, 0],
                rotate: [0, -1.2, 1.2, -1.2, 1.2, -0.6, 0.6, 0],
              }
            : { x: 0, rotate: 0 }
        }
        transition={
          isVibrating
            ? {
                x: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  ease: "easeInOut",
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }
            : { type: "spring", stiffness: 300, damping: 20 }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleCopy(e, link)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ")
            handleCopy(e, link);
        }}
        className={`link-button ${isCopied ? "copied" : ""}`}
        role="button"
        tabIndex={0}
      >
        <div className="link-icon-slot">
          <BrandIcon brand={link.brand} />
        </div>
        <div className="link-content-slot">
          <span className="link-title">{link.name}</span>
          <span className="link-subtitle">
            {isCopied ? link.copiedText : link.subtitle}
          </span>
        </div>
        <div className="link-dots-slot">
          {isCopied ? (
            <Check className="w-4 h-4 text-emerald-300" />
          ) : (
            <MoreVertical className="w-4 h-4" />
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      key={link.id}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ scale: 1.08, zIndex: 30 }}
      whileTap={{ scale: 0.96 }}
      animate={
        isVibrating
          ? {
              x: [0, -3.5, 3.5, -3.5, 3.5, -2, 2, 0],
              rotate: [0, -1.2, 1.2, -1.2, 1.2, -0.6, 0.6, 0],
            }
          : { x: 0, rotate: 0 }
      }
      transition={
        isVibrating
          ? {
              x: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: "easeInOut",
              },
              rotate: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: "easeInOut",
              },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }
          : { type: "spring", stiffness: 300, damping: 20 }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="link-button"
    >
      <div className="link-icon-slot">
        <BrandIcon brand={link.brand} />
      </div>
      <div className="link-content-slot">
        <span className="link-title">{link.name}</span>
      </div>
      <div className="link-dots-slot">
        <MoreVertical className="w-4 h-4" />
      </div>
    </motion.a>
  );
};

const CopyrightFooter = () => (
  <div className="copyright-footer">
    <span>© 2026 Vinaal R · All Rights Reserved</span>
  </div>
);

const CurvyDivider = () => (
  <div className="curvy-divider-container" aria-hidden="true">
    <svg
      viewBox="0 0 340 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="curvy-divider-svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="neonGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.05" />
          <stop offset="25%" stopColor="#a855f7" stopOpacity="0.65" />
          <stop offset="50%" stopColor="#e879f9" stopOpacity="0.95" />
          <stop offset="75%" stopColor="#a855f7" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M0 9 C70 17, 120 1, 170 9 C220 17, 270 1, 340 9"
        stroke="url(#neonGlowGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default function App() {
  const [copiedId, setCopiedId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [isDesktop, setIsDesktop] = useState(false);

  const innerScrollRef = useRef(null);
  const outerScrollRef = useRef(null);
  const linksZoneRef = useRef(null);
  const isOverLinksRef = useRef(false);

  useEffect(() => {
    if (!isDesktop) return;

    const linksEl = linksZoneRef.current;
    if (!linksEl) return;

    const handleEnterLinks = () => {
      isOverLinksRef.current = true;
    };
    const handleLeaveLinks = () => {
      isOverLinksRef.current = false;
    };

    linksEl.addEventListener("mouseenter", handleEnterLinks);
    linksEl.addEventListener("mouseleave", handleLeaveLinks);

    return () => {
      linksEl.removeEventListener("mouseenter", handleEnterLinks);
      linksEl.removeEventListener("mouseleave", handleLeaveLinks);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const innerEl = innerScrollRef.current;
    const outerEl = outerScrollRef.current;
    if (!innerEl || !outerEl) return;

    const handleWheel = (e) => {
      const path = e.composedPath ? e.composedPath() : [];
      const overLinks =
        isOverLinksRef.current ||
        path.some(
          (node) =>
            node === linksZoneRef.current ||
            node === innerScrollRef.current ||
            (node.classList &&
              (node.classList.contains("scrollable-links-section") ||
                node.classList.contains("scrollable-links-inner") ||
                node.classList.contains("link-button"))),
        );

      const boost = Math.abs(e.deltaY) > 50 ? 1.8 : 2.6;
      const scrollAmount = e.deltaY * boost;

      if (overLinks) {
        const canScrollUp = innerEl.scrollTop > 0 && scrollAmount < 0;
        const canScrollDown =
          innerEl.scrollTop < innerEl.scrollHeight - innerEl.clientHeight &&
          scrollAmount > 0;

        if (canScrollUp || canScrollDown) {
          e.preventDefault();
          innerEl.scrollBy({ top: scrollAmount, behavior: "auto" });
        } else {
          e.preventDefault();
          outerEl.scrollBy({ top: scrollAmount, behavior: "auto" });
        }
      } else {
        e.preventDefault();
        outerEl.scrollBy({ top: scrollAmount, behavior: "auto" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isDesktop]);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(typeof window !== "undefined" && window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const showToast = useCallback((message) => {
    setToast({ show: true, message });
  }, []);

  useEffect(() => {
    if (!toast.show) return;
    const timer = setTimeout(
      () => setToast((prev) => ({ ...prev, show: false })),
      2400,
    );
    return () => clearTimeout(timer);
  }, [toast.show]);

  const handleCopy = useCallback(
    (e, link) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      const copyToClipboard = () => {
        setCopiedId(link.id);
        showToast(`Copied ${link.copyValue}`);
        setTimeout(() => setCopiedId(null), 2400);
      };

      if (navigator?.clipboard?.writeText) {
        navigator.clipboard
          .writeText(link.copyValue)
          .then(copyToClipboard)
          .catch(() => showToast(link.copyValue));
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = link.copyValue;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          copyToClipboard();
        } catch {
          showToast(link.copyValue);
        }
        document.body.removeChild(textarea);
      }
    },
    [showToast],
  );

  const handleShare = useCallback(() => {
    const shareUrl = "https://darkxzz.netlify.app";
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => showToast("Profile link copied!"))
        .catch(() => {
          if (navigator.share) {
            navigator.share({ title: "Vinaal R", url: shareUrl }).catch(() => {});
          }
        });
    } else if (navigator.share) {
      navigator.share({ title: "Vinaal R", url: shareUrl }).catch(() => {});
    } else {
      showToast("Profile link: darkxzz.netlify.app");
    }
  }, [showToast]);

  const headerBlock = (
    <>
      <div className="top-bar">
        <motion.a
          href="https://vinaalr.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 450, damping: 22 }}
          className="top-btn"
          aria-label="Portfolio"
        >
          <Sparkles className="w-[15px] h-[15px]" />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 450, damping: 22 }}
          className="top-btn"
          onClick={handleShare}
          aria-label="Share"
        >
          <Share2 className="w-[15px] h-[15px]" />
        </motion.button>
      </div>

      <div className="profile-header-static">
        <div className="vr-banner-wrap">
          <img src={vrLogo} alt="VR Logo" className="vr-banner-img" />
        </div>
        <h1 className="hero-name">Vinaal R</h1>
        <h3 className="hero-title">DARK</h3>
        <p className="hero-bio">
          Just an Aspiring Learner of New Tech and Science Love to Code, Gaming
          and Watching Movies, Anime
        </p>
      </div>

      <CurvyDivider />
    </>
  );

  const linksList = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="links-list-inner"
    >
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          copiedId={copiedId}
          handleCopy={handleCopy}
        />
      ))}
    </motion.div>
  );

  const toastBlock = (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 440, damping: 28 }}
          className="toast-bubble"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isDesktop) {
    const desktopContent = (
      <div className="app-container">
        <div ref={outerScrollRef} className="desktop-outer-scroll">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="profile-card profile-card-desktop"
          >
            {headerBlock}

            <div ref={linksZoneRef} className="scrollable-links-section">
              <div
                ref={innerScrollRef}
                className="scrollable-links-inner"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              >
                {linksList}
              </div>
            </div>
          </motion.div>

          <CopyrightFooter />
        </div>
        {toastBlock}
      </div>
    );

    return (
      <div className="desktop-grid-wrapper">
        <CursorGrid
          cellSize={60}
          color="#7c3aed"
          highlight="area"
          gridStyle="lines"
          radius={140}
          holdTime={400}
          fadeDuration={800}
          fillOpacity={0.06}
          gridOpacity={0.08}
          spotlight={0.6}
          clickPulse
        >
          {desktopContent}
        </CursorGrid>
      </div>
    );
  }

  return (
    <div className="app-container app-container-mobile">
      <div className="mobile-scroll-wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="profile-card profile-card-mobile"
        >
          {headerBlock}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mobile-links-list"
          >
            {links.map((link) => (
              <LinkItem
                key={link.id}
                link={link}
                copiedId={copiedId}
                handleCopy={handleCopy}
              />
            ))}
          </motion.div>

          <CopyrightFooter />
        </motion.div>
      </div>
      {toastBlock}
    </div>
  );
}
