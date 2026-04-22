interface QuickStatsProps {
  label: string;
  value: string | number;
  change?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function QuickStats({ label, value, change, icon: Icon }: QuickStatsProps) {
  return (
    <div className="starbucks-card p-6 animate-scale-in">
      <div className="flex items-center justify-between mb-6">
        <Icon className="size-6 text-[#00754A]" />
        {change && (
          <span className="starbucks-mono-label text-xs text-[#00754A]">{change}</span>
        )}
      </div>
      <h3 className="starbucks-mono-label text-xs text-black/60 mb-2">
        {label}
      </h3>
      <p className="text-3xl font-heading text-black" style={{ fontWeight: 540, letterSpacing: '-0.16px' }}>{value}</p>
    </div>
  );
}
