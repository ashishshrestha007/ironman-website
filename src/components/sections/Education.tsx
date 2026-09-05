"use client";

import React from "react";
import { motion } from "framer-motion";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems (DBMS)",
  "Operating Systems Architecture",
  "Object-Oriented Programming (Python/C++)",
  "Computer Networks & Protocols",
  "Software Engineering & QA",
];

export function Education() {
  return (
    <section id="education" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
          {/* Left Column: Slides in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-[#8B9CAE]">Academic Background</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-4xl">
              Computer Science Education
            </h2>
            <p className="text-sm leading-relaxed text-[#8B9CAE] mt-1">
              Bachelor of Computer Application (BCA) at Tribhuvan University, grounding software development in core algorithmic principles, database systems, and software engineering methodologies.
            </p>
          </motion.div>

          {/* Right Column: Slides in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-[#223142] bg-[#121A24] p-6 sm:p-7 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between border-b border-[#223142] pb-4">
              <div>
                <h3 className="font-heading text-lg font-bold text-[#F0F4F8]">
                  Bachelor of Computer Application (BCA)
                </h3>
                <span className="font-mono text-xs text-[#8B9CAE]">
                  Tribhuvan University, Nepal
                </span>
              </div>
              <span className="font-mono text-xs font-semibold text-[#38BDF8] border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-2.5 py-1 rounded">
                5th Semester
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs text-[#8B9CAE]">Core Coursework &amp; Practicals:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded bg-[#0B0F14] border border-[#223142] px-3 py-2 text-xs text-[#F0F4F8]"
                  >
                    <span className="text-[#E6212A] font-mono">/</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
