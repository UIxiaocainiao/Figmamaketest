import { Plus, Phone, Mail, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Customers() {
  const customers = [
    { id: 1, name: "CUSTOMER A CORP", contact: "Chen Wei", phone: "138-1111-0001", email: "chen@customer-a.com", address: "Tech Park Building A, Shenzhen, Nanshan District", orders: 24, totalSales: "¥456,800", level: "VIP" },
    { id: 2, name: "CUSTOMER B TRADING", contact: "Zhao Li", phone: "139-2222-0002", email: "zhao@customer-b.com", address: "Business Tower B, Hangzhou, Binjiang District", orders: 15, totalSales: "¥289,500", level: "STANDARD" },
    { id: 3, name: "CUSTOMER C INC", contact: "Liu Yang", phone: "136-3333-0003", email: "liu@customer-c.com", address: "Innovation Center C, Chengdu, High-tech Zone", orders: 8, totalSales: "¥125,600", level: "STANDARD" },
    { id: 4, name: "CUSTOMER D GROUP", contact: "Zhou Ming", phone: "137-4444-0004", email: "zhou@customer-d.com", address: "International Tower D, Wuhan, Jianghan District", orders: 32, totalSales: "¥678,900", level: "VIP" },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-black leading-none animate-slide-up" style={{ fontWeight: 400 }}>CUSTOMERS</h1>
        <Button className="starbucks-pill"><Plus className="size-4" />ADD CUSTOMER</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="starbucks-card p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-heading text-black tracking-tight" style={{ fontWeight: 540 }}>{customer.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono tracking-[1.2px] ${customer.level === "VIP" ? "bg-[#00754A] text-white" : "border border-black/10 text-black/60"}`}>{customer.level}</span>
                </div>
                <p className="text-xs font-mono text-black/60 tracking-wider">CONTACT: {customer.contact}</p>
              </div>
              <button className="p-2 text-black hover:bg-black/10 rounded-md transition-colors"><Edit className="size-4" /></button>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-black/60"><Phone className="size-4" /><span className="font-mono">{customer.phone}</span></div>
              <div className="flex items-center gap-3 text-sm text-black/60"><Mail className="size-4" /><span className="font-mono">{customer.email}</span></div>
              <div className="text-sm"><p className="font-mono text-xs text-black mb-1 tracking-wider uppercase">Address:</p><p className="text-black/60" style={{ letterSpacing: '-0.16px', fontWeight: 400 }}>{customer.address}</p></div>
            </div>

            <div className="border-t border-black/10 pt-4 grid grid-cols-2 gap-4">
              <div><p className="text-xs font-mono text-black/60 mb-1 tracking-[1.2px] uppercase">Orders</p><p className="text-lg font-heading text-black" style={{ fontWeight: 540 }}>{customer.orders} TOTAL</p></div>
              <div className="text-right"><p className="text-xs font-mono text-black/60 mb-1 tracking-[1.2px] uppercase">Total Sales</p><p className="text-lg font-heading text-[#00754A]" style={{ fontWeight: 540 }}>{customer.totalSales}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
