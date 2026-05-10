"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "Django", level: "85%" },
      { name: "React", level: "75%" },
    ],
  },
  {
    title: "Frontend & Design",
    skills: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3 / Tailwind", level: "90%" },
      { name: "TypeScript", level: "70%" },
      { name: "Canva", level: "75%" },
    ],
  },
  {
    title: "Tools & Backend",
    skills: [
      { name: "MySQL", level: "80%" },
      { name: "GitHub", level: "85%" },
      { name: "Vim", level: "70%" },
      { name: "API Integration", level: "85%" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedSection className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>TECH STACK // CAPABILITIES // OPTIMIZED</EyebrowBadge>
            <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
              Arsenal of <span className="text-accent">Tools.</span>
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <AnimatedItem key={i} className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-accent/40" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-8">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="flex flex-col gap-3">
                      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-accent/60">{skill.level}</span>
                      </div>
                      <div className="relative h-[3px] w-full bg-white/5">
                        <div 
                          className="absolute inset-0 bg-accent/20 blur-[2px]" 
                          style={{ width: skill.level }}
                        />
                        <div 
                          className="relative h-full bg-accent shadow-[0_0_12px_rgba(230,33,42,0.6)] transition-all duration-1000" 
                          style={{ width: skill.level }}
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[8px] text-zinc-700 tracking-widest">
                        <span>L0</span>
                        <span>L1</span>
                        <span>L2</span>
                        <span>L3</span>
                        <span>L4</span>
                        <span>L5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
