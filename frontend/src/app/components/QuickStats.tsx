interface QuickStatsProps {
  label: string;
  value: string | number;
  change?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function QuickStats({ label, value, change, icon: Icon }: QuickStatsProps) {
  return (
    <div className="animate-scale-in rounded-2xl border border-white/20 bg-white/[0.12] p-6 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white/[0.16]">
      <div className="mb-6 flex items-center justify-between">
        <Icon className="size-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
        {change ? (
          <span className="figma-mono-label rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white">
            {change}
          </span>
        ) : null}
      </div>
      <h3 className="figma-mono-label mb-2 text-xs text-[#c4c7c8]">{label}</h3>
      <p
        className="font-heading text-3xl text-white md:text-4xl"
        style={{ fontWeight: 540, letterSpacing: "-0.04em", textShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)" }}
      >
        {value}
      </p>
    </div>
  );
}
