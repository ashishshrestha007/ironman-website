"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { Envelope, Phone, MapPin, ArrowRight } from "@phosphor-icons/react";
import { HudFrame } from "@/components/ui/HudFrame";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      {/* Background HUD elements */}
      <div className="absolute right-0 top-0 h-40 w-40 opacity-5 pointer-events-none">
        <div className="absolute inset-0 border-r border-t border-accent" />
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-accent animate-pulse" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedSection className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <EyebrowBadge>COMMUNICATION // LINK // ENCRYPTED</EyebrowBadge>
              <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
                Let's <span className="text-accent animate-flicker">Connect.</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-zinc-400">
                Initiate a secure transmission. I'm available for **AI-driven** project consultations, 
                full-stack architectural reviews, and innovative technical collaborations.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: Envelope, label: "Transmission ID", value: "ashishshrestha913@gmail.com", href: "mailto:ashishshrestha913@gmail.com" },
                { icon: Phone, label: "Frequency // Call", value: "+977 9808629460", href: "tel:+9779808629460" },
                { icon: MapPin, label: "Coordinates", value: "Tahachal, Kathmandu, Nepal", href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] text-zinc-500 transition-all group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(230,33,42,0.2)]">
                    <item.icon size={26} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-600 group-hover:text-accent/60 transition-colors">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-lg text-foreground hover:text-accent transition-colors tracking-tight">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-sans text-lg text-foreground tracking-tight">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <AnimatedItem className="relative group">
            <div className="relative border border-white/10 bg-white/[0.02] p-8 md:p-12 transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-accent/30 shadow-2xl">
              {/* Form Brackets */}
              <div className="absolute left-0 top-0 text-accent/30 transition-colors group-hover:text-accent">
                <HudFrame corner="tl" size={24} />
              </div>
              <div className="absolute right-0 bottom-0 text-accent/30 transition-colors group-hover:text-accent">
                <HudFrame corner="br" size={24} />
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                    New Transmission Request
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-accent/40 to-transparent" />
                </div>

                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Identity</label>
                    <input 
                      type="text" 
                      className="border-b border-white/10 bg-transparent py-2 font-sans text-foreground outline-none transition-all focus:border-accent focus:pl-2"
                      placeholder="Enter Name..."
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Signal Source</label>
                    <input 
                      type="email" 
                      className="border-b border-white/10 bg-transparent py-2 font-sans text-foreground outline-none transition-all focus:border-accent focus:pl-2"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Message Buffer</label>
                    <textarea 
                      rows={3}
                      className="border-b border-white/10 bg-transparent py-2 font-sans text-foreground outline-none transition-all focus:border-accent focus:pl-2 resize-none"
                      placeholder="Describe the mission objective..."
                    />
                  </div>
                  <button className="group mt-4 relative overflow-hidden bg-accent px-8 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-black transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Initialize Uplink <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1.5" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
                </form>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
