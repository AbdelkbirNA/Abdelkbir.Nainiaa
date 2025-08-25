import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, User, Building2 } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
    project: string;
}

export function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Khalid IBIZZI",
            role: "Project Manager",
            company: "2DK Services",
            avatar: "/2dkservices_logo.jpeg",
            content: "Abdelkbir is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills made our OrnoPlante project a huge success. He's reliable, communicative, and always goes above and beyond.",
            rating: 5,
            project: "OrnoPlante AI Platform"
        },
        {
            id: 2,
            name: "Team Lead",
            role: "Senior Developer",
            company: "2DK Services",
            avatar: "/2dkservices_logo.jpeg",
            content: "Working with Abdelkbir has been a pleasure. His technical skills are impressive, and he quickly adapts to new technologies. He's become an invaluable member of our development team.",
            rating: 5,
            project: "Multiple Web Applications"
        },
        {
            id: 3,
            name: "Academic Supervisor",
            role: "Professor",
            company: "National Higher School of AI",
            avatar: "/myimg.png",
            content: "Abdelkbir shows exceptional promise in software engineering. His projects demonstrate strong technical foundations and innovative thinking. He's a dedicated student with a bright future ahead.",
            rating: 5,
            project: "Academic Projects"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${
                    i < rating 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                }`}
            />
        ));
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
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
                        Testimonials
                    </Badge>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        What People Say
                    </h2>
                    
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Feedback from clients, colleagues, and supervisors about my work and collaboration.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-lg backdrop-blur-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Quote Icon */}
                                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                        <Quote className="h-16 w-16 text-primary" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 space-y-6">
                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            {renderStars(testimonial.rating)}
                                            <span className="ml-2 text-sm text-muted-foreground">
                                                {testimonial.rating}.0
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <blockquote className="text-muted-foreground leading-relaxed italic">
                                            "{testimonial.content}"
                                        </blockquote>

                                        {/* Project Badge */}
                                        <div className="flex justify-center">
                                            <Badge 
                                                variant="secondary" 
                                                className="text-xs bg-primary/10 text-primary border-primary/20"
                                            >
                                                {testimonial.project}
                                            </Badge>
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-border/50"
                                                />
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-foreground truncate">
                                                    {testimonial.name}
                                                </h4>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <User className="h-3 w-3" />
                                                    <span className="truncate">{testimonial.role}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Building2 className="h-3 w-3" />
                                                    <span className="truncate">{testimonial.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Hover Effects */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                    
                                    {/* Floating Elements */}
                                    <motion.div
                                        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            opacity: [0.3, 0.8, 0.3]
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                                    />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
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
                        <span className="text-sm">Ready to add your testimonial?</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
