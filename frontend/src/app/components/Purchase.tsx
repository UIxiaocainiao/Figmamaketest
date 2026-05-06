import { Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Purchase() {
  const purchases = [
    {
      id: "PO-001",
      date: "2026-04-20",
      supplier: "Supplier A",
      items: 5,
      total: "¥32,500.00",
      status: "COMPLETED",
    },
    {
      id: "PO-002",
      date: "2026-04-21",
      supplier: "Supplier B",
      items: 3,
      total: "¥18,900.00",
      status: "PROCESSING",
    },
    {
      id: "PO-003",
      date: "2026-04-22",
      supplier: "Supplier C",
      items: 8,
      total: "¥56,800.00",
      status: "PENDING",
    },
    {
      id: "PO-004",
      date: "2026-04-19",
      supplier: "Supplier A",
      items: 12,
      total: "¥89,200.00",
      status: "COMPLETED",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-white leading-none animate-slide-up" style={{ fontWeight: 400 }}>
          PURCHASE
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
          <p className="text-4xl font-heading text-white" style={{ fontWeight: 540 }}>¥456,789</p>
          <p className="text-xs font-mono text-white mt-3" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>↑ 8.2% MOM</p>
        </div>
        <div className="figma-card p-6">
          <h3 className="text-[#c4c7c8] text-xs figma-mono-label mb-2 uppercase">PENDING ORDERS</h3>
          <p className="text-4xl font-heading text-white" style={{ fontWeight: 540 }}>12</p>
          <p className="text-xs font-mono text-[#c4c7c8] mt-3">AWAITING APPROVAL</p>
        </div>
        <div className="figma-card p-6">
          <h3 className="text-[#c4c7c8] text-xs figma-mono-label mb-2 uppercase">AVG DELIVERY</h3>
          <p className="text-4xl font-heading text-white" style={{ fontWeight: 540 }}>5.2 DAYS</p>
          <p className="text-xs font-mono text-white mt-3" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>↓ 0.8 DAYS</p>
        </div>
      </div>

      {/* Purchase Orders Table */}
      <div className="figma-card overflow-hidden border border-white/20 rounded-xl">
        <div className="p-6 border-b border-white/20">
          <h2 className="text-xl figma-mono-label uppercase text-white">PURCHASE ORDERS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/20">
              <tr>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">ORDER ID</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">DATE</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">SUPPLIER</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">ITEMS</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">AMOUNT</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">STATUS</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-white uppercase">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="border-b border-white/20 table-row-hover">
                  <td className="px-6 py-4 text-sm font-mono text-white font-medium">{purchase.id}</td>
                  <td className="px-6 py-4 text-sm font-mono text-[#c4c7c8]">{purchase.date}</td>
                  <td className="px-6 py-4 text-sm text-white" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{purchase.supplier}</td>
                  <td className="px-6 py-4 text-sm font-mono text-[#c4c7c8]">{purchase.items} ITEMS</td>
                  <td className="px-6 py-4 text-sm font-mono text-white font-semibold">{purchase.total}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono tracking-[1.2px] text-[#c4c7c8] uppercase">
                      {purchase.status}
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
