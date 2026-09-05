export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "I engineer enterprise systems at 10x velocity using advanced AI developer workflows.",
    speaker: "Ashish Shrestha",
    film: "AI-AUGMENTED FULL STACK",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Owner & Sole Developer of Oval X RMS: cloud architecture engineered to streamline high-volume business.",
    speaker: "Ashish Shrestha",
    film: "FOUNDER & ARCHITECT",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Harnessing Python, Django, Next.js & AI to turn complex business logic into high-throughput software.",
    speaker: "Ashish Shrestha",
    film: "ENTERPRISE ENGINEER",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
