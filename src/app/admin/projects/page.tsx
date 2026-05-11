import Link from "next/link";
import { PROJECTS } from "@/constants/data";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";

export default function AdminProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-stint text-white mb-2">Projects</h1>
          <p className="text-slate-400 font-crimson">Manage your portfolio projects and milestones.</p>
        </div>
        <Link 
          href="/admin/projects/new" 
          className="flex items-center gap-2 bg-[#405A9F] hover:bg-[#2F4989] text-white px-4 py-2 rounded-lg transition-colors font-stint tracking-wider"
        >
          <FaPlus /> Add Project
        </Link>
      </div>

      <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 text-slate-300 font-stint text-lg">
                <th className="p-4 border-b border-slate-700">Project</th>
                <th className="p-4 border-b border-slate-700">Type</th>
                <th className="p-4 border-b border-slate-700">Period</th>
                <th className="p-4 border-b border-slate-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="font-crimson text-lg">
              {PROJECTS.map((project) => (
                <tr key={project.slug} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-white mb-1">{project.title}</div>
                    <div className="text-sm text-slate-400 truncate max-w-xs">{project.slug}</div>
                  </td>
                  <td className="p-4">
                    <span className="bg-[#d97706]/20 text-[#d97706] py-1 px-3 text-xs rounded-full font-bold">
                      {project.type}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">{project.period}</td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3 text-lg">
                      <Link href={`/projects/${project.slug}`} target="_blank" className="text-slate-400 hover:text-white transition-colors" title="View">
                        <FaEye />
                      </Link>
                      <Link href={`/admin/projects/${project.slug}/edit`} className="text-blue-400 hover:text-blue-300 transition-colors" title="Edit">
                        <FaEdit />
                      </Link>
                      <button className="text-red-400 hover:text-red-300 transition-colors" title="Delete">
                        <FaTrash />
                      </button>
                    </div>
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