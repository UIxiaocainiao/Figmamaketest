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
    <div className="relative flex h-screen overflow-hidden bg-[#0b1326] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,#1e3a8a_0%,#7e22ce_45%,#db2777_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.22),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_44%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.12),transparent_52%)]" />

      <aside className="relative z-10 w-64 border-r border-white/20 bg-white/10 backdrop-blur-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div className="border-b border-white/20 p-8">
          <h1
            className="text-xl font-heading tracking-tight uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
            style={{ fontWeight: 400 }}
          >
            INVENTORY
          </h1>
          <p className="figma-mono-label mt-1 text-xs text-[#c4c7c8]">MANAGEMENT SYSTEM</p>
        </div>
        <nav className="p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "mb-2 flex items-center gap-3 rounded-[50px] px-4 py-3 font-sans text-sm transition-all duration-200",
                  isActive ? "bg-white text-[#2f3131]" : "text-white hover:bg-white/10",
                )
              }
              style={{ letterSpacing: "-0.14px", fontWeight: 400 }}
            >
              <item.icon className="size-4" />
              <span className="figma-mono-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="relative z-10 flex-1 overflow-auto bg-transparent">
        <div className="p-6 md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
