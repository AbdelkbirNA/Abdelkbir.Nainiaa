import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {  ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiMysql,
    SiPython,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiFigma,
    SiGooglemaps,
    SiSocketdotio,
    SiStripe,
    SiNextdotjs,
    SiSelenium,
    SiPhp,
    SiHtml5,
    SiCss3,
    SiClerk,
    SiShadcnui,
    SiScrapy,
    SiAppwrite,
    SiDocker
} from "react-icons/si";
import {Lens} from "@/components/ui/lens.tsx";
// import Component from "@/components/achievement-card.tsx";
import SplitText from "@/ui/TextAnimations/SplitText/SplitText.tsx";
import {AchievementCard} from "@/components/achievement-card.tsx";

export function ProjectSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Web", "Mobile"];

    const projects = [
        {
            id: 1,
            title: "EduTrack",
            description: "Interactive e-learning platform for course publishing, progress tracking, quizzes, and secure authentication.",
            image: "edutrack.jpg",
            category: "Web App",
            tags: ["Java", "MongoDB", "Docker", "Git"],
            liveUrl: "",
            githubUrl: "https://github.com/IBIZZI-Khalid/E-Learning-Management-System-EDUTRACK",
        },
        {
            id: 2,
            title: "E-Professor",
            description: "Academic website for professors to showcase work and manage courses. Includes resource sharing.",
            image: "eprof.jpg",
            category: "Web App",
            tags: ["PHP", "Laravel", "MySQL", "CSS", "HTML", "Git"],
            liveUrl: "",
            githubUrl: "https://github.com/AbdelkbirNA/ProjetWeb_EduSchool",
        },
        {
            id: 3,
            title: "OrnoPlante",
            description: "A smart plant monitoring system for optimal growth. (Placeholder description)",
            image: "ornoplante.png",
            category: "Web App",
            tags: ["React", "Next.js", "Node.js", "Tailwind CSS", "Git","Docker","Express.js"],
            liveUrl: "",
            githubUrl: "https://github.com/AbdelkbirNA/OrnoPlante",
        }
    ];

    const tagIcons: Record<string, JSX.Element> = {
        JavaScript: <SiJavascript className="text-yellow-400" />,
        "HTML" : <SiHtml5 className="text-red-500" />,
        "CSS" : <SiCss3 className="text-blue-500" />,
        "PHP" : <SiPhp className="text-purple-500" />,
        "Selenium" : <SiSelenium className="text-green-500" />,
        "Clerk" : <SiClerk className="text-yellow-500" />,
        "Next.js" : <SiNextdotjs className="text-black-500" />,
        "Shadcn UI" : <SiShadcnui className="text-black-500" />,
        "Scrapy" : <SiScrapy className="text-black-500" />,
        TypeScript: <SiTypescript className="text-blue-500" />,
        React: <SiReact className="text-cyan-400" />,
        "React Native" : <SiReact className="text-cyan-400" />,
        "Node.js": <SiNodedotjs className="text-green-600" />,
        MongoDB: <SiMongodb className="text-green-500" />,
        "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
        Git: <SiGit className="text-orange-500" />,
        "Framer Motion": (
            <img
                src="/framerMotion.svg"
                alt="Framer Motion"
                className="w-4 h-4"
            />
        ),
        MySQL: <SiMysql className="text-blue-700" />,
        Python: <SiPython className="text-blue-600" />,
        GraphQL: <SiMongodb className="text-pink-500" />,
        Stripe: <SiStripe className="text-indigo-500" />,
        "Google Maps API": <SiGooglemaps className="text-red-500" />,
        "Socket.io": <SiSocketdotio className="text-black dark:text-white" />,
        Figma: <SiFigma className="text-pink-600" />,
        "UI/UX": <SiTailwindcss className="text-sky-400" />,
        "Design System": <SiTailwindcss className="text-sky-400" />,
        Appwrite: <SiAppwrite className="text-red-500" />,
        Automation: <TbSettingsAutomation className="text-green-500" />,
        Docker: <SiDocker className="text-blue-400" />,
    };

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(project => project.category === activeFilter);

    return (
        <>
        <section id="work" className="py-24 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 sm:px-6">
                <motion.div
                    className="max-w-3xl mx-auto text-center flex flex-col gap-3 items-center justify-center md:mb-12 mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className=" mb-4 px-4 py-1 text-sm" variant="secondary">
                        Projects
                    </Badge>

                    <SplitText

                        text="Featured Projects"

                        className="text-3xl drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"

                        delay={100}

                        duration={0.6}

                        ease="power3.out"

                        splitType="chars"

                        from={{ opacity: 0, y: 40 }}

                        to={{ opacity: 1, y: 0 }}

                        threshold={0.1}

                        rootMargin="-100px"

                        textAlign="center"


                    />
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        Explore my recent work and discover how I bring ideas to life through code and design.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? "default" : "outline"}
                                size="sm"
                                className="rounded-full transition-all"
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <div className="mx-auto flex justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2   justify-center items-center lg:grid-cols-3   gap-6 mx-auto">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="flex"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col h-full dark:bg-background/5 backdrop-blur-sm dark:border-white/10 border-neutral-300 shadow-lg transition-all  duration-300 hover:shadow-xl">
                                    <CardContent className="flex-1 px-5">
                                        <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                                            <Lens defaultPosition={{ x: 260, y: 150 }}>
                                                <img
                                                    src={`/${project.image}`}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </Lens>
                                        </div>

                                        <h3 className="text-xl font-bold mt-4 line-clamp-1">
                                            {project.title}
                                        </h3>

                                        {/* Enhanced description area */}
                                        <p className="mt-3 text-base text-muted-foreground line-clamp-3 min-h-[72px]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {project.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="bg-background/30 backdrop-blur-sm border-white/10 flex items-center gap-1 text-xs font-normal px-2 py-1"
                                                >
                                                    <span className="flex-shrink-0">
                                                        {tagIcons[tag] || null}
                                                    </span>
                                                    <span className="truncate max-w-[70px]">{tag}</span>
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="px-5 pb-2 gap-2 flex-wrap">

                                        {project.githubUrl !== "" &&
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 min-w-[120px] border-neutral-800 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-800 dark:text-white"
                                                asChild
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 justify-center"
                                                >
                                                    <Github className="h-4 w-4 flex-shrink-0" />
                                                    <span>Code</span>
                                                </a>
                                            </Button>
                                        }

                                        {project.liveUrl !== "" &&
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 min-w-[120px] border-neutral-800 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-800 dark:text-white"
                                                asChild
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 justify-center"
                                                >
                                                    <ExternalLink className="h-4 w-4 flex-shrink-0" />
                                                    <span>Live Demo</span>
                                                </a>
                                            </Button>
                                        }

                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/*<div className="flex justify-center mt-16">*/}
                {/*    <Button*/}
                {/*        variant="outline"*/}
                {/*        size="lg"*/}
                {/*        className="rounded-full px-8 group border-neutral-800 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5"*/}
                {/*    >*/}
                {/*        View All Projects*/}
                {/*        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>
        </section>
            </>
    );
}