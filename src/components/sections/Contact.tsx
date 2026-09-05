"use client";

import React, { useState } from "react";
import { DownloadSimple, Envelope, Phone, MapPin, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { SocialClover } from "@/components/ui/SocialClover";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-dossier overflow-hidden">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          {/* Left Column: Slides from Left into Center */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-[#8B9CAE]">Direct Inquiries</span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F0F4F8] sm:text-4xl">
                Let's Discuss Engineering Roles &amp; Projects
              </h2>
              <p className="text-sm leading-relaxed text-[#8B9CAE]">
                Available for full-time full stack software engineering positions, high-impact consulting, and product architecture.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="flex flex-col divide-y divide-[#223142] border-y border-[#223142]">
              <div className="flex items-center gap-4 py-4">
                <Envelope size={18} className="text-[#E6212A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#8B9CAE]">Email</span>
                  <a
                    href="mailto:ashishshrestha913@gmail.com"
                    className="font-mono text-sm text-[#F0F4F8] hover:text-[#E6212A] transition-colors"
                  >
                    ashishshrestha913@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4">
                <Phone size={18} className="text-[#38BDF8] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#8B9CAE]">Phone / WhatsApp</span>
                  <a
                    href="tel:+9779808629430"
                    className="font-mono text-sm text-[#F0F4F8] hover:text-[#38BDF8] transition-colors"
                  >
                    +977 9808629430
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4">
                <MapPin size={18} className="text-[#8B9CAE] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#8B9CAE]">Location</span>
                  <span className="font-mono text-sm text-[#F0F4F8]">
                    Tahachal, Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="border border-[#223142] bg-[#121A24] p-5 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold text-[#F0F4F8]">
                  Curriculum Vitae
                </span>
                <span className="text-xs text-[#8B9CAE]">
                  Complete career history and technical background
                </span>
              </div>

              <a
                href="/resume.pdf"
                download="Ashish_Shrestha_Resume.pdf"
                className="btn-primary text-xs py-2 px-3.5 shrink-0"
              >
                <DownloadSimple size={14} weight="bold" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Connectivity Clover (Instagram, LinkedIn, GitHub, Discord) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#223142] bg-[#121A24] p-5">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8B9CAE]">Direct Channels</span>
                <span className="font-heading text-base font-bold text-[#F0F4F8]">
                  Connect on Socials
                </span>
                <p className="text-xs text-[#8B9CAE] max-w-[26ch]">
                  GitHub, LinkedIn, Discord &amp; Instagram
                </p>
              </div>

              <div className="self-center sm:self-auto">
                <SocialClover />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Slides from Right into Center */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-[#223142] bg-[#121A24] p-6 sm:p-8"
          >
            <h3 className="font-heading text-lg font-bold text-[#F0F4F8] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#8B9CAE] mb-6">
              Inquiries receive a response within 24 business hours.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle size={36} weight="bold" className="text-[#38BDF8]" />
                <h4 className="font-heading text-base font-bold text-[#F0F4F8]">Message Sent</h4>
                <p className="text-xs text-[#8B9CAE] max-w-[32ch]">
                  Thank you for reaching out. I will review your inquiry and follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#8B9CAE]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="border border-[#223142] bg-[#0B0F14] px-3.5 py-2.5 text-sm text-[#F0F4F8] placeholder-[#4B5D73] outline-none transition-colors focus:border-[#E6212A]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#8B9CAE]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="border border-[#223142] bg-[#0B0F14] px-3.5 py-2.5 text-sm text-[#F0F4F8] placeholder-[#4B5D73] outline-none transition-colors focus:border-[#E6212A]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#8B9CAE]">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Project requirements, role description, or technical specifications..."
                    className="border border-[#223142] bg-[#0B0F14] px-3.5 py-2.5 text-sm text-[#F0F4F8] placeholder-[#4B5D73] outline-none transition-colors focus:border-[#E6212A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider"
                >
                  Transmit Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
