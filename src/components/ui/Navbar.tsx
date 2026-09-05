"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "experience", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#testimonials", label: "Reviews", id: "testimonials" },
    { href: "#certifications", label: "Credentials", id: "certifications" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-[#223142] bg-[#0B0F14]/90 backdrop-blur-md py-3 shadow-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Identity & Location */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-sm font-semibold tracking-tight text-[#F0F4F8] transition-opacity hover:opacity-90"
        >
          <span className="h-2 w-2 rounded-full bg-[#E6212A]" aria-hidden="true" />
          <span>Ashish Shrestha</span>
          <span className="hidden text-xs font-normal text-[#8B9CAE] sm:inline font-mono">
            [Kathmandu, NP]
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-[#182230] text-[#F0F4F8] border border-[#223142]"
                    : "text-[#8B9CAE] hover:bg-[#121A24] hover:text-[#F0F4F8]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            download="Ashish_Shrestha_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded border border-[#223142] bg-[#121A24] px-3 py-1.5 text-xs font-medium text-[#F0F4F8] transition-colors hover:border-[#8B9CAE]/40"
          >
            <DownloadSimple size={14} weight="bold" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="btn-primary py-1.5 px-3.5 text-xs font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}
