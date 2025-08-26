"use client"

import { motion } from "framer-motion"
import type { JSX } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, Download, Award, BookOpen, Briefcase, Lightbulb, Clock } from "lucide-react"
import { AboutStars } from "@/components/ui/stars"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiGit,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiPython,
  SiDocker,
  SiFigma,
  SiSelenium
} from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function AboutSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Python",
    "Docker",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Selenium"
  ]

  const skillIcons: { [key: string]: JSX.Element } = {
    JavaScript: <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    React: <SiReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    Laravel: <SiLaravel className="text-red-500" />,
    PHP: <SiPhp className="text-purple-500" />,
    "Node.js": <SiNodedotjs className="text-green-600" />,
    Express: <SiExpress className="text-black dark:text-white" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    MySQL: <SiMysql className="text-blue-700" />,
    Python: <SiPython className="text-blue-600" />,
    Docker: <SiDocker className="text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    Git: <SiGit className="text-orange-500" />,
    Figma: <SiFigma className="text-pink-600" />,
    Selenium: <SiSelenium className="text-green-500" />
  }

  const skillColors: { [key: string]: string } = {
    JavaScript: "#FACC15",
    TypeScript: "#3B82F6",
    React: "#22D3EE",
    "Next.js": "#000000",
    Laravel: "#EF4444",
    PHP: "#8B5CF6",
    "Node.js": "#16A34A",
    Express: "#4B5563",
    MongoDB: "#22C55E",
    MySQL: "#2563EB",
    Python: "#3B82F6",
    Docker: "#2563EB",
    "Tailwind CSS": "#38BDF8",
    Git: "#F97316",
    Figma: "#EC4899",
    Selenium: "#22C55E"
  }

  // Skill levels for progress bars
  const skillLevels = {
    JavaScript: 90,
    TypeScript: 75,
    React: 85,
    "Next.js": 80,
    Laravel: 75,
    PHP: 80,
    "Node.js": 80,
    Express: 75,
    MongoDB: 70,
    MySQL: 75,
    Python: 75,
    Docker: 70,
    "Tailwind CSS": 85,
    Git: 85,
    Figma: 65,
    Selenium: 70
  }

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "2DK Services",
      period: "Jul 2025 – Present",
      description:
        "Contributed to the development and improvement of innovative web solutions, including OrnoPlante, an AI-powered plant care platform, using modern web technologies and DevOps practices.",
    },
  ]

  const education = [
    {
      degree: "Software Engineering",
      institution: "National Higher School of Artificial Intelligence and Data Sciences, Taroudant",
      period: "2024 - Present",
      description: "Systems Architecture · AI Engineering · Cloud Computing",
    },
    {
      degree: "Preparatory Year - Maths, Physics, Computer Science",
      institution: "Faculty of Sciences and Technology, Mohammedia",
      period: "2022 - 2024",
      description: "Mathematics · Physics · Computer Science Fundamentals · Programming Basics",
    },
    {
      degree: "Baccalaureate in Science",
      institution: "Sayarh, Azemmour",
      period: "2022",
      description: "Computer Science · Mathematics · Physics - Graduated with distinction in technical sciences",
    }
  ]

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Application Development",
      description: "Full-stack development of responsive, high-performance web applications using modern stacks like React, Next.js, and Node.js",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Process Automation",
      description: "Building custom automation solutions for data extraction, workflow optimization, and business process streamlining",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Cross-Platform Mobile Apps",
      description: "Development of performant mobile applications for iOS and Android using React Native",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Cloud & DevOps Solutions",
      description: "Implementing CI/CD pipelines, cloud infrastructure, and deployment automation",
    },
  ]

  return (
    <section id="about" className="py-24 relative mb-[-50px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4" variant="secondary">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/70 to-foreground animate-[shimmer_4s_linear_infinite] [background-size:200%_100%]">
            My Journey & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            A passionate developer with a keen eye for design and a commitment to creating exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutStars />

            <span className="block w-full mx-auto filter drop-shadow-[0_0_100px_rgba(80,90,90,1)] dark:drop-shadow-[0_0_40px_rgba(200,200,200,1)]">
              <img
                src="/myimg.png"
                alt="Abdelkbir Nainiaa"
                className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[700px] xl:w-[850px] 2xl:w-[1000px] h-auto object-contain mx-auto rounded-full"
              />
            </span>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">
              Hello, I'm{" "}
              <span className="text-primary">
                Abdelkbir
              </span>
            </h3>
            <p className="text-muted-foreground">
              I'm a Software Engineering student passionate about building innovative and scalable software solutions. I enjoy exploring web development, AI, and DevOps, and I'm driven by the challenge of turning ideas into impactful applications.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in both design and development, I approach every project with a balanced mindset
              — blending creativity with clean, efficient code to bring ideas to life.
            </p>

            {/* Personal facts */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-300" />
                  <span className="text-sm">Available: 20hrs/week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Continuous Learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">3+ Projects Completed</span>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-3 drop-shadow-[0_0_7px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_7px_rgba(200,200,200,1)]">
              My Skills
            </h4>

            <div className="pt-4 flex justify-center">
              <div className="grid grid-cols-3 gap-1 justify-center text-[0.65rem] sm:text-xs sm:flex sm:flex-wrap">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="flex items-center gap-[0.2rem] rounded-full px-[0.5rem] py-[0.2rem] bg-transparent border text-gray-700 border-gray-300 dark:bg-transparent border-muted text-muted-foreground hover:bg-gray-100 dark:hover:bg-white/10 transition-colors sm:gap-1 sm:px-2 sm:py-1"
                  >
                    {skillIcons[skill]}
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="flex items-center gap-2" variant="outline" asChild>
                <a href="/CV_Abdelkbir_Nainiaa.pdf" download="CV Abdelkbir Nainiaa">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-center w-full">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} | {exp.period}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-center w-full">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-2">
                      {edu.institution} | {edu.period}
                    </p>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="services" className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}