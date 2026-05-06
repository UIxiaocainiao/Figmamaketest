import { Package, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { QuickStats } from "./QuickStats";
import { useBackendHealth } from "@/hooks/useBackendHealth";
import { useDashboardData } from "@/hooks/useDashboardData";
import type { DashboardStat } from "@/lib/api";

const statIcons: Record<DashboardStat["type"], typeof Package> = {
  inventory: Package,
  purchase: ShoppingCart,
  sales: TrendingUp,
  alerts: AlertTriangle,
};

const glassCard =
  "rounded-2xl border border-white/20 bg-white/[0.12] backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]";

const glassCardElevated =
  "rounded-3xl border border-white/20 bg-white/[0.18] backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.16)]";

const glassInset = "rounded-xl border border-white/15 bg-white/[0.08] p-4";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(value);
}

export function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: backendHealth, isLoading: isHealthLoading, error: healthError } = useBackendHealth();
  const { data: dashboardData, isLoading: isDashboardLoading, error: dashboardError } = useDashboardData();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = dashboardData?.stats ?? [];
  const recentOrders = dashboardData?.recentOrders ?? [];
  const lowStock = dashboardData?.lowStock ?? [];

  return (
    <div className={isLoaded ? "animate-fade-in text-white" : "opacity-0"}>
      <h1
        className="mb-10 text-5xl font-heading uppercase leading-none tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] md:text-6xl"
        style={{ fontWeight: 600, letterSpacing: "-0.04em" }}
      >
        DASHBOARD
      </h1>

      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {isDashboardLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={`${glassCard} animate-pulse p-6`}>
                <div className="mb-6 h-6 w-6 rounded bg-white/20" />
                <div className="mb-3 h-3 w-24 rounded bg-white/20" />
                <div className="h-8 w-32 rounded bg-white/20" />
              </div>
            ))
          : stats.map((stat) => (
              <QuickStats
                key={stat.title}
                label={stat.title}
                value={stat.type === "alerts" ? stat.value : formatCurrency(stat.value)}
                change={stat.change}
                icon={statIcons[stat.type]}
              />
            ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className={`${glassCardElevated} lg:col-span-2`}>
          <div className="flex items-center justify-between gap-4 border-b border-white/20 p-6">
            <h2 className="figma-mono-label text-lg text-white">SYSTEM STATUS</h2>
            <span className="figma-mono-label text-xs text-[#c4c7c8]">
              {isHealthLoading ? "CHECKING BACKEND" : "LIVE CONNECTION"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
            <div className={glassInset}>
              <p className="figma-mono-label mb-2 text-xs text-[#c4c7c8]">BACKEND</p>
              <p className="text-sm text-white" style={{ fontWeight: 540, letterSpacing: "-0.14px" }}>
                {isHealthLoading ? "CHECKING" : healthError ? "OFFLINE" : "ONLINE"}
              </p>
            </div>
            <div className={glassInset}>
              <p className="figma-mono-label mb-2 text-xs text-[#c4c7c8]">DATABASE CONFIG</p>
              <p className="text-sm text-white" style={{ fontWeight: 540, letterSpacing: "-0.14px" }}>
                {backendHealth?.databaseConfigured ? "CONFIGURED" : "NOT CONFIGURED"}
              </p>
            </div>
            <div className={glassInset}>
              <p className="figma-mono-label mb-2 text-xs text-[#c4c7c8]">LAST RESPONSE</p>
              <p className="text-sm text-white" style={{ fontWeight: 540, letterSpacing: "-0.14px" }}>
                {backendHealth ? new Date(backendHealth.timestamp).toLocaleString() : "NO DATA"}
              </p>
            </div>
          </div>

          {healthError ? (
            <div className="px-6 pb-6">
              <div className="rounded-xl border border-[#ffb4ab]/40 bg-[#93000a]/20 p-4">
                <p className="figma-mono-label mb-2 text-xs text-[#ffd8d3]">ERROR</p>
                <p className="text-sm text-[#ffdad6]" style={{ fontWeight: 330, letterSpacing: "-0.1px" }}>
                  {healthError}
                </p>
              </div>
            </div>
          ) : null}

          {dashboardError ? (
            <div className="px-6 pb-6">
              <div className="rounded-xl border border-[#ffb4ab]/40 bg-[#93000a]/20 p-4">
                <p className="figma-mono-label mb-2 text-xs text-[#ffd8d3]">DASHBOARD DATA</p>
                <p className="text-sm text-[#ffdad6]" style={{ fontWeight: 330, letterSpacing: "-0.1px" }}>
                  {dashboardError}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className={`${glassCard} overflow-hidden`}>
          <div className="border-b border-white/20 p-6">
            <h2 className="figma-mono-label text-lg text-white">RECENT ORDERS</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10"
                >
                  <div>
                    <p className="font-mono text-sm text-white" style={{ fontWeight: 400 }}>
                      {order.id}
                    </p>
                    <p className="mt-1 text-xs font-sans text-[#c4c7c8]" style={{ fontWeight: 330, letterSpacing: "-0.1px" }}>
                      {order.type} - {order.counterparty}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    <p className="text-sm font-sans text-white" style={{ fontWeight: 480, letterSpacing: "-0.14px" }}>
                      {formatCurrency(order.amount)}
                    </p>
                    <span className="figma-mono-label text-xs text-[#c4c7c8]">{order.status}</span>
                  </div>
                </div>
              ))}

              {!isDashboardLoading && recentOrders.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/25 bg-white/[0.04] p-4">
                  <p className="figma-mono-label text-xs text-[#c4c7c8]">NO ORDERS AVAILABLE</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className={`${glassCard} overflow-hidden`}>
          <div className="border-b border-white/20 p-6">
            <h2 className="figma-mono-label text-lg text-white">STOCK ALERTS</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {lowStock.map((item) => (
                <div key={item.sku} className="rounded-xl border border-white/20 bg-white/[0.07] p-4 transition-all duration-200 hover:bg-white/10">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-sans text-white" style={{ fontWeight: 480, letterSpacing: "-0.14px" }}>
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-mono text-[#c4c7c8]" style={{ fontWeight: 400 }}>
                        {item.sku}
                      </p>
                    </div>
                    <AlertTriangle className="size-5 text-[#ffb4ab]" />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans" style={{ fontWeight: 330, letterSpacing: "-0.1px" }}>
                    <span className="text-[#c4c7c8]">CURRENT:</span>
                    <span className="text-white" style={{ fontWeight: 540 }}>
                      {item.current} {item.unit}
                    </span>
                    <span className="text-[#c4c7c8]">|</span>
                    <span className="text-[#c4c7c8]">MIN:</span>
                    <span className="text-white" style={{ fontWeight: 540 }}>
                      {item.minimum} {item.unit}
                    </span>
                  </div>
                </div>
              ))}

              {!isDashboardLoading && lowStock.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/25 bg-white/[0.04] p-4">
                  <p className="figma-mono-label text-xs text-[#c4c7c8]">NO STOCK ALERTS</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
