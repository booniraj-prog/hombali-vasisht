import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { categories, type Category } from "../data/types.ts"
import { pageHeroes } from "../data/site.ts"
import { projects } from "../data/projects.ts"
import { ProjectCard } from "../components/ProjectCard.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"

type Filter = "All" | Category

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All")
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Projects — Hombali Vasisht"
        description="Selected residential, commercial, hospitality, institutional, interior, and landscape works by Hombali Vasisht, Bengaluru."
      />
      <PageIntro
        index="03"
        kicker="Projects"
        title="Selected work"
        sheet="03 / Projects"
        drawing="plan"
        image={pageHeroes.projects}
        lede="A portion of the practice, across houses, institutions, hotels, interiors, and a few public edges. Each project opens onto its own sheet."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex gap-x-6 gap-y-3 overflow-x-auto pb-4" role="group" aria-label="Filter projects by category">
            {(["All", ...categories] as Filter[]).map((category) => {
              const active = filter === category
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(category)}
                  className={`shrink-0 border-b pb-1 text-[0.72rem] uppercase tracking-[0.2em] transition-colors ${
                    active ? "border-ink text-ink" : "border-transparent text-stone hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <motion.div layout className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => {
                const feature = filter === "All" && index === 0
                return (
                  <motion.div
                    layout
                    key={project.slug}
                    className={feature ? "md:col-span-2" : ""}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectCard project={project} layout={feature ? "landscape" : "portrait"} />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 ? (
            <p className="mt-16 text-stone">No projects in this category yet.</p>
          ) : null}
        </Container>
      </section>
    </>
  )
}
