import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashishshrestha.com.np"),
  title: "Ashish Shrestha | AI-Augmented Full Stack Engineer",
  description:
    "Portfolio of Ashish Shrestha, a Full Stack and AI Engineer based in Kathmandu, Nepal. Architect of Oval X Cloud RMS, Co-developer of xSis, building production systems with Python, Django, Next.js, and AI automation.",
  keywords: [
    "Ashish Shrestha",
    "Full Stack Engineer",
    "AI Engineer",
    "Django Developer",
    "Next.js Developer",
    "Nepal",
    "Kathmandu",
    "Oval X RMS",
    "xSis",
  ],
  authors: [{ name: "Ashish Shrestha", url: "https://ashishshrestha.com.np" }],
  creator: "Ashish Shrestha",
  publisher: "Ashish Shrestha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashishshrestha.com.np",
    siteName: "Ashish Shrestha Portfolio",
    title: "Ashish Shrestha | AI-Augmented Full Stack Engineer",
    description:
      "Full Stack and AI Engineer based in Kathmandu, Nepal. Explore production systems: Oval X Cloud RMS, xSis ERP, and modern web architectures.",
    images: [
      {
        url: "/images/ashish.png",
        width: 1200,
        height: 630,
        alt: "Ashish Shrestha | AI-Augmented Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Shrestha | AI-Augmented Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in Python, Django, React, Next.js, and AI-accelerated workflows.",
    images: ["/images/ashish.png"],
    creator: "@ashishshrestha007",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


import { AIAssistant } from "@/components/ui/AIAssistant";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashish Shrestha",
    jobTitle: "AI-Augmented Full Stack Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal",
    },
    url: "https://ashishshrestha.net",
    sameAs: [
      "https://github.com/ashishshrestha007",
    ],
    knowsAbout: [
      "Python",
      "Django",
      "React",
      "Next.js",
      "TypeScript",
      "AI Prompt Engineering",
      "Full Stack Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full bg-background text-foreground grain overflow-x-hidden">
        <AIAssistant />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        
        {/* Permanent Dev Overlay Killer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const killDevOverlay = () => {
                const selectors = ['nextjs-portal', '#next-dev-indicator', '[data-nextjs-portal]'];
                selectors.forEach(s => {
                  document.querySelectorAll(s).forEach(n => n.remove());
                });
                const portal = document.querySelector('nextjs-portal');
                if (portal && portal.shadowRoot) {
                  portal.remove();
                }
              };
              killDevOverlay();
              const observer = new MutationObserver(killDevOverlay);
              observer.observe(document.documentElement, { childList: true, subtree: true });
              setInterval(killDevOverlay, 1000);
            `,
          }}
        />
      </body>
    </html>
  );
}


