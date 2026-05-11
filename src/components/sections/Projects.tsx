"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

const projects = [
  {
    title: "Tapstik",
    category: "RESTAURANT MANAGEMENT SOFTWARE // 01",
    description: "Specialized software for modern restaurants. Streamlining operations with real-time data processing and intuitive management tools.",
    image: "/images/Tapstik.png",
    link: "https://tapstik.net/",
  },
  {
    title: "CheqMate",
    category: "CHEQUE MANAGEMENT WEB SOFTWARE // 02",
    description: "Advanced financial tracking system for secure cheque management. Implementing integrity protocols and transaction monitoring.",
    image: "/images/Chequetracker.png",
    link: "https://chequetrackerr.netlify.app/",
  },
  {
    title: "IT Stationary",
    category: "IT NETWORKING COMPANY // 03",
    description: "Comprehensive IT infrastructure and networking solutions. Engineered for scalability, security, and high-performance environments.",
    image: "/images/itstationaryfulllogo.png",
    link: "https://itstationary.com.np/",
  },
  {
    title: "Brain Play Arena",
    category: "EDUCATIONAL GAME // 04",
    description: "An interactive brain-training platform designed for young students. Sharpening cognitive skills through gamified challenges.",
    image: "/images/brainplayarena.png",
    link: "https://brainplayarena.netlify.app/",
  },
  {
    title: "Rosa Beauty Parlour",
    category: "BEAUTY PARLOUR WEBSITE // 05",
    description: "Elegant digital presence for beauty services. Integrating smart appointment systems with a premium visual design.",
    image: "/images/Rosabeautyparlour.png",
    link: "https://rosaparlour.netlify.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedSection className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>FEATURED // PROJECTS // SYSTEMS_READY</EyebrowBadge>
            <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
              Recent <span className="text-accent animate-scan">Operations.</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, i) => (
              <AnimatedItem key={i} className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-1 transition-all duration-500 hover:border-accent/40">
                <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-accent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* HUD Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-accent/5 backdrop-blur-[2px]">
                    <div className="h-20 w-20 rounded-full border border-accent/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border border-accent/60 flex items-center justify-center animate-spin-slow">
                        <ArrowUpRight size={24} className="text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6 p-8 bg-black/40 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em]">
                    <span className="text-accent">{project.category}</span>
                    <span className="text-zinc-600">ID: P-00{i+1}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <h3 className="font-sans text-3xl font-bold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="mt-2 inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-all hover:gap-4"
                  >
                    Launch System <ArrowRight size={14} />
                  </a>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
