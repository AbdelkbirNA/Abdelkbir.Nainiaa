import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      SkillNames.JS,
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.ANGULAR,
      SkillNames.VUE,
      SkillNames.ASTRO,
      SkillNames.VITE,
      SkillNames.TAILWIND,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      SkillNames.PYTHON,
      SkillNames.JAVA,
      SkillNames.CPP,
      SkillNames.PHP,
      SkillNames.NODEJS,
      SkillNames.NESTJS,
      SkillNames.FASTAPI,
      SkillNames.SPRINGBOOT,
      SkillNames.LARAVEL,
      SkillNames.EXPRESS,
    ],
  },
  {
    id: "database",
    label: "DB & ORM",
    skills: [
      SkillNames.POSTGRES,
      SkillNames.MYSQL,
      SkillNames.SQLITE,
      SkillNames.MONGODB,
      SkillNames.REDIS,
      SkillNames.PRISMA,
      SkillNames.HIBERNATE,
      SkillNames.SQLALCHEMY,
      SkillNames.SUPABASE,
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      SkillNames.DOCKER,
      SkillNames.DOCKERCOMPOSE,
      SkillNames.KUBERNETES,
      SkillNames.GHACTIONS,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.AZURE,
      SkillNames.VERCEL,
      SkillNames.RAILWAY,
      SkillNames.AZUREBLOB,
    ],
  },
  {
    id: "tools",
    label: "Management & QA",
    skills: [
      SkillNames.JEST,
      SkillNames.CYPRESS,
      SkillNames.PLAYWRIGHT,
      SkillNames.POSTMAN,
      SkillNames.SUPERTEST,
      SkillNames.JIRA,
      SkillNames.GHPROJECTS,
      SkillNames.NPM,
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full min-h-screen py-20 flex flex-col items-center overflow-hidden">
      <div className="container px-4 relative z-10">
        <SectionHeader 
          id='skills' 
          title="Engineering Stack" 
          desc="The systems and tools I use to build robust software." 
        />
        
        <div className="mt-8 max-w-5xl mx-auto backdrop-blur-xl bg-slate-950/20 border border-white/5 rounded-3xl p-4 md:p-8 shadow-2xl">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full h-auto bg-white/5 p-1.5 rounded-2xl gap-2 mb-10 border border-white/5">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="py-3 px-4 rounded-xl transition-all duration-300 font-semibold data-[state=active]:bg-white data-[state=active]:text-black text-slate-400 hover:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0 outline-none">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                  {category.skills.map((skillKey, idx) => {
                    const skill = SKILLS[skillKey];
                    if (!skill) return null;
                    return (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ 
                          y: -5,
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          borderColor: "rgba(255, 255, 255, 0.1)"
                        }}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-transparent border border-white/5 transition-all group cursor-default relative overflow-hidden"
                      >
                        <div className="relative w-14 h-14 mb-4 transform transition-all duration-300 group-hover:scale-110">
                          <Image
                            src={skill.icon}
                            alt={`${skill.label} technology logo`}
                            fill
                            loading="lazy"
                            className={cn(
                              "object-contain",
                              (skill.name === "express" || skill.name === "prisma" || skill.name === "ghactions" || skill.name === "cypress") && "brightness-0 invert"
                            )}
                          />
                        </div>
                        <span className="text-sm font-semibold text-white transition-colors duration-300 text-center">
                          {skill.label}
                        </span>
                        
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-2 group-hover:bottom-2 left-0 right-0 px-2 pointer-events-none">
                          <div className="bg-white text-black rounded-lg p-2 shadow-xl border border-white/10">
                            <p className="text-[10px] leading-tight font-bold text-center line-clamp-2">
                              {skill.shortDescription}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
