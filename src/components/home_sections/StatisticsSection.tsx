import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
    Code, 
    Users, 
    Award, 
    Clock,
    Star,
    TrendingUp,
    Zap,
    Heart
} from "lucide-react";

interface StatItem {
    icon: React.ReactNode;
    label: string;
    value: number;
    suffix?: string;
    color: string;
}

export function StatisticsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [counts, setCounts] = useState<{ [key: string]: number }>({});

    const stats: StatItem[] = [
        {
            icon: <Code className="h-6 w-6" />,
            label: "Projects Completed",
            value: 3,
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Users className="h-6 w-6" />,
            label: "Happy Clients",
            value: 2,
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Award className="h-6 w-6" />,
            label: "Years Experience",
            value: 2,
            suffix: "+",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            label: "Hours Available",
            value: 20,
            suffix: "/week",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Star className="h-6 w-6" />,
            label: "Skills Mastered",
            value: 15,
            suffix: "+",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            label: "Success Rate",
            value: 95,
            suffix: "%",
            color: "from-red-500 to-pink-500"
        }
    ];

    useEffect(() => {
        if (isInView) {
            stats.forEach((stat) => {
                const timer = setInterval(() => {
                    setCounts(prev => {
                        const current = prev[stat.label] || 0;
                        if (current < stat.value) {
                            return { ...prev, [stat.label]: current + 1 };
                        }
                        clearInterval(timer);
                        return prev;
                    });
                }, 50);
            });
        }
    }, [isInView]);

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl" />
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
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium text-sm mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Zap className="h-4 w-4" />
                        Key Metrics
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        Numbers That Speak
                    </h2>
                    
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My journey in numbers - showcasing the impact and experience I bring to every project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                        >
                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-lg backdrop-blur-sm group-hover:shadow-xl transition-all duration-300">
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                
                                <div className="relative z-10 text-center space-y-4">
                                    {/* Icon */}
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg mx-auto`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {stat.icon}
                                    </motion.div>

                                    {/* Value */}
                                    <div className="space-y-1">
                                        <motion.div
                                            className="text-2xl md:text-3xl font-bold text-foreground"
                                            initial={{ scale: 0.5 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            {counts[stat.label] || 0}
                                            {stat.suffix}
                                        </motion.div>
                                        
                                        <p className="text-sm text-muted-foreground font-medium leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ 
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.8, 0.3]
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                />
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
                        <Heart className="h-4 w-4 animate-pulse" />
                        Ready to start your next project?
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
