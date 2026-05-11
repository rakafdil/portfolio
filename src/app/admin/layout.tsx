import Link from "next/link";
import { FaTachometerAlt, FaProjectDiagram, FaSignOutAlt } from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 flex flex-col hidden md:flex border-r border-slate-700">
        <div className="p-6">
          <h2 className="text-2xl font-stint text-white tracking-widest">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-[#2F4989] hover:text-white transition-colors">
            <FaProjectDiagram />
            <span className="font-crimson tracking-wide">Manage Projects</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition-colors">
            <FaSignOutAlt />
            <span className="font-crimson">Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-8 bg-slate-800 border-b border-slate-700 md:hidden">
          <h2 className="text-xl font-stint text-white">Admin Panel</h2>
          <Link href="/" className="text-sm">Back to Site</Link>
        </header>
        <div className="flex-1 overflow-auto p-8 bg-slate-900">
          {children}
        </div>
      </main>
    </div>
  );
}