"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillGroup {
  category: string;
  skills: { name: string; tier: "Expert" | "Advanced" | "Intermediate" }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Systems",
    skills: [
      { name: "Python", tier: "Expert" },
      { name: "Django & DRF", tier: "Expert" },
      { name: "PostgreSQL / MySQL", tier: "Advanced" },
      { name: "REST API Design", tier: "Expert" },
      { name: "FastAPI", tier: "Intermediate" },
    ],
  },
  {
    category: "Frontend & Architecture",
    skills: [
      { name: "React & Next.js", tier: "Advanced" },
      { name: "TypeScript & JavaScript", tier: "Advanced" },
      { name: "Tailwind CSS", tier: "Advanced" },
      { name: "HTML5 & Semantic Web", tier: "Expert" },
      { name: "UI/UX Architecture", tier: "Intermediate" },
    ],
  },
  {
    category: "AI & Modern Tooling",
    skills: [
      { name: "AI-Augmented Dev Workflows", tier: "Advanced" },
      { name: "Git & GitHub CI/CD", tier: "Expert" },
      { name: "Docker & Linux", tier: "Intermediate" },
      { name: "Cloud Deployments (Vercel/Netlify)", tier: "Advanced" },
      { name: "System Debugging & QA", tier: "Advanced" },
    ],
  },
];

const tierColor = {
  Expert: "text-[#E6212A] border-[#E6212A]/30 bg-[#E6212A]/10",
  Advanced: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
  Intermediate: "text-[#8B9CAE] border-[#223142] bg-[#121A24]",
};

export function Skills() {
  return (
    <section id="skills" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col gap-10">
          {/* Header & Legend */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#8B9CAE]">Capability Matrix</span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-4xl">
                Technical Skills &amp; Stack
              </h2>
            </div>

            {/* Tier Legend */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#8B9CAE]">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#E6212A]/30 text-[#E6212A]">
                Expert
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#38BDF8]/30 text-[#38BDF8]">
                Advanced
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#223142] text-[#8B9CAE]">
                Intermediate
              </span>
            </div>
          </motion.div>

          {/* 3-Column Tier Grid with Left/Center/Right Convergence Animation */}
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, i) => {
              const xOffset = i === 0 ? -60 : i === 2 ? 60 : 0;
              const yOffset = i === 1 ? 40 : 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: xOffset, y: yOffset }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-[#223142] bg-[#121A24] p-6 flex flex-col gap-5"
                >
                  <div className="border-b border-[#223142] pb-3">
                    <h3 className="font-heading text-base font-bold text-[#F0F4F8]">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {group.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between border-b border-[#223142]/50 pb-2 text-sm"
                      >
                        <span className="font-medium text-[#F0F4F8]">{skill.name}</span>
                        <span
                          className={`rounded px-2 py-0.5 font-mono text-[10px] font-semibold border ${
                            tierColor[skill.tier]
                          }`}
                        >
                          {skill.tier}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
