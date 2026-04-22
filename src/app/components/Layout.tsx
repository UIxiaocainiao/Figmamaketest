import { Outlet, NavLink } from "react-router";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  UserCog,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Layout() {
  const navItems = [
    { path: "/", label: "DASHBOARD", icon: LayoutDashboard },
    { path: "/inventory", label: "INVENTORY", icon: Package },
    { path: "/purchase", label: "PURCHASE", icon: ShoppingCart },
    { path: "/sales", label: "SALES", icon: TrendingUp },
    { path: "/suppliers", label: "SUPPLIERS", icon: UserCog },
    { path: "/customers", label: "CUSTOMERS", icon: Users },
    { path: "/reports", label: "REPORTS", icon: BarChart3 },
  ];

  return (
    <div className="flex h-screen bg-[#f2f0eb]">
      <aside className="w-64 bg-white border-r border-black/10">
        <div className="p-8 border-b border-black/10">
          <h1 className="text-xl font-heading tracking-tight uppercase text-[#006241]" style={{ fontWeight: 400 }}>
            INVENTORY
          </h1>
          <p className="starbucks-mono-label text-xs text-black/60 mt-1">MANAGEMENT SYSTEM</p>
        </div>
        <nav className="p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-[50px] mb-2 transition-all duration-200 font-sans text-sm",
                  isActive
                    ? "bg-[#00754A] text-white"
                    : "text-black hover:bg-black/5"
                )
              }
              style={{ letterSpacing: '-0.16px', fontWeight: 400 }}
            >
              <item.icon className="size-4" />
              <span className="starbucks-mono-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto bg-[#f2f0eb]">
        <div className="p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
