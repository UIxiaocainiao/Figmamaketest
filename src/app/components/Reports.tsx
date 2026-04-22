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
        <h1 className="text-6xl font-heading tracking-tight uppercase text-black leading-none animate-slide-up" style={{ fontWeight: 400 }}>REPORTS</h1>
        <Button className="starbucks-pill"><Download className="size-4" />EXPORT</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[{ label: "MONTHLY PURCHASE", value: "¥456,789" }, { label: "MONTHLY SALES", value: "¥892,345" }, { label: "GROSS PROFIT", value: "¥435,556" }].map((c) => (
          <div key={c.label} className="bg-gradient-to-br from-[#00754A] to-[#006241] rounded-xl p-8 text-white">
            <div className="flex items-center justify-between mb-6"><BarChart3 className="size-8" /><TrendingUp className="size-6" /></div>
            <h3 className="text-xs starbucks-mono-label mb-2 opacity-75">{c.label}</h3>
            <p className="text-4xl font-heading" style={{ fontWeight: 540 }}>{c.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="starbucks-card">
          <div className="p-6 border-b border-black/10"><h2 className="text-xl starbucks-mono-label uppercase text-black">MONTHLY TREND</h2></div>
          <div className="p-6"><div className="flex flex-col gap-6">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-mono font-medium text-black tracking-wider">{data.month}</span>
                  <span className="text-xs font-mono text-[#00754A]">PROFIT: ¥{data.profit.toLocaleString()}</span>
                </div>
                <div className="relative h-8 bg-black/5 rounded-full overflow-hidden border border-black/10">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00754A] to-[#d4e9e2]" style={{ width: `${(data.sales / 1000000) * 100}%` }}></div>
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <span className="text-xs font-mono text-black/60">P: ¥{(data.purchase / 1000).toFixed(0)}K</span>
                    <span className="text-xs font-mono text-black font-medium">S: ¥{(data.sales / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>
            ))}
          </div></div>
        </div>

        <div className="starbucks-card">
          <div className="p-6 border-b border-black/10"><h2 className="text-xl starbucks-mono-label uppercase text-black">TOP PRODUCTS</h2></div>
          <div className="p-6"><div className="flex flex-col gap-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-4 p-4 border border-black/10 rounded-md">
                <div className="flex-shrink-0 size-8 bg-[#00754A] text-white rounded-full flex items-center justify-center font-mono font-bold text-sm">{index + 1}</div>
                <div className="flex-1">
                  <p className="font-medium text-black" style={{ letterSpacing: '-0.16px', fontWeight: 400 }}>{product.name}</p>
                  <p className="text-xs font-mono text-black/60 mt-1">QTY: {product.quantity} PCS</p>
                </div>
                <div className="text-right flex flex-col gap-1">
                  <p className="font-mono text-sm text-black font-semibold">{product.sales}</p>
                  <span className="text-xs font-mono text-[#00754A]">{product.growth}</span>
                </div>
              </div>
            ))}
          </div></div>
        </div>
      </div>
    </div>
  );
}
