"use client";

import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ContactsSection from "@/components/ContactsSection";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen text-slate-50 bg-slate-950 overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-64 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-slate-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-40 space-y-40">
        <ProjectsSection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent max-w-5xl mx-auto" />
        <ToolsSection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent max-w-5xl mx-auto" />
        <ExperiencesSection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent max-w-5xl mx-auto" />
        <ContactsSection />
      </div>
    </main>
  );
}
