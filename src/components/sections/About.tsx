"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          {/* Left Column: Slides from Left into Center */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#8B9CAE]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E6212A]" aria-hidden="true" />
              <span>Executive Summary</span>
            </div>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-4xl">
              Engineering high-performance enterprise systems and SaaS architectures.
            </h2>

            <p className="text-base leading-relaxed text-[#8B9CAE]">
              I am Ashish Shrestha, a Full Stack Engineer based in Kathmandu, Nepal.
              I am the owner and sole developer of <strong className="text-[#F0F4F8]">Oval X RMS</strong> (Cloud Restaurant Management System &mdash; 100% built by me)
              and the co-owner and co-developer of <strong className="text-[#F0F4F8]">xSis</strong> (Commercial ERP, Billing &amp; POS platform).
            </p>
          </motion.div>

          {/* Right Column: Slides from Right into Center */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#223142] border border-[#223142]">
              <div className="bg-[#121A24] p-5 flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8B9CAE]">Experience</span>
                <span className="font-heading text-2xl font-bold text-[#F0F4F8]">4+ Years</span>
                <span className="text-xs text-[#8B9CAE]">Production Engineering</span>
              </div>

              <div className="bg-[#121A24] p-5 flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8B9CAE]">Flagship System</span>
                <span className="font-heading text-2xl font-bold text-[#E6212A]">Oval X</span>
                <span className="text-xs text-[#8B9CAE]">100% Owned &amp; Built</span>
              </div>

              <div className="bg-[#121A24] p-5 col-span-2 sm:col-span-1 flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8B9CAE]">Location</span>
                <span className="font-heading text-2xl font-bold text-[#F0F4F8]">Kathmandu</span>
                <span className="text-xs text-[#8B9CAE]">Nepal (GMT +5:45)</span>
              </div>
            </div>

            <div className="border-l-2 border-[#E6212A] bg-[#121A24]/60 p-4 text-xs leading-relaxed text-[#8B9CAE]">
              <strong className="text-[#F0F4F8] font-semibold">Engineering Focus:</strong> Solo product engineering, enterprise Python/Django backends, Next.js web portals, real-time WebSocket dispatch, and AI-accelerated workflows.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
