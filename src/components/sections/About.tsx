"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 bg-black py-24 md:py-32">
      {/* Scanning Line Animation */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-[0_0_15px_rgba(230,33,42,0.5)] animate-scan" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedSection className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <AnimatedItem className="flex flex-col gap-6">
            <EyebrowBadge>MISSION // OBJECTIVE</EyebrowBadge>
            <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
              Engineering <span className="text-accent">Intelligence</span> into Code.
            </h2>
          </AnimatedItem>
          <AnimatedItem className="flex flex-col gap-6">
            <p className="font-sans text-lg leading-relaxed text-zinc-400">
              I am Ashish Shrestha, an **AI-Powered Full Stack Engineer** based in Kathmandu, Nepal. 
              I specialize in bridging the gap between advanced AI capabilities and robust web architectures, 
              creating applications that aren't just functional, but intelligent.
            </p>
            <p className="font-sans text-lg leading-relaxed text-zinc-400">
              With over 4 years of experience, my work at **Pioneer** and **Tapstik** involves architecting 
              systems that leverage AI to automate workflows, analyze data, and enhance user interaction 
              to an unprecedented level.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-accent">
                  <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(230,33,42,0.8)]" />
                  Location
                </span>
                <span className="text-foreground">Kathmandu, Nepal</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-accent">
                  <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(230,33,42,0.8)]" />
                  Capability
                </span>
                <span className="text-foreground">AI Integration / Full Stack</span>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
