import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="py-20">
      <SectionHeader title="About Me" desc="Get to know me better." id="about" />
      
      <div className="max-w-4xl mx-auto mt-12 px-4 shadow-sm border border-border/50 rounded-2xl p-8 bg-card/30 backdrop-blur-sm">
        <div className="flex flex-col gap-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Hi, I&apos;m {config.author}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg text-justify md:text-center">
            {config.description.long}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-6">
             <Link
                href="https://drive.google.com/file/d/1Rnne_gtRSqJcGATbIEl5C2NLkMQriwuS/view?usp=sharing"
                target="_blank"
              >
              <Button size="lg" className="gap-2 group">
                <File className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                View Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
