export function TechChip({ label }: { label: string }) {
  return (
    <span className="font-mono-display rounded-full border border-border bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground/70">
      {label}
    </span>
  );
}