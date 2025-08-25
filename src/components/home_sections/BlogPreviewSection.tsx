import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
    slug: string;
}

export function BlogPreviewSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Building Modern Web Applications with React and Next.js",
            excerpt: "Explore the latest features and best practices for creating scalable, performant web applications using React 18 and Next.js 14. Learn about server components, app router, and optimization techniques.",
            author: "Abdelkbir Nainiaa",
            date: "2024-01-15",
            readTime: "8 min read",
            tags: ["React", "Next.js", "Web Development", "Frontend"],
            image: "/mainIcons.svg",
            slug: "building-modern-web-apps"
        },
        {
            id: 2,
            title: "The Future of AI in Software Development",
            excerpt: "Discover how artificial intelligence is transforming the software development landscape. From automated testing to intelligent code generation, AI is revolutionizing how we build software.",
            author: "Abdelkbir Nainiaa",
            date: "2024-01-10",
            readTime: "12 min read",
            tags: ["AI", "Software Development", "Machine Learning", "Future Tech"],
            image: "/mainIconsdark.svg",
            slug: "ai-in-software-development"
        },
        {
            id: 3,
            title: "DevOps Best Practices for Modern Teams",
            excerpt: "Learn essential DevOps practices that can streamline your development workflow. From CI/CD pipelines to containerization with Docker, discover tools and strategies for efficient deployment.",
            author: "Abdelkbir Nainiaa",
            date: "2024-01-05",
            readTime: "10 min read",
            tags: ["DevOps", "Docker", "CI/CD", "Deployment"],
            image: "/mainIcons.svg",
            slug: "devops-best-practices"
        }
    ];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-red-500/5 rounded-full blur-3xl" />
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
                        Blog & Insights
                    </Badge>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        Latest Thoughts & Insights
                    </h2>
                    
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Sharing knowledge, experiences, and insights about software development, AI, and the latest tech trends.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <Card className="relative h-full bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-lg backdrop-blur-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <motion.img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        
                                        {/* Tags Overlay */}
                                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="text-xs bg-background/80 backdrop-blur-sm border-white/20 text-foreground"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <CardContent className="p-6 space-y-4">
                                        {/* Meta Information */}
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                <span className="truncate">{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </CardContent>

                                    <CardFooter className="p-6 pt-0">
                                        <Button 
                                            variant="outline" 
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                            asChild
                                        >
                                            <a href={`/blog/${post.slug}`}>
                                                Read More
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                        </Button>
                                    </CardFooter>

                                    {/* Hover Effects */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                    
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
                    <Button 
                        variant="outline" 
                        size="lg"
                        className="rounded-full px-8 group border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                    >
                        <a href="/blog">
                            View All Posts
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
