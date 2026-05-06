import { useEffect, useState } from "react";
import { Plus, Phone, Mail, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchSuppliersData, type SupplierRecord } from "@/lib/api";

export function Suppliers() {
  const [suppliers, setSuppliers] = useState<SupplierRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchSuppliersData(controller.signal)
      .then((data) => {
        setSuppliers(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((fetchError) => {
        if (controller.signal.aborted) {
          return;
        }

        setSuppliers([]);
        setIsLoading(false);
        setError(fetchError instanceof Error ? fetchError.message : "Failed to load suppliers");
      });

    return () => controller.abort();
  }, []);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-white leading-none animate-slide-up" style={{ fontWeight: 400 }}>
          SUPPLIERS
        </h1>
        <Button className="figma-pill">
          <Plus className="size-4" />
          ADD SUPPLIER
        </Button>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="figma-card p-6 animate-pulse">
                <div className="h-6 w-40 rounded bg-white/15 mb-4" />
                <div className="h-4 w-24 rounded bg-white/15 mb-6" />
                <div className="space-y-3 mb-6">
                  <div className="h-4 rounded bg-white/15" />
                  <div className="h-4 rounded bg-white/15" />
                  <div className="h-12 rounded bg-white/15" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-10 rounded bg-white/15" />
                  <div className="h-10 rounded bg-white/15" />
                </div>
              </div>
            ))
          : suppliers.map((supplier) => (
              <div key={supplier.id} className="figma-card p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-heading text-white tracking-tight mb-2" style={{ fontWeight: 540 }}>{supplier.name}</h3>
                    <p className="text-xs font-mono text-[#c4c7c8] tracking-wider">CONTACT: {supplier.contact}</p>
                  </div>
                  <button className="p-2 text-white hover:bg-white/15 rounded-md transition-colors">
                    <Edit className="size-4" />
                  </button>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-[#c4c7c8]">
                    <Phone className="size-4" />
                    <span className="font-mono">{supplier.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#c4c7c8]">
                    <Mail className="size-4" />
                    <span className="font-mono">{supplier.email}</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-mono text-xs text-white mb-1 tracking-wider uppercase">Address:</p>
                    <p className="text-[#c4c7c8]" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{supplier.address}</p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-mono text-[#c4c7c8] mb-1 tracking-[1.2px] uppercase">Products</p>
                    <p className="text-lg font-heading text-white" style={{ fontWeight: 540 }}>{supplier.products} TYPES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-[#c4c7c8] mb-1 tracking-[1.2px] uppercase">Total Purchase</p>
                    <p className="text-lg font-heading text-white" style={{ fontWeight: 540 }}>{formatCurrency(supplier.totalPurchase)}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      {!isLoading && error ? (
        <div className="figma-card p-6 mt-6">
          <p className="figma-mono-label text-xs text-[#c4c7c8] mb-2">ERROR</p>
          <p className="text-sm text-[#dae2fd]">{error}</p>
        </div>
      ) : null}
      {!isLoading && !error && suppliers.length === 0 ? (
        <div className="figma-card p-6 mt-6">
          <p className="figma-mono-label text-xs text-[#c4c7c8]">NO SUPPLIERS AVAILABLE</p>
        </div>
      ) : null}
    </div>
  );
}
