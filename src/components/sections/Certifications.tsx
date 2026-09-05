"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Certificate, ArrowUpRight } from "@phosphor-icons/react";

interface Credential {
  title: string;
  issuer: string;
  date: string;
  image: string;
  imageAlt: string;
}

const certifications: Credential[] = [
  {
    title: "Full Stack Python & Django Web Development",
    issuer: "Code IT (Institute of Technology)",
    date: "June 2023",
    image: "/images/Certificates/codeit_certificate.jpg",
    imageAlt: "Code IT Full Stack Python & Django Certificate",
  },
  {
    title: "Python Programming & Application Development",
    issuer: "Applied Dev Workflows",
    date: "2023",
    image: "/images/Certificates/Certificate of python uses.png",
    imageAlt: "Python Programming Certificate",
  },
];

export function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certifications" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 border-b border-[#223142] pb-6"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#8B9CAE]">
              <Certificate size={14} className="text-[#E6212A]" weight="fill" />
              <span>Accreditation</span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-4xl">
              Verified Certifications
            </h2>
          </motion.div>

          {/* Certificate Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col border border-[#223142] bg-[#121A24] hover:border-[#E6212A] transition-colors duration-300"
              >
                {/* Certificate Image Preview */}
                <div
                  className="relative w-full overflow-hidden border-b border-[#223142] cursor-pointer"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => setLightbox(item.image)}
                  title="Click to expand"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Expand hint overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 border border-white/40 bg-black/60 px-3 py-1.5 font-mono text-xs text-white">
                      <ArrowUpRight size={12} weight="bold" />
                      View Full
                    </span>
                  </div>
                </div>

                {/* Certificate Meta */}
                <div className="flex flex-col gap-1.5 p-5">
                  <span className="font-heading text-base font-bold text-[#F0F4F8]">
                    {item.title}
                  </span>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-mono text-xs text-[#8B9CAE]">
                      {item.issuer}
                    </span>
                    <span className="font-mono text-[11px] text-[#E6212A] border border-[#E6212A]/30 bg-[#E6212A]/5 px-2 py-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Certificate full view"
              width={1200}
              height={900}
              className="object-contain w-full h-auto max-h-[85vh] border border-[#223142]"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 bg-[#0B0F14]/90 border border-[#223142] text-[#F0F4F8] font-mono text-xs px-3 py-1.5 hover:bg-[#E6212A] hover:border-[#E6212A] transition-all"
            >
              ✕ Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
