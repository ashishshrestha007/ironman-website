import React from "react";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[#223142] bg-[#0B0F14] py-12">
      <div className="container-custom flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand & Location */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-heading text-sm font-bold text-[#F0F4F8]">
              <span className="h-2 w-2 rounded-full bg-[#E6212A]" aria-hidden="true" />
              <span>Ashish Shrestha</span>
            </div>
            <p className="font-mono text-xs leading-relaxed text-[#8B9CAE]">
              Full Stack Software Engineer &middot; Tahachal, Kathmandu, Nepal
              <br />
              Direct: ashishshrestha913@gmail.com
            </p>
          </div>

          {/* Project and Profile Links in Exact Sequence */}
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4 font-mono text-xs">
            {[
              { label: "01. Oval X RMS", href: "http://ovalxcloud.com/" },
              { label: "02. xSis ERP POS", href: "https://xsis.megaminds.com.np/" },
              { label: "03. Tapstik Portal", href: "https://tapstik.net/" },
              { label: "04. IT Stationery Pvt. Ltd.", href: "https://itstationary.com.np/" },
              { label: "05. CheqMate", href: "https://chequetrackerr.netlify.app/" },
              { label: "06. Nexus Game", href: "https://github.com/ashishshrestha007" },
              { label: "07. Rosa Parlour", href: "https://rosaparlour.netlify.app/" },
              { label: "Resume (PDF)", href: "/resume.pdf" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[#8B9CAE] hover:text-[#F0F4F8] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-2 border-t border-[#223142]/60 pt-6 font-mono text-[11px] text-[#8B9CAE] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Ashish Shrestha. All rights reserved.</span>
          <span>Engineered for High-Throughput &amp; Reliability</span>
        </div>
      </div>
    </footer>
  );
}
