"use client";

import React from "react";
import { Star, CheckCircle, ChatCircleText, UserCheck, ShieldCheck } from "@phosphor-icons/react";
import { motion } from "framer-motion";

// Featured Leadership (Biren on Left, Roshani on Right)
interface LeaderItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  badge: string;
  image?: string;
  imageFit?: "cover" | "contain";
  initials: string;
  quote: string;
  rating: number;
}

const leadershipTestimonials: LeaderItem[] = [
  {
    id: "biren",
    name: "Biren Maharjan",
    role: "Managing Director (MD)",
    organization: "IT Stationery Pvt. Ltd.",
    badge: "MANAGING DIRECTOR // IT STATIONERY PVT. LTD.",
    initials: "BM",
    quote:
      "Ashish engineered our enterprise IT equipment sourcing platform with remarkable speed and precision. The automated quotation workflow and sub-second catalog search helped us streamline corporate client inquiries significantly. Exceptional technical caliber.",
    rating: 5,
  },
  {
    id: "roshani",
    name: "Roshani Maharjan",
    role: "Owner & Lead Stylist",
    organization: "Rosa Beauty Parlour",
    badge: "BUSINESS OWNER // SCHEDULING SYSTEM",
    initials: "RM",
    quote:
      "The custom appointment scheduling system Ashish built eliminated double-bookings completely. Our clients love how simple and fast it is to reserve slots on mobile. His attention to design aesthetics and functional reliability was outstanding.",
    rating: 5,
  },
];

// Accounting & Audit Professionals (Cheque Tracker / CheqMate)
interface AccountingUserItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  initials: string;
  highlight: string;
  quote: string;
  rating: number;
}

const accountingUsers: AccountingUserItem[] = [
  {
    id: "mani",
    name: "Mani Maharjan",
    role: "Auditor and Accountant",
    organization: "Cheque Tracker (CheqMate)",
    initials: "MM",
    highlight: "Daily Ledger Integrity",
    quote:
      "Managing dozens of commercial party cheques manually was a constant headache. With Ashish's software, tracking issued and received cheques is effortless. The user interface is straightforward and extremely dependable.",
    rating: 5,
  },
  {
    id: "roma",
    name: "Roma Maharjan",
    role: "Accountant and Auditor",
    organization: "Cheque Tracker (CheqMate)",
    initials: "RM",
    highlight: "Zero Clearance Errors",
    quote:
      "Cheque Tracker completely changed how we monitor pending settlements. The date alert triggers and multi-account ledger keep everything crystal clear. I haven't missed a single bank clearance date since using it.",
    rating: 5,
  },
  {
    id: "nisha",
    name: "Nisha Bhujel",
    role: "Senior Accountant",
    organization: "Cheque Tracker (CheqMate)",
    initials: "NB",
    highlight: "Audit & Record Retrieval",
    quote:
      "Very smooth and fast software. Searching through past cheque records and tracking status across different accounts takes just seconds. It has made our accounting routine completely stress-free.",
    rating: 5,
  },
  {
    id: "alisha",
    name: "Alisha Gurung",
    role: "Accountant",
    organization: "Cheque Tracker (CheqMate)",
    initials: "AG",
    highlight: "Real-time Status Tracking",
    quote:
      "Super clean layout and very easy to navigate. Tracking deposits, clearing dates, and bounce statuses has never been this organized. Ashish built a practical tool that truly solves our day-to-day problems.",
    rating: 5,
  },
  {
    id: "sunita",
    name: "Sunita Tamang",
    role: "Accountant",
    organization: "Cheque Tracker (CheqMate)",
    initials: "ST",
    highlight: "100% Reconciliation Accuracy",
    quote:
      "Accurate, dependable, and lightweight. Everything updates instantly without any lag or clutter. It has become an indispensable daily application for our financial tracking and bank reconciliations.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col gap-16">
          {/* Main Section Header */}
          <div className="flex flex-col gap-3 border-b border-[#223142] pb-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8B9CAE]">
              <ChatCircleText size={14} className="text-[#E6212A]" weight="fill" />
              <span>Client Endorsements &amp; User Proof</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-5xl">
                  Client &amp; User Testimonials
                </h2>
                <p className="text-xs sm:text-sm text-[#8B9CAE] mt-1 max-w-2xl">
                  Direct recommendations from business managing directors, company owners, and active daily accountants.
                </p>
              </div>

              {/* Total Verified Badge */}
              <div className="flex items-center gap-2 border border-[#223142] bg-[#121A24] px-3.5 py-1.5 font-mono text-xs text-[#F0F4F8] self-start sm:self-auto shrink-0">
                <CheckCircle size={14} weight="bold" className="text-[#E6212A]" />
                <span>7 Verified Endorsements</span>
              </div>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* TOP SPOTLIGHT: Biren Maharjan (Left) & Roshani Maharjan (Right)     */}
          {/* ==================================================================== */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8B9CAE]">
              <ShieldCheck size={14} className="text-[#38BDF8]" weight="bold" />
              <span className="uppercase tracking-wider">Business Leadership Endorsements</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {leadershipTestimonials.map((leader, idx) => {
                const isLeft = idx === 0;

                return (
                  <motion.div
                    key={leader.id}
                    initial={{ opacity: 0, x: isLeft ? -45 : 45, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex flex-col border border-[#223142] bg-[#121A24] transition-all duration-300 hover:border-[#E6212A] hover:shadow-[0_16px_40px_rgba(230,33,42,0.2)] transform-gpu"
                    style={{ borderRadius: "0px" }}
                  >
                    {/* TOP: Identity Header (no photo) */}
                    <div className="relative w-full border-b border-[#223142] bg-[#0B0F14] px-6 py-6 flex items-center gap-5">
                      {/* Initials Avatar */}
                      <div className="relative shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center border-2 border-[#E6212A]/40 bg-[#121A24] font-heading font-bold text-2xl text-[#F0F4F8] group-hover:border-[#E6212A] transition-colors duration-300">
                          {leader.initials}
                        </div>
                        {/* Verified dot */}
                        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center bg-[#0B0F14] border border-[#223142]">
                          <UserCheck size={11} weight="bold" className="text-[#38BDF8]" />
                        </div>
                      </div>

                      {/* Name + Role */}
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <p className="font-heading text-lg font-bold text-[#F0F4F8] leading-tight group-hover:text-[#E6212A] transition-colors">
                          {leader.name}
                        </p>
                        <p className="font-mono text-xs text-[#38BDF8] truncate">{leader.role}</p>
                        <p className="font-mono text-[11px] text-[#8B9CAE] truncate">{leader.organization}</p>
                      </div>

                      {/* Stars — top right */}
                      <div className="ml-auto flex items-center gap-0.5 text-[#f59e0b] shrink-0">
                        {[...Array(leader.rating)].map((_, s) => (
                          <Star key={s} size={13} weight="fill" />
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM: Content & Review Details */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div className="flex flex-col gap-3">
                        {/* Badge & Rating */}
                        <div className="flex items-center justify-between gap-2 flex-wrap border-b border-[#223142] pb-3">
                          <span className="bg-black border border-[#223142] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#F0F4F8]">
                            {leader.badge}
                          </span>
                          <div className="flex items-center gap-1 text-[#f59e0b]">
                            {[...Array(leader.rating)].map((_, s) => (
                              <Star key={s} size={13} weight="fill" />
                            ))}
                          </div>
                        </div>

                        {/* Quote */}
                        <p className="text-sm leading-relaxed text-[#D2DCE6] italic">
                          &ldquo;{leader.quote}&rdquo;
                        </p>
                      </div>

                      {/* Role footer */}
                      <div className="mt-5 border-t border-[#223142] pt-4 flex flex-col gap-0.5">
                        <span className="font-heading text-base font-bold text-[#F0F4F8] group-hover:text-[#E6212A] transition-colors">
                          {leader.name}
                        </span>
                        <span className="font-mono text-xs text-[#38BDF8]">
                          {leader.role}
                        </span>
                        <span className="font-mono text-[11px] text-[#8B9CAE]">
                          {leader.organization}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ==================================================================== */}
          {/* BOTTOM SECTION: Cheque Tracker Accountants & Auditors (Centered)     */}
          {/* ==================================================================== */}
          <div className="flex flex-col gap-8 pt-6 border-t border-[#223142]/70">
            {/* Centered Subsection Header */}
            <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
              <span className="border border-[#223142] bg-[#121A24] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#38BDF8]">
                Cheque Tracker (CheqMate) Platform
              </span>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-[#F0F4F8] sm:text-3xl">
                Certified Accountants &amp; Auditors
              </h3>
              <p className="text-xs sm:text-sm text-[#8B9CAE]">
                Finance professionals, auditors, and commercial accountants who rely on CheqMate daily for reconciliation and financial integrity.
              </p>
            </div>

            {/* Centered Animated Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">
              {accountingUsers.map((user, idx) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative flex flex-col justify-between border border-[#223142] bg-[#121A24] p-6 transition-all duration-300 hover:border-[#E6212A] hover:shadow-[0_12px_30px_rgba(230,33,42,0.18)] -translate-y-0 hover:-translate-y-1.5 transform-gpu"
                  style={{ borderRadius: "0px" }}
                >
                  <div className="flex flex-col gap-3.5">
                    {/* Stars + Highlight Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#223142] pb-3">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {[...Array(user.rating)].map((_, s) => (
                          <Star key={s} size={13} weight="fill" />
                        ))}
                      </div>
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-2 py-0.5">
                        {user.highlight}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm leading-relaxed text-[#CBD5E1] italic">
                      &ldquo;{user.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#223142] pt-3.5">
                    {/* Compact Avatar Initials */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#223142] bg-[#0B0F14] font-mono text-xs font-bold text-[#F0F4F8] group-hover:border-[#E6212A] transition-colors">
                      {user.initials}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading text-sm font-bold text-[#F0F4F8] truncate">
                          {user.name}
                        </span>
                        <span title="Verified Accountant" className="inline-flex shrink-0">
                          <UserCheck size={13} weight="bold" className="text-[#38BDF8]" />
                        </span>
                      </div>
                      {/* Exact Designation Requested */}
                      <span className="font-mono text-[11px] font-medium text-[#E6212A] truncate">
                        {user.role}
                      </span>
                      <span className="font-mono text-[10px] text-[#8B9CAE] truncate">
                        {user.organization}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
