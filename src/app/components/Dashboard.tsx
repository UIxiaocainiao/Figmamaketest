import { Package, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { QuickStats } from "./QuickStats";

export function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const stats = [
    {
      title: "TOTAL INVENTORY",
      value: "¥1,234,567",
      change: "+12.5%",
      icon: Package,
    },
    {
      title: "MONTHLY PURCHASE",
      value: "¥456,789",
      change: "+8.2%",
      icon: ShoppingCart,
    },
    {
      title: "MONTHLY SALES",
      value: "¥892,345",
      change: "+15.3%",
      icon: TrendingUp,
    },
    {
      title: "STOCK ALERTS",
      value: "23",
      change: "RESTOCK",
      icon: AlertTriangle,
    },
  ];

  const recentOrders = [
    { id: "PO-001", type: "PURCHASE", supplier: "Supplier A", amount: "¥12,500", status: "COMPLETED" },
    { id: "SO-102", type: "SALES", customer: "Customer B", amount: "¥8,900", status: "PROCESSING" },
    { id: "PO-002", type: "PURCHASE", supplier: "Supplier C", amount: "¥25,000", status: "PENDING" },
    { id: "SO-103", type: "SALES", customer: "Customer D", amount: "¥15,600", status: "COMPLETED" },
  ];

  const lowStock = [
    { name: "Product A", sku: "SKU-001", current: 15, minimum: 50, unit: "PCS" },
    { name: "Product B", sku: "SKU-002", current: 8, minimum: 30, unit: "BOX" },
    { name: "Product C", sku: "SKU-003", current: 22, minimum: 100, unit: "PCS" },
  ];

  return (
    <div className={isLoaded ? "animate-fade-in" : "opacity-0"}>
      <h1 className="text-6xl font-heading tracking-tight uppercase text-black mb-12 leading-none animate-slide-up" style={{ fontWeight: 400 }}>
        DASHBOARD
      </h1>

      {/* Stats Grid - Figma Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <QuickStats
            key={stat.title}
            label={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      {order.type} - {order.supplier || order.customer}
                    </p>
                  </div>
                  <div className="text-right flex flex-col gap-2">
                    <p className="font-sans text-sm text-black" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>{order.amount}</p>
                    <span className="figma-mono-label text-xs text-black/60">
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
