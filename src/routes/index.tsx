import { createFileRoute, Link } from "@tanstack/react-router";
import { EXPERIENCES, PROJECTS } from "@/data/portfolio";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ocean/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { SmoothScroll } from "@/components/ocean/SmoothScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Anglerfish,
  BubbleCurtain,
  Bubbles,
  Cloud,
  Crab,
  Jellyfish,
  LightRays,
  MarineSnow,
  PalmTree,
  Seagull,
  Sun,
  Turtle,
  Waves,
  Whale,
} from "@/components/ocean/Creatures";
import aboutPortrait from "@/assets/about-portrait.png";
import projectThumb from "@/assets/project-karang.jpg";
import videoBg from "@/assets/sunny-go.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raka Fadillah — Creative Developer" },
      {
        name: "description",
        content:
          "Portfolio of Raka Fadillah, creative developer from Jakarta. Dive from sunny beaches to the deep abyss — playful interfaces, fluid motion, and a different ocean creature at every depth.",
      },
      { property: "og:title", content: "Raka Fadillah — Creative Developer" },
      {
        property: "og:description",
        content:
          "A beach-to-abyss portfolio: playful interfaces, fluid motion, and new ocean creatures the deeper you scroll.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  { name: "Frontend Engineering", level: 95, tools: "React · TypeScript · Tailwind" },
  { name: "Motion & Animation", level: 90, tools: "Motion · GSAP · Lottie" },
  { name: "Product & UI Design", level: 76, tools: "Figma · Prototyping" },
  { name: "Backend & Cloud", level: 70, tools: "Node · Postgres · Edge functions" },
];

const LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

const MARQUEE = [
  "React",
  "TypeScript",
  "Tailwind",
  "Motion",
  "GSAP",
  "Figma",
  "Node",
  "Three.js",
  "Postgres",
];

function DepthMeter() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setDepth(Math.round(p * 4000));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const zone =
    depth < 200
      ? "Surface"
      : depth < 800
        ? "Sunlight Zone"
        : depth < 2000
          ? "Twilight Zone"
          : depth < 3500
            ? "Midnight Zone"
            : "The Abyss";

  return (
    <div className="depth-meter hidden lg:flex" aria-hidden>
      <span className="rotate-180 [writing-mode:vertical-rl]">{zone}</span>
      <div className="depth-track">
        <div className="depth-dot" style={{ top: `${(depth / 4000) * 100}%` }} />
      </div>
      <span>−{depth.toLocaleString("en-US")} m</span>
    </div>
  );
}

function SkillRow({
  name,
  level,
  tools,
  delay,
}: {
  name: string;
  level: number;
  tools: string;
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? "in-view" : ""}`}>
      <div className="flex items-end justify-between gap-4 text-foam">
        <span className="font-display text-xl md:text-2xl">{name}</span>
        <span className="text-sm opacity-70">{tools}</span>
      </div>
      <div className="skill-track mt-3">
        <div
          className="skill-fill"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="relative">
      <DepthMeter />
      <SmoothScroll />
      <nav className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-white">
          <a href="#top" className="font-display text-lg font-semibold tracking-wide">
            Raka F.
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ---------- ZONE 1 · THE SURFACE ---------- */}
      <section
        id="top"
        className="surface-zone relative flex min-h-screen flex-col overflow-x-clip overflow-y-visible"
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover z-0 "
            style={{
              maskImage: `linear-gradient(
                180deg,
                black 0%,
                black 35%,
                rgb(0 0 0 / 0.8) 52%,
                rgb(0 0 0 / 0.35) 72%,
                transparent 100%
              )`,
              WebkitMaskImage: `linear-gradient(
                180deg,
                black 0%,
                black 35%,
                rgb(0 0 0 / 0.8) 52%,
                rgb(0 0 0 / 0.35) 72%,
                transparent 100%
              )`,
            }}
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        <div className="surface-content relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-32 pb-40">
          <Reveal>
            <p className="eyebrow text-ink/70">Portfolio © 2026 — Jakarta, Indonesia</p>
          </Reveal>
          <Reveal delay={130}>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] text-ink md:text-8xl">
              Raka
              <br />
              Fadillah
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
              Creative developer crafting playful, fluid web experiences — from sunlit interfaces to
              deep, immersive products.
            </p>
          </Reveal>
          <Reveal delay={390}>
            <a href="#about" className="btn-coral mt-10 w-fit">
              Dive in <ArrowDown size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- ZONE 2 · SHALLOWS ---------- */}
      <section
        id="about"
        className="relative flex min-h-screen items-center overflow-x-clip overflow-y-visible py-28 md:py-36"
      >
        <BubbleCurtain />
        <LightRays />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-5">
          <Reveal className="md:col-span-2" delay={40}>
            <div className="glass-card h-full overflow-hidden">
              <img
                src={aboutPortrait}
                alt="Illustration of Raka working on his laptop on the beach"
                className="h-72 w-full object-cover md:h-96"
                loading="lazy"
                width={768}
                height={1024}
              />
              <div className="p-7">
                <h2 className="font-display text-3xl text-ink">Hi, I'm Raka</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  A developer who treats the browser like an ocean: vast, full of life, and best
                  when things move with the current.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="md:col-span-3">
            <div className="glass-card flex h-full flex-col p-8 md:p-10">
              <p className="eyebrow text-ink/60">Currently</p>
              <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                Creative Developer @ Ombak Studio
              </h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink/70">
                <MapPin size={15} /> Jakarta, Indonesia — UTC+7
              </p>
              <p className="mt-5 leading-relaxed text-ink/80">
                For the past five years I've been building interfaces that move — design systems,
                interactive stories, and product UIs with a soft spot for motion,
                micro-interactions, and the occasional easter egg.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-ink/80">
                {["React", "TypeScript", "Tailwind", "Motion", "Figma", "Node"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto grid grid-cols-3 gap-4 pt-9">
                {[
                  ["5+", "Years diving"],
                  ["40+", "Projects shipped"],
                  ["∞", "Coffee consumed"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl text-primary md:text-4xl">{n}</div>
                    <div className="mt-1 text-xs text-ink/60">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- ZONE 3 · OPEN WATER ---------- */}
      <section id="skills" className="relative overflow-x-clip overflow-y-visible py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Jellyfish className="absolute left-[5%] top-[14%] w-24 md:w-32" />
          <Jellyfish className="absolute right-[9%] top-[58%] w-16" color="#9adcf0" />
          <div className="turtle-drift absolute bottom-[6%] right-[22%] w-32 opacity-90 md:w-44">
            <Turtle className="w-full" />
          </div>
          <Bubbles count={11} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="eyebrow text-foam/75 depth-shadow">What I work with</p>
            <h2 className="depth-shadow mt-3 font-display text-4xl font-semibold text-foam md:text-5xl">
              Skills & Tools
            </h2>
          </Reveal>
          <div className="mt-14 space-y-9">
            {SKILLS.map((s, i) => (
              <SkillRow key={s.name} {...s} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ZONE 3.5 · TWILIGHT · EXPERIENCES ---------- */}
      <section
        id="experiences"
        className="relative overflow-x-clip overflow-y-visible py-28 md:py-36"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Jellyfish className="absolute right-[6%] top-[20%] w-20 md:w-28" color="#c9b6f5" />
          <Bubbles count={8} />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="eyebrow text-foam/75 depth-shadow">Where I've been</p>
            <h2 className="depth-shadow mt-3 font-display text-4xl font-semibold text-foam md:text-5xl">
              Experiences
            </h2>
          </Reveal>
          <ol className="relative mt-14 space-y-8 border-l border-foam/25 pl-8">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.role + e.company} delay={i * 120}>
                <li className="relative">
                  <span className="glow-pulse absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/25" />
                  <div className="deep-card p-6 md:p-7">
                    <p className="eyebrow text-foam/60">{e.period}</p>
                    <h3 className="mt-2 font-display text-2xl text-foam">{e.role}</h3>
                    <p className="text-sm font-medium text-foam/80">{e.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foam/70">{e.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- ZONE 4 · THE DEEP ---------- */}
      <section id="projects" className="relative overflow-x-clip overflow-y-visible py-28 md:py-40">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow text-foam/70 depth-shadow">Selected work</p>
            <h2 className="depth-shadow mt-3 font-display text-4xl font-semibold text-foam md:text-5xl">
              Projects
            </h2>
          </Reveal>

          <Reveal delay={140} className="mt-12">
            <a href="#contact" className="block">
              <Card className="project-card deep-card group grid overflow-hidden p-0 text-foam transition-transform duration-500 hover:-translate-y-1.5 md:grid-cols-2">
                <img
                  src={projectThumb}
                  alt="Karang design system preview"
                  className="h-64 w-full object-cover md:h-full"
                  loading="lazy"
                  width={1216}
                  height={832}
                />
                <CardContent className="p-8 md:p-11">
                  <p className="eyebrow text-foam/60">Featured — Design System</p>
                  <h3 className="depth-shadow mt-3 font-display text-3xl text-foam md:text-4xl">
                    Karang DS
                  </h3>
                  <p className="mt-4 leading-relaxed text-foam/75">
                    A coral-reef-inspired design system: 120+ tokens, dark-depth theming, and
                    documentation that swims. Powering three products at Ombak Studio.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-foam/85">
                    {["Design tokens", "React", "Storybook"].map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-medium text-foam">
                    View case study
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </CardContent>
              </Card>
            </a>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 130}>
                <Card className="project-card deep-card group flex h-full flex-col p-7 text-foam transition-transform duration-500 hover:-translate-y-1.5">
                  <CardHeader className="p-0">
                    <p className="eyebrow text-foam/55">{p.kind}</p>
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

          <Reveal delay={200} className="mt-12 flex justify-center">
            <Link to="/projects" className="btn-coral group inline-flex items-center gap-2">
              See more projects
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* tool marquee — drifting across the twilight line */}
      <div className="relative z-10 overflow-hidden py-4 opacity-70" aria-hidden>
        <div className="marquee-track text-sm uppercase tracking-[0.3em] text-foam/80">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-8">{t}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- ZONE 5 · THE ABYSS ---------- */}
      <section
        id="contact"
        className="relative overflow-x-clip overflow-y-visible pt-28 pb-14 md:pt-36"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <MarineSnow count={26} />
          <Jellyfish
            className="glow absolute bottom-[24%] left-[3%] w-24 md:w-32"
            color="#8ef0e2"
            glow
          />
          <Jellyfish
            className="glow absolute bottom-[10%] right-[34%] w-12 opacity-80"
            color="#c5a8f0"
            glow
          />
          <div className="turtle-drift absolute right-[4%] top-[16%] w-44 md:w-64">
            <Anglerfish className="w-full" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow text-foam/70">Contact</p>
            <h2 className="depth-shadow mt-3 font-display text-4xl font-semibold text-foam md:text-6xl">
              Let's make waves.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <div className="deep-card flex h-full flex-col justify-between p-9 md:p-11">
                <div>
                  <h3 className="font-display text-2xl text-foam md:text-3xl">
                    Have a project in mind?
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-foam/70">
                    I'm open for freelance work and interesting collaborations. Tell me your idea —
                    I'll bring the motion, the pixels, and maybe a whale.
                  </p>
                </div>
                <a href="mailto:halo@rakafadillah.dev" className="btn-coral mt-10 w-fit">
                  Say hello <Mail size={18} />
                </a>
              </div>
            </Reveal>

            <div className="space-y-4 md:col-span-2">
              {LINKS.map((l, i) => (
                <Reveal key={l.label} delay={i * 100}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="link-row text-foam">
                    <span className="font-medium">{l.label}</span>
                    <ArrowUpRight size={18} className="opacity-70" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <footer className="mt-24 flex flex-col items-center gap-2 border-t border-foam/10 pt-8 text-center text-xs text-foam/55">
            <span>© 2026 Raka Fadillah — built with salt water & React.</span>
            <span className="opacity-80">
              You've reached the abyss. Thanks for diving all the way down.
            </span>
          </footer>
        </div>
      </section>
    </div>
  );
}
