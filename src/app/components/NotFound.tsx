import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-9xl font-heading font-bold mb-6 text-white tracking-tight">404</h1>
      <p className="text-xl font-mono text-[#999999] mb-12 tracking-[1.4px] uppercase">PAGE NOT FOUND</p>
      <Link
        to="/"
        className="px-8 py-4 bg-transparent border border-white rounded-full text-white font-mono text-xs tracking-[1.4px] uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
      >
        <Home className="size-4" />
        RETURN HOME
      </Link>
    </div>
  );
}
