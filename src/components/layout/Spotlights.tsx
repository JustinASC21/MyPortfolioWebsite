export function Spotlights() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[15%] -left-[10%] h-[50%] w-[50%] rounded-full bg-accent/15 blur-[160px]" />
      <div className="absolute -top-[5%] left-[5%] h-[40%] w-[30%] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-[5%] -right-[5%] h-[40%] w-[40%] rounded-full bg-white/60 blur-[100px]" />
      <div className="absolute top-[20%] right-[10%] h-[30%] w-[30%] rounded-full bg-accent-soft/40 blur-[140px]" />
    </div>
  );
}