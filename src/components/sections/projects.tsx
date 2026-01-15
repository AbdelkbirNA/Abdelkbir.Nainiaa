"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-20 z-10 relative">
      <SectionHeader id="projects" title="Projects" desc="Things I've built." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.src} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const allSkills = [
    ...(project.skills.frontend || []),
    ...(project.skills.backend || []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border overflow-hidden",
          "hover:border-primary/20 transition-all duration-300",
          "shadow-sm hover:shadow-md h-full flex flex-col"
        )}
      >
        {/* Project Image - Takes up more space */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            className="object-cover hover:scale-105 transition-transform duration-300"
            src={project.src}
            alt={project.title}
            fill
          />
        </div>

        {/* Compact Info Section */}
        <div className="p-4 space-y-3 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold tracking-tight">
              {project.title}
            </h3>
            <Badge variant="secondary" className="text-xs font-normal shrink-0">
              {project.category}
            </Badge>
          </div>

          {/* Tech Stack - Compact */}
          <div className="flex flex-wrap gap-1.5 flex-1">
            {allSkills.map((skill, i) => (
              <Badge
                key={`${skill.title}-${i}`}
                variant="outline"
                className="gap-1.5 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent h-6 px-2"
                style={{
                  backgroundColor: `${skill.bg}10`,
                  color: skill.fg,
                }}
              >
                <span className="text-base flex items-center">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.title}</span>
              </Badge>
            ))}
          </div>

          {/* Links - Compact */}
          <div className="flex gap-2">
            {project.live && (
              <Link href={project.live} target="_blank" className="flex-1">
                <Button variant="default" size="sm" className="w-full gap-1.5 h-8 text-xs">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit
                </Button>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-1.5 h-8 text-xs">
                  <Github className="w-3.5 h-3.5" />
                  Code
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;
