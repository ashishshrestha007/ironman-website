export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01: Oval X Cloud RMS",
    quote: "100% built from scratch with real-time WebSockets, automated billing, and live kitchen dispatch.",
    speaker: "Ashish Shrestha",
    film: "SOLO ARCHITECTED SYSTEM",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02: xSis AI ERP & POS",
    quote: "Co-engineered commercial billing and inventory ERP engines delivering sub-100ms receipt generation.",
    speaker: "Ashish Shrestha",
    film: "COMMERCIAL FINTECH & ERP",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03: AI-Accelerated Velocity",
    quote: "Supercharging software delivery through intelligent code scaffolding, automated testing, and clean architecture.",
    speaker: "Ashish Shrestha",
    film: "HIGH-VELOCITY DEV WORKFLOWS",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
