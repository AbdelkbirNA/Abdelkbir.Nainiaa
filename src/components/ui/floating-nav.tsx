"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
    Home, 
    User, 
    Briefcase, 
    MessageSquare, 
    FileText,
    Menu,
    X
} from "lucide-react";

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href: string;
}

export function FloatingNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems: NavItem[] = [
        { id: "home", label: "Home", icon: <Home className="h-4 w-4" />, href: "#home" },
        { id: "about", label: "About", icon: <User className="h-4 w-4" />, href: "#about" },
        { id: "work", label: "Work", icon: <Briefcase className="h-4 w-4" />, href: "#work" },
        { id: "contact", label: "Contact", icon: <MessageSquare className="h-4 w-4" />, href: "#contact" },
        { id: "resume", label: "Resume", icon: <FileText className="h-4 w-4" />, href: "/resume" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Floating Navigation Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    size="icon"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-6 w-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>
            </motion.div>

            {/* Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 z-40"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-2 min-w-[200px]">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                            activeSection === item.id
                                                ? "bg-primary text-primary-foreground shadow-lg"
                                                : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                                        }`}
                                        onClick={() => scrollToSection(item.href)}
                                    >
                                        <div className={`transition-transform duration-300 ${
                                            activeSection === item.id ? "scale-110" : "scale-100"
                                        }`}>
                                            {item.icon}
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                        
                                        {/* Active Indicator */}
                                        {activeSection === item.id && (
                                            <motion.div
                                                className="ml-auto w-2 h-2 bg-primary-foreground rounded-full"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Arrow Pointer */}
                        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card/80 border-r border-b border-border/50 transform rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
