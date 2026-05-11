import { PROJECTS } from "@/constants/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaArrowLeft, FaCheckCircle, FaRegCircle } from "react-icons/fa";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#405A9F] hover:text-white transition-colors mb-8 text-lg font-stint">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#d97706] text-white py-1 px-3 text-sm rounded-full font-bold tracking-widest">
              {project.type}
            </span>
            {project.stack.map((tech) => (
              <span key={tech} className="bg-[#2F4989] py-1 px-3 text-sm rounded-full font-stint tracking-widest">
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-stint tracking-wider text-white mb-4">
            {project.title}
          </h1>
          <p className="text-2xl font-crimson text-slate-400 mb-6">{project.subTitle}</p>
          
          <div className="flex gap-4 mb-8">
            {project.webLink && (
              <a href={project.webLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#172039] hover:bg-[#2F4989] px-4 py-2 rounded-lg transition-colors">
                <FaGlobe /> Live Site
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#172039] hover:bg-[#2F4989] px-4 py-2 rounded-lg transition-colors">
                <FaGithub /> Source Code
              </a>
            )}
          </div>
          
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-[#172039]">
             <Image
              src={`/img/${project.title}.png`}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <article className="prose prose-invert prose-lg md:prose-xl prose-headings:font-stint prose-p:font-crimson max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: project.article.replace(/\n\n/g, '<br/><br/>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/- \*\*(.*)\*\*/g, '<li><strong>$1</strong>') }} />
        </article>

        {project.milestones && project.milestones.length > 0 && (
          <section className="mb-20">
            <h2 className="text-4xl font-stint text-white mb-8 border-b border-[#172039] pb-4">Milestone Timeline</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#0f172a] text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {milestone.status === 'completed' ? <FaCheckCircle className="text-green-500" /> : <FaRegCircle className="text-slate-500" />}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#172039] bg-[rgba(23,32,57,0.35)] shadow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-stint text-xl text-white">{milestone.title}</h4>
                      <time className="font-crimson text-sm text-[#405A9F]">{milestone.date}</time>
                    </div>
                    <p className="text-slate-400 font-crimson">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}