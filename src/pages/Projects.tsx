import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { categories, type Category } from "../data/types.ts"
import { pageHeroes } from "../data/site.ts"
import { projects } from "../data/projects.ts"
import { ProjectCard } from "../components/ProjectCard.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"

type Filter = "All" | Category

function isCategory(value: string | null): value is Category {
  return categories.includes(value as Category)
}

export function Projects() {
  const [params, setParams] = useSearchParams()
  const requested = params.get("category")
  const filter: Filter = isCategory(requested) ? requested : "All"
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  function choose(next: Filter) {
    if (next === "All") setParams({}, { replace: true })
    else setParams({ category: next }, { replace: true })
  }

  return (
    <>
      <Seo
        title={filter === "All" ? "Projects — Hombali Vasisht" : `${filter} projects — Hombali Vasisht`}
        description={
          filter === "All"
            ? "Selected residential, commercial, hospitality, institutional, interior, and landscape works by Hombali Vasisht, Bengaluru."
            : `${filter} architecture by Hombali Vasisht, a Bengaluru practice. Selected projects with location, year, and drawings.`
        }
        path={filter === "All" ? "/projects" : `/projects?category=${encodeURIComponent(filter)}`}
        image={pageHeroes.projects}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
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

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex gap-x-6 gap-y-3 overflow-x-auto pb-4" role="group" aria-label="Filter projects by category">
            {(["All", ...categories] as Filter[]).map((category) => {
              const active = filter === category
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => choose(category)}
                  className={`shrink-0 border-b pb-1 text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
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
