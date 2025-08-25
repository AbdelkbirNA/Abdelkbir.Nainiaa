import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiTailwindcss,
    SiDocker,
    SiGit,
    SiPython,
    SiSelenium,
    SiFigma
} from "react-icons/si";

interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
    color: string;
    category: "Frontend" | "Backend" | "DevOps" | "Tools";
}

export function SkillsProgressSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills: Skill[] = [
        // Frontend
        { name: "React", level: 85, icon: <SiReact className="h-5 w-5" />, color: "from-cyan-400 to-cyan-600", category: "Frontend" },
        { name: "Next.js", level: 80, icon: <SiNextdotjs className="h-5 w-5" />, color: "from-gray-800 to-gray-900", category: "Frontend" },
        { name: "TypeScript", level: 75, icon: <SiTypescript className="h-5 w-5" />, color: "from-blue-500 to-blue-700", category: "Frontend" },
        { name: "JavaScript", level: 90, icon: <SiJavascript className="h-5 w-5" />, color: "from-yellow-400 to-yellow-600", category: "Frontend" },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="h-5 w-5" />, color: "from-sky-400 to-sky-600", category: "Frontend" },
        
        // Backend
        { name: "Node.js", level: 80, icon: <SiNodedotjs className="h-5 w-5" />, color: "from-green-500 to-green-700", category: "Backend" },
        { name: "Laravel", level: 75, icon: <SiLaravel className="h-5 w-5" />, color: "from-red-500 to-red-700", category: "Backend" },
        { name: "PHP", level: 80, icon: <SiPhp className="h-5 w-5" />, color: "from-purple-500 to-purple-700", category: "Backend" },
        { name: "MySQL", level: 75, icon: <SiMysql className="h-5 w-5" />, color: "from-blue-500 to-blue-700", category: "Backend" },
        { name: "MongoDB", level: 70, icon: <SiMongodb className="h-5 w-5" />, color: "from-green-500 to-green-700", category: "Backend" },
        
        // DevOps
        { name: "Docker", level: 70, icon: <SiDocker className="h-5 w-5" />, color: "from-blue-400 to-blue-600", category: "DevOps" },
        { name: "Git", level: 85, icon: <SiGit className="h-5 w-5" />, color: "from-orange-500 to-orange-700", category: "DevOps" },
        
        // Tools
        { name: "Python", level: 75, icon: <SiPython className="h-5 w-5" />, color: "from-blue-500 to-blue-700", category: "Tools" },
        { name: "Selenium", level: 70, icon: <SiSelenium className="h-5 w-5" />, color: "from-green-500 to-green-700", category: "Tools" },
        { name: "Figma", level: 65, icon: <SiFigma className="h-5 w-5" />, color: "from-pink-500 to-pink-700", category: "Tools" },
    ];

    const categories = ["Frontend", "Backend", "DevOps", "Tools"];

    const getSkillLevelText = (level: number) => {
        if (level >= 90) return "Expert";
        if (level >= 80) return "Advanced";
        if (level >= 70) return "Intermediate";
        if (level >= 60) return "Beginner";
        return "Learning";
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 sm:px-6">
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4 px-4 py-1 text-sm" variant="secondary">
                        Technical Skills
                    </Badge>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        Skills & Expertise
                    </h2>
                    
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels across different technologies.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            className="mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                                {category}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                            <div className="space-y-4">
                                                {/* Skill Header */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white shadow-md`}>
                                                            {skill.icon}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                                                            <p className="text-xs text-muted-foreground">
                                                                {getSkillLevelText(skill.level)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Badge 
                                                        variant="secondary" 
                                                        className="text-xs font-medium"
                                                    >
                                                        {skill.level}%
                                                    </Badge>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-xs text-muted-foreground">
                                                        <span>Beginner</span>
                                                        <span>Expert</span>
                                                    </div>
                                                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                                                        <motion.div
                                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (index * 0.05) + 0.3 }}
                                                        >
                                                            {/* Animated Shine Effect */}
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                                animate={{
                                                                    x: ["-100%", "100%"]
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    repeatDelay: 3
                                                                }}
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </div>

                                                {/* Hover Effects */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                                
                                                {/* Floating Elements */}
                                                <motion.div
                                                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    animate={{ 
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.3, 0.8, 0.3]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span className="text-sm">Always learning and improving</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
