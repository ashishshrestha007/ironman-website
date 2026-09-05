"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { motion, type Variants } from "framer-motion";

interface ProjectItem {
  id: string;
  orderNumber: string;
  badge: string;
  title: string;
  categoryTags: string[];
  summary: string;
  image: string;
  imageFit: "contain" | "cover";
  imageBg?: string;
  paddingClass?: string;
  link: string;
  stat1: { label: string; sub: string };
  stat2: { label: string; sub: string };
  actionText: string;
}

const projects: ProjectItem[] = [
  {
    id: "oval-x",
    orderNumber: "01",
    badge: "FLAGSHIP // 100% BUILT & OWNED",
    title: "Oval X: Cloud RMS & Kitchen Automation",
    categoryTags: ["CLOUD RMS", "REAL-TIME WEBSOCKETS", "ENTERPRISE ARCHITECTURE"],
    summary:
      "100% created, owned, and architected by Ashish Shrestha from ground up. Complete cloud Restaurant Management System featuring real-time WebSocket kitchen order tickets (KOT), live table synchronization, automated billing, and multi-branch inventory tracking.",
    image: "/images/FINAL LOGO.png",
    imageFit: "contain",
    imageBg: "bg-white",
    paddingClass: "p-6 sm:p-8",
    link: "http://ovalxcloud.com/",
    stat1: { label: "100% Owned", sub: "FULL ARCHITECTURE" },
    stat2: { label: "40% Faster", sub: "TABLE TURNAROUND" },
    actionText: "Explore Project",
  },
  {
    id: "xsis",
    orderNumber: "02",
    badge: "FEATURED CASE STUDY",
    title: "xSis Powered By Exa AI",
    categoryTags: ["AI ERP", "ENTERPRISE", "AUTOMATION"],
    summary:
      "Complete AI-based enterprise ERP software automating business intelligence, reporting, and smart commercial POS billing with instant barcode scanning, tax calculations, and multi-terminal synchronization.",
    image: "/images/Logo.png",
    imageFit: "contain",
    imageBg: "bg-white",
    paddingClass: "p-6 sm:p-8",
    link: "https://xsis.megaminds.com.np/",
    stat1: { label: "Exa AI", sub: "ERP SYSTEM" },
    stat2: { label: "Automated", sub: "WORKFLOWS" },
    actionText: "Explore Project",
  },
  {
    id: "tapstik",
    orderNumber: "03",
    badge: "SAAS RMS PLATFORM",
    title: "Tapstik SaaS RMS Portal",
    categoryTags: ["SAAS RMS", "CLOUD PORTAL", "ANALYTICS"],
    summary:
      "Centralized SaaS restaurant management portal and real-time operational dashboard providing multi-branch sales tracking, staff scheduling, table dispatch, and high-volume live data synchronization.",
    image: "/images/Tapstik logo.png",
    imageFit: "contain",
    imageBg: "bg-white",
    paddingClass: "p-6 sm:p-8",
    link: "https://tapstik.net/",
    stat1: { label: "Real-time", sub: "SALES SYNC" },
    stat2: { label: "Next.js", sub: "DJANGO STACK" },
    actionText: "Visit Website",
  },
  {
    id: "it-stationary",
    orderNumber: "04",
    badge: "CORPORATE IT PROCUREMENT",
    title: "IT Stationery Pvt. Ltd. Corporate Portal",
    categoryTags: ["B2B PROCUREMENT", "CORPORATE", "HARDWARE"],
    summary:
      "Corporate IT equipment sourcing and infrastructure portal engineered for IT Stationery Pvt. Ltd., featuring dynamic catalogs, automated quotation generators, and fast enterprise inquiry routing.",
    image: "/images/itstationaryfulllogo.png",
    imageFit: "contain",
    imageBg: "bg-white",
    paddingClass: "p-6 sm:p-8",
    link: "https://itstationary.com.np/",
    stat1: { label: "Sub-Second", sub: "SEARCH LATENCY" },
    stat2: { label: "Automated", sub: "QUOTATION ENGINE" },
    actionText: "Visit Website",
  },
  {
    id: "cheque-tracker",
    orderNumber: "05",
    badge: "FINTECH AUDIT LEDGER",
    title: "CheqMate: Cheque Reconciliation & Risk Audit",
    categoryTags: ["FINTECH", "AUDIT LEDGER", "RECONCILIATION"],
    summary:
      "Advanced financial tracking system for secure cheque management with clearance triggers, multi-account verification, and ledger audit logs eliminating commercial settlement risks.",
    image: "/images/ChequeTrackerLogo.png",
    imageFit: "contain",
    imageBg: "bg-white",
    paddingClass: "p-6 sm:p-8",
    link: "https://chequetrackerr.netlify.app/",
    stat1: { label: "100%", sub: "CLEARING ACCURACY" },
    stat2: { label: "Zero", sub: "MISSED RECONCILIATIONS" },
    actionText: "View Live",
  },
  {
    id: "nexus-game",
    orderNumber: "06",
    badge: "INTERACTIVE GAMING PLATFORM",
    title: "Nexus: Brain Play Arena & Tournament Hub",
    categoryTags: ["WEB APP", "REAL-TIME SYNC", "REACT & NODE"],
    summary:
      "Multiplayer intellectual gaming and competitive tournament platform featuring live lobby matchmaking, real-time score arbitration, and high-frequency state synchronization.",
    image: "/images/logo.jpg",
    imageFit: "cover",
    imageBg: "bg-[#0B0F14]",
    paddingClass: "p-0",
    link: "https://github.com/ashishshrestha007",
    stat1: { label: "Sub-150ms", sub: "STATE UPDATES" },
    stat2: { label: "Multiplayer", sub: "LOBBY ENGINE" },
    actionText: "Explore Project",
  },
  {
    id: "rosa-parlour",
    orderNumber: "07",
    badge: "BEAUTY SERVICES PORTAL",
    title: "Rosa Beauty Parlour Booking System",
    categoryTags: ["WEB APP", "REAL-TIME SCHEDULING", "TAILWIND CSS"],
    summary:
      "Elegant digital reservation portal with dynamic slot availability, service catalog selection, automated confirmation triggers, and high-converting customer booking flows.",
    image: "/images/Rosa Beauty Parlour.png",
    imageFit: "cover",
    imageBg: "bg-[#0B0F14]",
    paddingClass: "p-0",
    link: "https://rosaparlour.netlify.app/",
    stat1: { label: "+65%", sub: "DIRECT BOOKINGS" },
    stat2: { label: "Zero", sub: "DOUBLE BOOKINGS" },
    actionText: "View Live",
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-3 border-b border-[#223142] pb-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8B9CAE]">
              <Sparkle size={14} className="text-[#E6212A]" weight="fill" />
              <span>Production Systems &amp; Software</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-5xl">
                Featured Engineering Projects
              </h2>
              <span className="font-mono text-xs text-[#8B9CAE] border border-[#223142] bg-[#121A24] px-3 py-1.5 self-start sm:self-auto">
                {projects.length} Shipped Deliverables
              </span>
            </div>
          </div>

          {/* 3-Column Grid with Progressive Scroll Reveal */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => {
              const isHovered = hoveredId === project.id;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{
                    duration: 0.75,
                    delay: (idx % 3) * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative flex flex-col justify-between border bg-[#121A24] transform-gpu will-change-transform transition-all duration-300 ${
                    isHovered
                      ? "border-[#E6212A] shadow-[0_16px_40px_rgba(230,33,42,0.25)] -translate-y-2"
                      : "border-[#223142] hover:border-[#384B60]"
                  }`}
                  style={{ borderRadius: "0px" }}
                >
                  <div>
                    {/* Top Logo Banner Box: Pure White so logos are 100% crisp & vibrant */}
                    <div
                      className={`relative flex h-64 w-full items-center justify-center border-b border-[#223142] overflow-hidden ${
                        project.imageBg || "bg-white"
                      } ${project.paddingClass || "p-6 sm:p-8"}`}
                      style={{ borderRadius: "0px" }}
                    >
                      {/* Top-Left Solid Black Badge */}
                      <div className="absolute left-3 top-3 z-10">
                        <span
                          className="bg-black px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm inline-block"
                          style={{ borderRadius: "0px" }}
                        >
                          {project.badge}
                        </span>
                      </div>

                      {/* Top-Right Quick Link Icon Button */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center bg-[#0B0F14]/90 text-[#F0F4F8] border border-[#223142] transition-all hover:bg-[#E6212A] hover:border-[#E6212A] hover:text-white"
                        style={{ borderRadius: "0px" }}
                        title="Open Live Website"
                      >
                        <ArrowUpRight size={14} weight="bold" />
                      </a>

                      {/* Prominent High-Visibility Logo Image */}
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={`${
                            project.imageFit === "cover"
                              ? "object-cover"
                              : "object-contain"
                          } transition-transform duration-500 ease-out group-hover:scale-105`}
                        />
                      </div>
                    </div>

                    {/* Content Body: Sleek Dark Blue/Slate Industrial Theme (#121A24) */}
                    <div className="flex flex-col gap-4 p-6 sm:p-7 bg-[#121A24]">
                      {/* Category Tags: Dark slate pills with border */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.categoryTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="border border-[#223142] bg-[#0B0F14] px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-[#8B9CAE]"
                            style={{ borderRadius: "0px" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title: Titanium White (#F0F4F8) with Red Accent on hover */}
                      <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#F0F4F8] transition-colors group-hover:text-white leading-snug">
                        {project.title}
                      </h3>

                      {/* Description: Technical Slate Gray */}
                      <p className="text-xs sm:text-sm leading-relaxed text-[#8B9CAE]">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Stats & Launch CTA: Dark Slate (#0B0F14) */}
                  <div
                    className="mt-auto border-t border-[#223142] bg-[#0B0F14] px-6 py-4 flex items-center justify-between gap-3"
                    style={{ borderRadius: "0px" }}
                  >
                    {/* Left Key Metrics */}
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="font-heading text-xs sm:text-sm font-bold text-[#F0F4F8]">
                          {project.stat1.label}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B9CAE]">
                          {project.stat1.sub}
                        </span>
                      </div>

                      <div className="flex flex-col border-l border-[#223142] pl-4">
                        <span className="font-heading text-xs sm:text-sm font-bold text-[#F0F4F8]">
                          {project.stat2.label}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B9CAE]">
                          {project.stat2.sub}
                        </span>
                      </div>
                    </div>

                    {/* Right Button CTA */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[#223142] bg-[#121A24] px-4 py-2 font-heading text-xs font-bold text-[#F0F4F8] transition-all hover:bg-[#E6212A] hover:border-[#E6212A] hover:text-white shrink-0"
                      style={{ borderRadius: "0px" }}
                    >
                      <span>{project.actionText}</span>
                      <ArrowUpRight size={13} weight="bold" />
                    </a>
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
