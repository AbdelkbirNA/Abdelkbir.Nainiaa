"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { translate } from "./anim";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { links } from "./config";
import { usePathname } from "next/navigation";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let newActive = "/";
            if (entry.target.id === 'hero') {
              newActive = "/";
            } else {
              newActive = "/#" + entry.target.id;
            }
            setActiveSection(newActive);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" } // Adjust to control when the link becomes active
    );

    links.forEach((link) => {
      let id = link.href.replace('/#', '');
      if (link.href === '/') id = 'hero';
      
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getChars = (word: string, index: number) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          className="inline-block"
          custom={[i * 0.02 + index * 0.1, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1]"
      )}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      <div
        className={cn(styles.background, isScrolled ? styles.visible : "")}
      />
      <div className={cn(styles.bar, "flex items-center justify-center w-full max-w-7xl mx-auto px-4")}>
        <nav className={cn(styles.nav, "flex items-center gap-8")}>
          {links.map((link, index) => {
            const isActive = pathname === '/' 
              ? link.href === activeSection 
              : (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  styles.navLink,
                  "relative text-base font-display font-semibold tracking-tight capitalize overflow-hidden",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.span
                  className="block"
                  animate={{
                    filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(2px)" : "blur(0px)",
                    opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {getChars(link.title, index)}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
