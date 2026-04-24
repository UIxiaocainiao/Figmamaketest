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
    <div className={isLoaded ? "animate-fade-in" : "opacity-0"}>
      <h1 className="text-6xl font-heading tracking-tight uppercase text-black mb-12 leading-none animate-slide-up" style={{ fontWeight: 400 }}>
        DASHBOARD
      </h1>

      {/* Stats Grid - Figma Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {isDashboardLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="figma-card p-6 animate-pulse">
                <div className="h-6 w-6 rounded bg-black/10 mb-6" />
                <div className="h-3 w-24 rounded bg-black/10 mb-3" />
                <div className="h-8 w-32 rounded bg-black/10" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-black/10 rounded-lg bg-white figma-card lg:col-span-2">
          <div className="p-6 border-b border-black/10 flex items-center justify-between gap-4">
            <h2 className="figma-mono-label text-lg text-black">SYSTEM STATUS</h2>
            <span className="figma-mono-label text-xs text-black/60">
              {isHealthLoading ? "CHECKING BACKEND" : "LIVE CONNECTION"}
            </span>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-black/10 rounded-md">
              <p className="figma-mono-label text-xs text-black/60 mb-2">BACKEND</p>
              <p className="font-sans text-sm text-black" style={{ fontWeight: 540, letterSpacing: "-0.14px" }}>
                {isHealthLoading ? "CHECKING" : healthError ? "OFFLINE" : "ONLINE"}
              </p>
            </div>
            <div className="p-4 border border-black/10 rounded-md">
              <p className="figma-mono-label text-xs text-black/60 mb-2">DATABASE CONFIG</p>
              <p className="font-sans text-sm text-black" style={{ fontWeight: 540, letterSpacing: "-0.14px" }}>
                {backendHealth?.databaseConfigured ? "CONFIGURED" : "NOT CONFIGURED"}
              </p>
            </div>
            <div className="p-4 border border-black/10 rounded-md">
              <p className="figma-mono-label text-xs text-black/60 mb-2">LAST RESPONSE</p>
              <p className="font-sans text-sm text-black" style={{ fontWeight: 540, letterSpacing: "-0.14px" }}>
                {backendHealth ? new Date(backendHealth.timestamp).toLocaleString() : "NO DATA"}
              </p>
            </div>
          </div>
          {healthError ? (
            <div className="px-6 pb-6">
              <div className="p-4 border border-black/20 rounded-md">
                <p className="figma-mono-label text-xs text-black/60 mb-2">ERROR</p>
                <p className="text-sm text-black/70" style={{ fontWeight: 330, letterSpacing: "-0.1px" }}>
                  {healthError}
                </p>
              </div>
            </div>
          ) : null}
          {dashboardError ? (
            <div className="px-6 pb-6">
              <div className="p-4 border border-black/20 rounded-md">
                <p className="figma-mono-label text-xs text-black/60 mb-2">DASHBOARD DATA</p>
                <p className="text-sm text-black/70" style={{ fontWeight: 330, letterSpacing: "-0.1px" }}>
                  {dashboardError}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Recent Orders */}
        <div className="border border-black/10 rounded-lg bg-white figma-card">
          <div className="p-6 border-b border-black/10">
            <h2 className="figma-mono-label text-lg text-black">RECENT ORDERS</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border border-black/10 rounded-md table-row-hover">
                  <div>
                    <p className="font-mono text-sm text-black" style={{ fontWeight: 400 }}>{order.id}</p>
                    <p className="text-xs font-sans text-black/60 mt-1" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>
                      {order.type} - {order.counterparty}
                    </p>
                  </div>
                  <div className="text-right flex flex-col gap-2">
                    <p className="font-sans text-sm text-black" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>{formatCurrency(order.amount)}</p>
                    <span className="figma-mono-label text-xs text-black/60">
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
              {!isDashboardLoading && recentOrders.length === 0 ? (
                <div className="p-4 border border-dashed border-black/10 rounded-md">
                  <p className="figma-mono-label text-xs text-black/60">NO ORDERS AVAILABLE</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="border border-black/10 rounded-lg bg-white figma-card">
          <div className="p-6 border-b border-black/10">
            <h2 className="figma-mono-label text-lg text-black">STOCK ALERTS</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {lowStock.map((item) => (
                <div key={item.sku} className="p-4 border border-black/20 rounded-md table-row-hover">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-sans text-sm text-black" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>{item.name}</p>
                      <p className="text-xs font-mono text-black/60 mt-1" style={{ fontWeight: 400 }}>{item.sku}</p>
                    </div>
                    <AlertTriangle className="size-5 text-black" />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>
                    <span className="text-black/60">CURRENT:</span>
                    <span className="text-black" style={{ fontWeight: 540 }}>{item.current} {item.unit}</span>
                    <span className="text-black/60">|</span>
                    <span className="text-black/60">MIN:</span>
                    <span className="text-black" style={{ fontWeight: 540 }}>{item.minimum} {item.unit}</span>
                  </div>
                </div>
              ))}
              {!isDashboardLoading && lowStock.length === 0 ? (
                <div className="p-4 border border-dashed border-black/10 rounded-md">
                  <p className="figma-mono-label text-xs text-black/60">NO STOCK ALERTS</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
