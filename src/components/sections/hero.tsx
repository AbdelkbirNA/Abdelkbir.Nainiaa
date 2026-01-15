import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { config } from "@/data/config";
import { Bricolage_Grotesque } from "next/font/google";

import SectionWrapper from "../ui/section-wrapper";

const logoFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
});

const roles = ["Software Engineer", "Systems Thinker", "Creative Builder"];

const typeSpeedMs = 100;
const deleteSpeedMs = 50;
const pauseDurationMs = 2000;

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? deleteSpeedMs : typeSpeedMs;

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDurationMs);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayText === currentRole) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentRole.substring(0, prev.length - 1);
        } else {
          return currentRole.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentRoleIndex, isDeleting, isPaused]);

  return (
    <div className="md:self-start md:mt-4 flex items-center gap-2 text-base sm:text-lg font-display font-semibold text-foreground/85 min-h-[1.75rem] tracking-[0.04em]">
      <span className="hover:text-foreground transition-colors duration-150">
        {displayText}
      </span>
      <span className="inline-block w-[2px] h-5 bg-foreground/85 animate-pulse" />
    </div>
  );
};

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      {/* Background fade-in elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 animate-in fade-in duration-1000 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background animate-in fade-in duration-1500 delay-300 -z-10" />
      
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.5}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={0.8}>
                  <h1
                    className={cn(
                      logoFont.className,
                      "-ml-[6px] leading-[0.9] text-transparent text-slate-800 text-left",
                      "text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                      "cursor-default text-edge-outline transition-all duration-300",
                      "hover:scale-[1.02] hover:text-shadow-lg"
                    )}
                  >
                    Abdelkbir
                    <br className="md:block hidden" />
                    Nainiaa
                  </h1>
                </BlurIn>
                <BlurIn delay={1.1}>
                  <TypingAnimation />
                </BlurIn>
                <BlurIn delay={1.4}>
                  <p className="md:self-start mt-3 text-sm sm:text-base text-slate-400 dark:text-zinc-500 max-w-xl leading-relaxed">
                    Driven by curiosity and innovation, I develop practical and scalable software solutions through thoughtful design, combining efficiency and clarity to address complex problems and deliver robust, high-performance applications.
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 w-full max-w-2xl">
                <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
                  <BoxReveal delay={1.8} width="fit-content">
                    <Link
                      href={
                        "https://drive.google.com/file/d/1Rnne_gtRSqJcGATbIEl5C2NLkMQriwuS/view?usp=sharing"
                      }
                      target="_blank"
                      className="group relative inline-block"
                    >
                      <Button className="flex items-center justify-center gap-3 px-10 h-14 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 active:scale-95 hover:scale-105">
                        <File size={20} strokeWidth={2.5} className="transition-transform group-hover:rotate-12" />
                        <span>View Resume</span>
                      </Button>
                    </Link>
                  </BoxReveal>
                  
                  <BlurIn delay={2.1}>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`mailto:${config.email}`}
                        className="group relative animate-in fade-in-0 zoom-in-95 duration-300 delay-[2100ms]"
                        aria-label="Contact via email"
                      >
                        <div className="p-3 rounded-full border border-border/40 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 group-active:scale-95">
                          <IoMail size={20} className="text-foreground transition-all duration-300 group-hover:text-primary group-hover:-rotate-12 group-hover:scale-110" />
                        </div>
                      </Link>
                      {config.social.twitter && (
                        <Link
                          href={config.social.twitter}
                          target="_blank"
                          className="group relative animate-in fade-in-0 zoom-in-95 duration-300 delay-[2200ms]"
                          aria-label="X (Twitter)"
                        >
                          <div className="p-3 rounded-full border border-border/40 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 group-active:scale-95">
                            <SiX size={18} className="text-foreground transition-all duration-300 group-hover:text-primary group-hover:rotate-12 group-hover:scale-110" />
                          </div>
                        </Link>
                      )}
                      
                      {config.social.github && (
                        <Link
                          href={config.social.github}
                          target="_blank"
                          className="cursor-can-hover group relative animate-in fade-in-0 zoom-in-95 duration-300 delay-[2300ms]"
                          aria-label="GitHub"
                        >
                          <div className="p-3 rounded-full border border-border/40 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 group-active:scale-95">
                            <SiGithub size={20} className="text-foreground transition-all duration-300 group-hover:text-primary group-hover:-rotate-12 group-hover:scale-110" />
                          </div>
                        </Link>
                      )}

                      {config.social.linkedin && (
                        <Link
                          href={config.social.linkedin}
                          target="_blank"
                          className="cursor-can-hover group relative animate-in fade-in-0 zoom-in-95 duration-300 delay-[2400ms]"
                          aria-label="LinkedIn"
                        >
                          <div className="p-3 rounded-full border border-border/40 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 group-active:scale-95">
                            <SiLinkedin size={20} className="text-foreground transition-all duration-300 group-hover:text-primary group-hover:rotate-12 group-hover:scale-110" />
                          </div>
                        </Link>
                      )}
                    </div>
                  </BlurIn>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[2500ms]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
