type Props = { children: React.ReactNode; className?: string };

export function EyebrowBadge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3.5 py-1 text-xs font-mono font-medium tracking-wider text-red-400 backdrop-blur-sm ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(230,33,42,0.8)]" />
      {children}
    </span>
  );
}
