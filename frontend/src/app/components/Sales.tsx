import { Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sales() {
  const sales = [
    {
      id: "SO-101",
      date: "2026-04-22",
      customer: "Customer A Corp",
      items: 3,
      total: "¥15,600.00",
      status: "SHIPPED",
    },
    {
      id: "SO-102",
      date: "2026-04-21",
      customer: "Customer B Trading",
      items: 5,
      total: "¥28,900.00",
      status: "PENDING",
    },
    {
      id: "SO-103",
      date: "2026-04-20",
      customer: "Customer C Inc",
      items: 2,
      total: "¥12,500.00",
      status: "COMPLETED",
    },
    {
      id: "SO-104",
      date: "2026-04-22",
      customer: "Customer D Group",
      items: 7,
      total: "¥45,200.00",
      status: "PROCESSING",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-white leading-none animate-slide-up" style={{ fontWeight: 400 }}>
          SALES
        </h1>
        <Button className="figma-pill">
          <Plus className="size-4" />
          NEW ORDER
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="figma-card p-6">
          <h3 className="text-[#c4c7c8] text-xs figma-mono-label mb-2 uppercase">MONTHLY TOTAL</h3>
          <p className="text-4xl font-heading text-white" style={{ fontWeight: 540 }}>¥892,345</p>
          <p className="text-xs font-mono text-white mt-3" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>↑ 15.3% MOM</p>
        </div>
        <div className="figma-card p-6">
          <h3 className="text-[#c4c7c8] text-xs figma-mono-label mb-2 uppercase">PENDING ORDERS</h3>
          <p className="text-4xl font-heading text-white" style={{ fontWeight: 540 }}>8</p>
          <p className="text-xs font-mono text-[#c4c7c8] mt-3">AWAITING SHIPMENT</p>
        </div>
        <div className="figma-card p-6">
          <h3 className="text-[#c4c7c8] text-xs figma-mono-label mb-2 uppercase">AVG ORDER VALUE</h3>
          <p className="text-4xl font-heading text-white" style={{ fontWeight: 540 }}>¥22,580</p>
          <p className="text-xs font-mono text-white mt-3" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>↑ 12% MOM</p>
        </div>
      </div>

      {/* Sales Orders Table */}
      <div className="figma-card overflow-hidden border border-white/20 rounded-xl">
        <div className="p-6 border-b border-white/20">
          <h2 className="text-xl figma-mono-label uppercase text-white">SALES ORDERS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/20">
              <tr>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">ORDER ID</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">DATE</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">CUSTOMER</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">ITEMS</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">AMOUNT</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">STATUS</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-white/20 table-row-hover">
                  <td className="px-6 py-4 text-sm font-mono text-white font-medium">{sale.id}</td>
                  <td className="px-6 py-4 text-sm font-mono text-[#c4c7c8]">{sale.date}</td>
                  <td className="px-6 py-4 text-sm text-white" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{sale.customer}</td>
                  <td className="px-6 py-4 text-sm font-mono text-[#c4c7c8]">{sale.items} ITEMS</td>
                  <td className="px-6 py-4 text-sm font-mono text-white font-semibold">{sale.total}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono tracking-[1.2px] text-[#c4c7c8] uppercase">
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-white hover:bg-white/15 rounded-md transition-colors">
                      <Eye className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
