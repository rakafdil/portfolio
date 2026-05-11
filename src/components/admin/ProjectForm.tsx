"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaPlus, FaTrash, FaSave, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define the validation schema
const milestoneSchema = z.object({
  id: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["completed", "pending"]),
});

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  type: z.string().min(1, "Project Type is required"),
  subTitle: z.string().min(1, "Subtitle is required"),
  coverImage: z.string().url("Must be a valid URL").or(z.string().min(1, "Image path is required")), // e.g. /img/NutriMori.png
  article: z.string().min(10, "Article content is required"),
  period: z.string(),
  milestones: z.array(milestoneSchema),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialData?: Partial<ProjectFormValues>;
  isEditing?: boolean;
}

export default function ProjectForm({ initialData, isEditing }: ProjectFormProps) {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      type: "Web App",
      subTitle: "",
      coverImage: "",
      article: "",
      period: "",
      milestones: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "milestones",
  });

  const onSubmit = async (data: ProjectFormValues) => {
    console.log("Submitting data to API:", data);
    // API Call goes here (e.g. fetch('/api/projects', { method: 'POST', body: JSON.stringify(data) }))
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Redirect back to table
    router.push("/admin/projects");
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-6">
        <Link href="/admin/projects" className="inline-flex items-center text-[#405A9F] hover:text-white transition-colors mb-4 font-stint text-lg">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
        <h1 className="text-3xl font-stint text-white">{isEditing ? "Edit Project" : "Add New Project"}</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Basic Info Section */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-6">
          <h2 className="text-2xl font-stint text-white mb-4 border-b border-slate-700 pb-2">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-slate-300 font-crimson font-bold">Project Title</label>
              <input 
                {...register("title")} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#405A9F]" 
                placeholder="e.g. NutriMori"
              />
              {errors.title && <p className="text-red-400 text-sm">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-slate-300 font-crimson font-bold">Slug</label>
              <input 
                {...register("slug")} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#405A9F]" 
                placeholder="e.g. nutrimori"
              />
              {errors.slug && <p className="text-red-400 text-sm">{errors.slug.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-slate-300 font-crimson font-bold">Project Type</label>
              <select 
                {...register("type")} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#405A9F]"
              >
                <option value="Web App">Web App</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="AI Agent">AI Agent</option>
                <option value="Healthcare Tool">Healthcare Tool</option>
                <option value="System">System</option>
                <option value="Other">Other</option>
              </select>
              {errors.type && <p className="text-red-400 text-sm">{errors.type.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-slate-300 font-crimson font-bold">Period</label>
              <input 
                {...register("period")} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#405A9F]" 
                placeholder="e.g. Nov - Dec 2025"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-slate-300 font-crimson font-bold">Subtitle</label>
            <input 
              {...register("subTitle")} 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#405A9F]" 
              placeholder="A short description of the project"
            />
            {errors.subTitle && <p className="text-red-400 text-sm">{errors.subTitle.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-slate-300 font-crimson font-bold">Cover Image URL</label>
            <input 
              {...register("coverImage")} 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#405A9F]" 
              placeholder="/img/project-name.png or https://..."
            />
            {errors.coverImage && <p className="text-red-400 text-sm">{errors.coverImage.message}</p>}
          </div>
        </div>

        {/* Article Section */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
          <h2 className="text-2xl font-stint text-white mb-2 border-b border-slate-700 pb-2">Article Content (Markdown)</h2>
          <div className="space-y-2">
            <textarea 
              {...register("article")} 
              rows={12}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#405A9F] font-mono text-sm" 
              placeholder="Write the full case study here in Markdown..."
            />
            {errors.article && <p className="text-red-400 text-sm">{errors.article.message}</p>}
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-4">
            <h2 className="text-2xl font-stint text-white">Milestones</h2>
            <button 
              type="button" 
              onClick={() => append({ date: "", title: "", description: "", status: "pending" })}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg transition-colors font-stint tracking-wider text-sm"
            >
              <FaPlus /> Add Milestone
            </button>
          </div>

          {fields.length === 0 && (
            <p className="text-slate-400 font-crimson italic text-center py-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
              No milestones added yet.
            </p>
          )}

          <div className="space-y-6">
            {fields.map((field, index) => (
              <div key={field.id} className="p-5 bg-slate-900 rounded-lg border border-slate-700 relative group">
                <button 
                  type="button" 
                  onClick={() => remove(index)}
                  className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors opacity-70 group-hover:opacity-100 p-1"
                  title="Remove Milestone"
                >
                  <FaTrash />
                </button>
                
                <h4 className="font-stint text-white mb-4 tracking-widest">Milestone #{index + 1}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3 space-y-2">
                    <label className="text-slate-400 text-xs uppercase font-bold tracking-wider">Date</label>
                    <input 
                      {...register(`milestones.${index}.date`)} 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#405A9F] text-sm" 
                      placeholder="e.g. Oct 2025"
                    />
                    {errors.milestones?.[index]?.date && <p className="text-red-400 text-xs">{errors.milestones[index].date.message}</p>}
                  </div>
                  
                  <div className="md:col-span-5 space-y-2">
                    <label className="text-slate-400 text-xs uppercase font-bold tracking-wider">Title</label>
                    <input 
                      {...register(`milestones.${index}.title`)} 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#405A9F] text-sm" 
                      placeholder="Milestone Title"
                    />
                    {errors.milestones?.[index]?.title && <p className="text-red-400 text-xs">{errors.milestones[index].title.message}</p>}
                  </div>

                  <div className="md:col-span-4 space-y-2">
                    <label className="text-slate-400 text-xs uppercase font-bold tracking-wider">Status</label>
                    <select 
                      {...register(`milestones.${index}.status`)} 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#405A9F] text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div className="md:col-span-12 space-y-2 mt-2">
                    <label className="text-slate-400 text-xs uppercase font-bold tracking-wider">Description</label>
                    <input 
                      {...register(`milestones.${index}.description`)} 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#405A9F] text-sm" 
                      placeholder="Short description of what was achieved..."
                    />
                    {errors.milestones?.[index]?.description && <p className="text-red-400 text-xs">{errors.milestones[index].description.message}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-[#405A9F] hover:bg-[#2F4989] text-white px-8 py-3 rounded-xl transition-all font-stint text-xl tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaSave /> {isSubmitting ? "Saving..." : "Save Project"}
          </button>
        </div>
      </form>
    </div>
  );
}