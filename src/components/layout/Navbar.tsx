import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Dispacciamento", to: "/dispacciamento" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <motion.div
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-700",
          "liquid-glass-nav"
        )}
        style={{
          boxShadow: scrolled
            ? '0 8px 32px hsl(0 0% 0% / 0.25), inset 0 1px 0 0 hsl(0 0% 100% / 0.1)'
            : '0 4px 24px hsl(0 0% 0% / 0.15), inset 0 1px 0 0 hsl(0 0% 100% / 0.08)'
        }}
      >
        {/* Logo */}
        <Link to="/" className="pr-4 pl-2 flex items-center gap-2">
          <span className="text-lg font-bold text-primary">Dispacciamento</span>
          <span className="text-sm text-muted-foreground font-medium">by energizzo</span>
        </Link>

        <div className="w-px h-5 bg-white/15 mx-1" />

        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link key={link.to} to={link.to}>
              <motion.span
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full inline-flex",
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full liquid-glass"
                    style={{
                      background: 'linear-gradient(135deg, hsl(158 64% 42% / 0.15) 0%, hsl(158 64% 42% / 0.05) 100%)',
                      border: '1px solid hsl(158 64% 42% / 0.25)'
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.span>
            </Link>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};
