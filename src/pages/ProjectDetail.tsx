import { Link, useParams } from "react-router-dom"
import { getNextProject, getProject } from "../data/projects.ts"
import { ImageFrame } from "../components/ImageFrame.tsx"
import { LineArt } from "../components/LineArt.tsx"
import { Seo } from "../components/Seo.tsx"
import { HeroField } from "../components/HeroField.tsx"
import { Container } from "../components/Section.tsx"
import { NotFound } from "./NotFound.tsx"

export function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />
  const next = getNextProject(project.slug)

  return (
    <>
      <Seo
        title={`${project.title} — Hombali Vasisht`}
        description={`${project.title}, ${project.location}, ${project.year}. ${project.summary}`}
      />
      <header className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden bg-deep text-paper">
        <HeroField kind={project.drawing} image={project.hero.src} />
        <Container className="relative pt-40 pb-16 md:pt-44 md:pb-20">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-paper/75">
            <Link to="/projects" className="transition-colors hover:text-sun">
              Projects
            </Link>
            <span className="mx-3">/</span>
            {project.category}
          </p>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-12">
            <h1 className="text-[clamp(3.2rem,7vw,6.6rem)] text-paper lg:col-span-8">{project.title}</h1>
            <p className="text-sm leading-relaxed text-paper/80 lg:col-span-4">
              {project.location}
              <br />
              {project.year}
              <br />
              {project.category}
            </p>
          </div>
        </Container>
      </header>
      <div className="bg-ivory py-10">
        <Container>
          <ImageFrame
            src={project.hero.src}
            alt={project.hero.alt}
            aspect="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]"
            priority
            hover={false}
          />
        </Container>
      </div>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Overview</p>
            <p className="mt-5 text-3xl leading-snug md:text-4xl">{project.summary}</p>
            <p className="mt-6 max-w-2xl font-light leading-relaxed text-stone">{project.overview}</p>
          </div>
          <dl className="divide-y divide-line border-y border-line lg:col-span-4 lg:col-start-9">
            {project.details.map((detail) => (
              <div key={detail.label} className="grid grid-cols-2 gap-4 py-4 text-sm">
                <dt className="text-stone">{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Design concept</p>
            <h2 className="mt-4 text-5xl">The idea of the plan</h2>
            <p className="mt-6 font-light leading-relaxed text-stone">{project.concept}</p>
          </div>
          <div className="border border-line bg-paper p-6 text-ink/80 md:p-10 lg:col-span-7">
            <LineArt kind={project.drawing} />
            <div className="mt-6 flex flex-wrap justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-stone">
              <span>{project.title}</span>
              <span>Indicative drawing study</span>
              <span>Not to scale</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-4 md:py-8">
        <Container>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Gallery</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
            {project.gallery.map((image, index) => (
              <ImageFrame
                key={image.src}
                src={image.src}
                alt={image.alt}
                aspect={index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}
                className={index === 0 ? "md:col-span-2" : ""}
                hover={false}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Materials</p>
            <ul className="mt-6 border-t border-line">
              {project.materials.map((material) => (
                <li key={material} className="border-b border-line py-3 text-sm tracking-wide">
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Challenges & solutions</p>
            <div className="mt-6 space-y-10">
              {project.challenges.map((item, index) => (
                <article key={item.title} className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[4rem_1fr]">
                  <p className="text-sm text-stone">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-3xl">{item.title}</h3>
                    <p className="mt-3 font-light leading-relaxed text-stone">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Link to={`/projects/${next.slug}`} className="group relative block min-h-[48vh] overflow-hidden bg-deep text-paper">
        <img
          src={next.hero.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-deep/20" />
        <Container className="relative flex min-h-[48vh] flex-col justify-end py-12">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-paper/70">Next project</p>
          <h2 className="mt-3 text-[clamp(2.8rem,6vw,5rem)] transition-colors group-hover:text-sand">{next.title}</h2>
          <p className="mt-3 text-sm text-paper/75">
            {next.location} · {next.year}
          </p>
        </Container>
      </Link>
    </>
  )
}
