"use client";

import React from "react";
import { motion } from "framer-motion";

interface Job {
  index: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  stack: string[];
}

const jobs: Job[] = [
  {
    index: "01",
    role: "Founder, Owner & Solo Software Architect",
    company: "Oval X RMS (ovalxcloud.com)",
    period: "2024 to Present",
    bullets: [
      "Independently created, owned, and developed 100% of the Oval X Cloud Restaurant Management System from ground up.",
      "Engineered real-time WebSocket kitchen order tickets (KOT), live table mapping, automated multi-terminal billing, and cloud inventory syncing.",
    ],
    stack: ["Next.js", "React", "Django & DRF", "PostgreSQL", "WebSockets"],
  },
  {
    index: "02",
    role: "Co-Owner & Lead Web Developer",
    company: "xSis (ERP & POS Solutions)",
    period: "2025 to Present",
    bullets: [
      "Co-developed the xSis commercial billing, inventory, and point-of-sale ERP engine with sub-100ms receipt generation.",
      "Engineered the official web platform (xsis.megaminds.com.np) and administrative portals with responsive interfaces and role-based access control.",
    ],
    stack: ["Python", "Django", "React", "MySQL", "Tailwind CSS"],
  },
  {
    index: "03",
    role: "IT Officer & Software Engineer",
    company: "Pioneer Software Solutions",
    period: "2023 to Present",
    bullets: [
      "Architected enterprise REST services with Python and Django, optimizing PostgreSQL queries and maintaining core web services.",
      "Accelerated engineering velocity by 40% through AI-augmented automated testing, schema migrations, and rapid prototyping.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "REST APIs", "Modern Tooling"],
  },
  {
    index: "04",
    role: "Technical Operations & QA Specialist",
    company: "Finix Dev",
    period: "2021 to 2023",
    bullets: [
      "Audited production data pipelines and enforced QA verification procedures across client web applications.",
      "Collaborated with developers to eliminate UI/UX edge cases and optimize operational logging systems.",
    ],
    stack: ["Quality Assurance", "Data Integrity", "Workflow Auditing"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            <span className="font-mono text-xs text-[#8B9CAE]">Career History</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-4xl">
              Professional Experience
            </h2>
          </motion.div>

          {/* Chronological Grid with Alternating Left/Right Slide-in Animations */}
          <div className="divide-y divide-[#223142] border-y border-[#223142]">
            {jobs.map((job, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={job.index}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-6 py-8 lg:grid-cols-[140px_1fr_240px] lg:gap-8 items-start transition-colors hover:bg-[#121A24]/40 px-2"
                >
                  {/* Index & Period */}
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-sm font-semibold text-[#E6212A]">
                      {job.index}
                    </span>
                    <span className="font-mono text-xs text-[#8B9CAE]">
                      {job.period}
                    </span>
                  </div>

                  {/* Role, Company, Impact Bullets */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#F0F4F8]">
                        {job.role}
                      </h3>
                      <span className="text-xs text-[#8B9CAE] font-medium">
                        {job.company}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {job.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-sm leading-relaxed text-[#8B9CAE] flex items-start gap-2">
                          <span className="text-[#E6212A] mt-1 shrink-0 font-mono text-xs">/</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 lg:justify-end">
                    {job.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded border border-[#223142] bg-[#121A24] px-2 py-0.5 font-mono text-[11px] text-[#8B9CAE]"
                      >
                        {item}
                      </span>
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
