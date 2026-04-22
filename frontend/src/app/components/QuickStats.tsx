interface QuickStatsProps {
  label: string;
  value: string | number;
  change?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function QuickStats({ label, value, change, icon: Icon }: QuickStatsProps) {
  return (
    <div className="figma-card p-6 animate-scale-in">
      <div className="flex items-center justify-between mb-6">
        <Icon className="size-6 text-black" />
        {change && (
          <span className="figma-mono-label text-xs text-black">{change}</span>
        )}
      </div>
      <h3 className="figma-mono-label text-xs text-black/60 mb-2">
        {label}
      </h3>
      <p className="text-3xl font-heading text-black" style={{ fontWeight: 540, letterSpacing: '-0.96px' }}>{value}</p>
    </div>
  );
}
