"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

export function Typewriter({
  words,
  cursor = true,
  cursorStyle = "|",
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (isDeleting) {
        // Deleting text
        if (currentText.length > 0) {
          timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          timeout = setTimeout(() => {
            setIsTyping(true);
          }, 500);
        }
      } else {
        // Typing text
        if (currentText.length < words[currentWordIndex].length) {
          timeout = setTimeout(() => {
            setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1));
          }, typeSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delaySpeed);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isTyping, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{currentText}</span>
      {cursor && (
        <AnimatePresence>
          <motion.span
            key="cursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inline-block ml-1 text-primary"
            style={{ animation: "blink 1s infinite" }}
          >
            {cursorStyle}
          </motion.span>
        </AnimatePresence>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
