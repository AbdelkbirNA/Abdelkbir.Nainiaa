import { motion } from "framer-motion";
import { FiGithub as Github } from "react-icons/fi";
import { FiLinkedin as Linkedin } from "react-icons/fi";
import { FaInstagram as Instagram } from "react-icons/fa";
import { SiUpwork as Upwork } from "react-icons/si";
import { ProjectButton } from "@/components/ui/glow-effect-button.tsx";
import { TextLoop } from "@/components/ui/text-loop";
import { HeroStars } from "@/components/ui/stars";
import {SparklesText} from "@/components/ui/sparkles-text.tsx";
import Magnet from "@/ui/Animations/Magnet/Magnet.tsx";
import { Typewriter } from "@/components/ui/typewriter";

export function HeroSection() {
    return (
        <main>
            <section
                id="home"
                className="relative px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen flex items-center py-10"
            >
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="container grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content - Left Column */}
                    <motion.div
                        className="space-y-6 md:space-y-8 order-1 mt-10 lg:mt-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className="inline-block whitespace-pre-wrap text-sm md:text-base rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1.5 font-semibold text-gray-900 dark:text-gray-100 border border-blue-300/30 dark:border-purple-300/30 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Hello, You, I'm{" "}
                            <TextLoop
                                transition={{
                                    type: "spring",
                                    stiffness: 900,
                                    damping: 80,
                                    mass: 10,
                                }}
                                variants={{
                                    initial: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" },
                                    animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
                                    exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
                                }}
                            >
                                <span>Engineer 🧑‍💻</span>
                                <span>Gamer 🎮</span>
                                <span>Designer 🎨</span>
                            </TextLoop>
                        </motion.div>

                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img 
                                src="/ANlogo.png" 
                                alt="AN Logo" 
                                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
                            />
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] leading-tight font-poppins">
                                Abdelkbir <br /> Nainiaa
                            </h1>
                            
                            <div className="h-8 md:h-10">
                                <Typewriter 
                                    words={[
                                        "Software Engineering Student",
                                        "Full-Stack Developer", 
                                        "AI Enthusiast",
                                        "Problem Solver"
                                    ]}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                    className="text-lg md:text-2xl text-primary font-medium"
                                />
                            </div>
                        </div>

                        <motion.p 
                            className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Passionate about creating innovative digital solutions and turning ideas into reality through code and design.
                        </motion.p>

                        <div className="flex justify-center items-center gap-6 pt-2">
                            <Magnet padding={50} disabled={false} magnetStrength={5}>
                                <ProjectButton />
                            </Magnet>

                            <div className="flex gap-6">
                                {[
                                    { href: "https://github.com/AbdelkbirNA", icon: Github, label: "GitHub" },
                                    { href: "https://www.linkedin.com/in/abdelkbir-nainiaa/", icon: Linkedin, label: "LinkedIn" },
                                    { href: "https://www.instagram.com/771_vrtx/", icon: Instagram, label: "Instagram" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted/50"
                                        rel="noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    >
                                        <social.icon className="h-5 w-5" />
                                        <span className="sr-only">{social.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Graphic - Right Column */}
                    <motion.div
                        className="relative flex justify-center order-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <HeroStars />
                            <motion.div 
                                className="relative z-10"
                                whileHover={{ 
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src="/mainIcons.svg"
                                    alt="Light mode illustration"
                                    className="w-full h-auto object-contain mx-auto block dark:hidden drop-shadow-2xl"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                <img
                                    src="/mainIconsdark.svg"
                                    alt="Dark mode illustration"
                                    className="w-full h-auto object-contain mx-auto hidden dark:block drop-shadow-2xl"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}