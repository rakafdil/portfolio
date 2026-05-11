import ProjectForm from "@/components/admin/ProjectForm";
import { PROJECTS } from "@/constants/data";
import { notFound } from "next/navigation";

export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Map the existing data to the form structure
  const initialData = {
    title: project.title,
    slug: project.slug,
    type: project.type,
    subTitle: project.subTitle,
    coverImage: `/img/${project.title}.png`, // Assuming this based on how you construct it currently
    period: project.period,
    article: project.article || "",
    milestones: project.milestones?.map(m => ({
      ...m,
      status: m.status as "completed" | "pending"
    })) || [],
  };

  return <ProjectForm initialData={initialData} isEditing={true} />;
}