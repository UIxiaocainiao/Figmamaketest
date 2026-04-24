import { Plus, Phone, Mail, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Suppliers() {
  const suppliers = [
    {
      id: 1,
      name: "SUPPLIER A",
      contact: "Zhang Wei",
      phone: "138-0000-0001",
      email: "zhang@supplier-a.com",
      address: "123 Tech Park, Beijing, Chaoyang District",
      products: 15,
      totalPurchase: "¥325,600",
    },
    {
      id: 2,
      name: "SUPPLIER B",
      contact: "Li Na",
      phone: "139-0000-0002",
      email: "li@supplier-b.com",
      address: "456 Business St, Shanghai, Pudong New Area",
      products: 8,
      totalPurchase: "¥189,400",
    },
    {
      id: 3,
      name: "SUPPLIER C",
      contact: "Wang Ming",
      phone: "136-0000-0003",
      email: "wang@supplier-c.com",
      address: "789 Industry Ave, Guangzhou, Tianhe District",
      products: 22,
      totalPurchase: "¥568,900",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-black leading-none animate-slide-up" style={{ fontWeight: 400 }}>
          SUPPLIERS
        </h1>
        <Button className="figma-pill">
          <Plus className="size-4" />
          ADD SUPPLIER
        </Button>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="figma-card p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-heading text-black tracking-tight mb-2" style={{ fontWeight: 540 }}>{supplier.name}</h3>
                <p className="text-xs font-mono text-black/60 tracking-wider">CONTACT: {supplier.contact}</p>
              </div>
              <button className="p-2 text-black hover:bg-black/10 rounded-md transition-colors">
                <Edit className="size-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-black/60">
                <Phone className="size-4" />
                <span className="font-mono">{supplier.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-black/60">
                <Mail className="size-4" />
                <span className="font-mono">{supplier.email}</span>
              </div>
              <div className="text-sm">
                <p className="font-mono text-xs text-black mb-1 tracking-wider uppercase">Address:</p>
                <p className="text-black/60" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{supplier.address}</p>
              </div>
            </div>

            <div className="border-t border-black/10 pt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-mono text-black/60 mb-1 tracking-[1.2px] uppercase">Products</p>
                <p className="text-lg font-heading text-black" style={{ fontWeight: 540 }}>{supplier.products} TYPES</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-black/60 mb-1 tracking-[1.2px] uppercase">Total Purchase</p>
                <p className="text-lg font-heading text-black" style={{ fontWeight: 540 }}>{supplier.totalPurchase}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
