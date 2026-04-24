import { useEffect, useState } from "react";
import { Plus, Phone, Mail, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchCustomersData, type CustomerRecord } from "@/lib/api";

export function Customers() {
  const [customers, setCustomers] = useState<CustomerRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchCustomersData(controller.signal)
      .then((data) => {
        setCustomers(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((fetchError) => {
        if (controller.signal.aborted) {
          return;
        }

        setCustomers([]);
        setIsLoading(false);
        setError(fetchError instanceof Error ? fetchError.message : "Failed to load customers");
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
        <h1 className="text-6xl font-heading tracking-tight uppercase text-black leading-none animate-slide-up" style={{ fontWeight: 400 }}>
          CUSTOMERS
        </h1>
        <Button className="figma-pill">
          <Plus className="size-4" />
          ADD CUSTOMER
        </Button>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="figma-card p-6 animate-pulse">
                <div className="h-6 w-40 rounded bg-black/10 mb-4" />
                <div className="h-4 w-24 rounded bg-black/10 mb-6" />
                <div className="space-y-3 mb-6">
                  <div className="h-4 rounded bg-black/10" />
                  <div className="h-4 rounded bg-black/10" />
                  <div className="h-12 rounded bg-black/10" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-10 rounded bg-black/10" />
                  <div className="h-10 rounded bg-black/10" />
                </div>
              </div>
            ))
          : customers.map((customer) => (
              <div key={customer.id} className="figma-card p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-heading text-black tracking-tight" style={{ fontWeight: 540 }}>{customer.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono tracking-[1.2px] ${
                        customer.level === "VIP"
                          ? "bg-black text-white"
                          : "border border-black/10 text-black/60"
                      }`}>
                        {customer.level}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-black/60 tracking-wider">CONTACT: {customer.contact}</p>
                  </div>
                  <button className="p-2 text-black hover:bg-black/10 rounded-md transition-colors">
                    <Edit className="size-4" />
                  </button>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-black/60">
                    <Phone className="size-4" />
                    <span className="font-mono">{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-black/60">
                    <Mail className="size-4" />
                    <span className="font-mono">{customer.email}</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-mono text-xs text-black mb-1 tracking-wider uppercase">Address:</p>
                    <p className="text-black/60" style={{ letterSpacing: '-0.14px', fontWeight: 330 }}>{customer.address}</p>
                  </div>
                </div>

                <div className="border-t border-black/10 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-mono text-black/60 mb-1 tracking-[1.2px] uppercase">Orders</p>
                    <p className="text-lg font-heading text-black" style={{ fontWeight: 540 }}>{customer.orders} TOTAL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-black/60 mb-1 tracking-[1.2px] uppercase">Total Sales</p>
                    <p className="text-lg font-heading text-black" style={{ fontWeight: 540 }}>{formatCurrency(customer.totalSales)}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      {!isLoading && error ? (
        <div className="figma-card p-6 mt-6">
          <p className="figma-mono-label text-xs text-black/60 mb-2">ERROR</p>
          <p className="text-sm text-black/70">{error}</p>
        </div>
      ) : null}
      {!isLoading && !error && customers.length === 0 ? (
        <div className="figma-card p-6 mt-6">
          <p className="figma-mono-label text-xs text-black/60">NO CUSTOMERS AVAILABLE</p>
        </div>
      ) : null}
    </div>
  );
}
