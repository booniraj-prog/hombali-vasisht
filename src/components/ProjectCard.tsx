import { Link } from "react-router-dom"
import type { Project } from "../data/projects.ts"
import { ImageFrame } from "./ImageFrame.tsx"

export function ProjectCard({
  project,
  layout = "portrait",
}: {
  project: Project
  layout?: "portrait" | "landscape"
}) {
  return (
    <article>
      <Link to={`/projects/${project.slug}`} className="group block">
        <ImageFrame
          src={project.hero.src}
          alt={project.hero.alt}
          aspect={layout === "landscape" ? "aspect-[16/9]" : "aspect-[4/5]"}
        />
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
          <h3 className="text-3xl transition-colors duration-500 group-hover:text-bronze md:text-4xl">
            {project.title}
          </h3>
          <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.22em] text-stone">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-sm text-stone">
          {project.location}
          <span className="mx-2 text-line">/</span>
          {project.category}
        </p>
        <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-stone">{project.summary}</p>
      </Link>
    </article>
  )
}
