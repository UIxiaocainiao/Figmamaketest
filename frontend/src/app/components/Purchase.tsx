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
        <h1 className="text-6xl font-heading tracking-tight uppercase text-black leading-none animate-slide-up" style={{ fontWeight: 400 }}>
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
          <h3 className="text-black/60 text-xs figma-mono-label mb-2 uppercase">MONTHLY TOTAL</h3>
          <p className="text-4xl font-heading text-black" style={{ fontWeight: 540 }}>¥456,789</p>
          <p className="text-xs font-mono text-black mt-3" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>↑ 8.2% MOM</p>
        </div>
        <div className="figma-card p-6">
          <h3 className="text-black/60 text-xs figma-mono-label mb-2 uppercase">PENDING ORDERS</h3>
          <p className="text-4xl font-heading text-black" style={{ fontWeight: 540 }}>12</p>
          <p className="text-xs font-mono text-black/60 mt-3">AWAITING APPROVAL</p>
        </div>
        <div className="figma-card p-6">
          <h3 className="text-black/60 text-xs figma-mono-label mb-2 uppercase">AVG DELIVERY</h3>
          <p className="text-4xl font-heading text-black" style={{ fontWeight: 540 }}>5.2 DAYS</p>
          <p className="text-xs font-mono text-black mt-3" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>↓ 0.8 DAYS</p>
        </div>
      </div>

      {/* Purchase Orders Table */}
      <div className="border border-black/10 rounded-md">
        <div className="p-6 border-b border-black/10">
          <h2 className="text-xl figma-mono-label uppercase text-black">PURCHASE ORDERS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-black/10">
              <tr>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">ORDER ID</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">DATE</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">SUPPLIER</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">ITEMS</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">AMOUNT</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">STATUS</th>
                <th className="px-6 py-4 text-left text-xs figma-mono-label text-black uppercase">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="border-b border-black/10 table-row-hover">
                  <td className="px-6 py-4 text-sm font-mono text-black font-medium">{purchase.id}</td>
                  <td className="px-6 py-4 text-sm font-mono text-black/60">{purchase.date}</td>
                  <td className="px-6 py-4 text-sm text-black" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{purchase.supplier}</td>
                  <td className="px-6 py-4 text-sm font-mono text-black/60">{purchase.items} ITEMS</td>
                  <td className="px-6 py-4 text-sm font-mono text-black font-semibold">{purchase.total}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono tracking-[1.2px] text-black/60 uppercase">
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-black hover:bg-black/10 rounded-md transition-colors">
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
