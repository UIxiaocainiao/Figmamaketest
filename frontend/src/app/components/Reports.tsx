import { BarChart3, TrendingUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Reports() {
  const monthlyData = [
    { month: "JAN", purchase: 320000, sales: 450000, profit: 130000 },
    { month: "FEB", purchase: 380000, sales: 520000, profit: 140000 },
    { month: "MAR", purchase: 420000, sales: 680000, profit: 260000 },
    { month: "APR", purchase: 456789, sales: 892345, profit: 435556 },
  ];

  const topProducts = [
    { name: "Laptop Computer", sales: "¥269,955", quantity: 45, growth: "+15%" },
    { name: "27-inch Monitor", sales: "¥189,900", quantity: 100, growth: "+22%" },
    { name: "Mechanical Keyboard", sales: "¥156,222", quantity: 392, growth: "+8%" },
    { name: "Wireless Mouse", sales: "¥89,000", quantity: 1000, growth: "+12%" },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-white leading-none animate-slide-up" style={{ fontWeight: 400 }}>
          REPORTS
        </h1>
        <Button className="figma-pill">
          <Download className="size-4" />
          EXPORT
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-gradient-to-br from-white/20 to-white/8 border border-white/25 rounded-md p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <BarChart3 className="size-8" />
            <TrendingUp className="size-6" />
          </div>
          <h3 className="text-xs figma-mono-label mb-2 uppercase opacity-75">MONTHLY PURCHASE</h3>
          <p className="text-4xl font-heading" style={{ fontWeight: 540 }}>¥456,789</p>
        </div>
        <div className="bg-gradient-to-br from-white/20 to-white/8 border border-white/25 rounded-md p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <BarChart3 className="size-8" />
            <TrendingUp className="size-6" />
          </div>
          <h3 className="text-xs figma-mono-label mb-2 uppercase opacity-75">MONTHLY SALES</h3>
          <p className="text-4xl font-heading" style={{ fontWeight: 540 }}>¥892,345</p>
        </div>
        <div className="bg-gradient-to-br from-white/20 to-white/8 border border-white/25 rounded-md p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <BarChart3 className="size-8" />
            <TrendingUp className="size-6" />
          </div>
          <h3 className="text-xs figma-mono-label mb-2 uppercase opacity-75">GROSS PROFIT</h3>
          <p className="text-4xl font-heading" style={{ fontWeight: 540 }}>¥435,556</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <div className="figma-card overflow-hidden border border-white/20 rounded-xl">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl figma-mono-label uppercase text-white">MONTHLY TREND</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-6">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono font-medium text-white tracking-wider">{data.month}</span>
                    <span className="text-xs font-mono text-[#c4c7c8]">
                      PROFIT: ¥{data.profit.toLocaleString()}
                    </span>
                  </div>
                  <div className="relative h-8 bg-white/10 rounded-full overflow-hidden border border-white/20">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/40 to-white/20"
                      style={{ width: `${(data.sales / 1000000) * 100}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <span className="text-xs font-mono text-[#c4c7c8]">
                        P: ¥{(data.purchase / 1000).toFixed(0)}K
                      </span>
                      <span className="text-xs font-mono text-white font-medium">
                        S: ¥{(data.sales / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="figma-card overflow-hidden border border-white/20 rounded-xl">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl figma-mono-label uppercase text-white">TOP PRODUCTS</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4 p-4 border border-white/20 rounded-md">
                  <div className="flex-shrink-0 size-8 bg-white text-[#2f3131] rounded-full flex items-center justify-center font-mono font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{product.name}</p>
                    <p className="text-xs font-mono text-[#c4c7c8] mt-1">QTY: {product.quantity} PCS</p>
                  </div>
                  <div className="text-right flex flex-col gap-1">
                    <p className="font-mono text-sm text-white font-semibold">{product.sales}</p>
                    <span className="text-xs font-mono text-white">{product.growth}</span>
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
