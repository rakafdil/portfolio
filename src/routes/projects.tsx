import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ocean/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bubbles, FishSchool, Jellyfish, MarineSnow, Whale } from "@/components/ocean/Creatures";
import { PROJECTS } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — Raka Fadillah" },
      {
        name: "description",
        content:
          "The full archive of Raka Fadillah's work: component libraries, PWAs, marketplaces, and playful web experiences.",
      },
      { property: "og:title", content: "All Projects — Raka Fadillah" },
      {
        property: "og:description",
        content: "Dive into the full archive of projects by creative developer Raka Fadillah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="deep-page relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="whale-swim absolute left-0 top-[6%] w-[40vw] min-w-[360px] opacity-70">
          <Whale className="w-full" />
        </div>
        <FishSchool
          className="school school-slow absolute top-[45%] left-0 w-[45vw] min-w-[300px] opacity-50"
          colors={["#7fd8e8", "#a8e6dc"]}
        />
        <Jellyfish
          className="glow absolute bottom-[8%] right-[5%] w-20 md:w-28"
          color="#8ef0e2"
          glow
        />
        <MarineSnow count={20} />
        <Bubbles count={4} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-foam/80 hover:text-foam"
        >
          <ArrowLeft size={16} /> Back to the surface
        </Link>
        <Reveal className="mt-14">
          <p className="eyebrow text-foam/70 depth-shadow">
            The archive · {PROJECTS.length} projects
          </p>
          <h1 className="depth-shadow mt-3 font-display text-5xl font-semibold text-foam md:text-6xl">
            All Projects
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 120}>
              <Card className="project-card deep-card flex h-full flex-col p-7 text-foam transition-transform duration-500 hover:-translate-y-1.5">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-foam/55">{p.kind}</p>
                    <span className="text-xs text-foam/50">{p.year}</span>
                  </div>
                  <CardTitle className="mt-3 font-display text-2xl font-normal text-foam">
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-0">
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foam/70">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-foam/80">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
