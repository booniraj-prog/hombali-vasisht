import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { awards, principles, services, stats, studio } from "../data/site.ts"
import { projects } from "../data/projects.ts"
import { ImageFrame } from "../components/ImageFrame.tsx"
import { LineArt } from "../components/LineArt.tsx"
import { Reveal } from "../components/Reveal.tsx"
import { Seo } from "../components/Seo.tsx"
import { Clients } from "../components/Clients.tsx"
import { Container, SectionLabel } from "../components/Section.tsx"
import { TextLink } from "../components/TextLink.tsx"

const featured = projects.find((project) => project.featured) ?? projects[0]
const selected = projects.filter((project) => project.selected).slice(0, 4)

export function Home() {
  return (
    <>
      <Seo
        title="Hombali Vasisht — Architect, Bengaluru"
        description="A Bengaluru architecture practice established in 1988. Houses, institutions, hospitality, and public edges, drawn with climate, material, and light."
      />
      <Hero />
      <Introduction />
      <SelectedWork />
      <Disciplines />
      <Experience />
      <Featured />
      <Philosophy />
      <Recognition />
      <Clients />
      <ContactBand />
    </>
  )
}

function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-deep text-paper">
      <motion.img
        src={studio.hero.src}
        alt={studio.hero.alt}
        width={2200}
        height={1400}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-x-0 top-0 h-[118%] w-full object-cover"
        style={reduce ? undefined : { y }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/78 via-deep/28 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,197,24,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,197,24,0.22) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div className="pointer-events-none absolute top-28 right-6 hidden w-[34%] text-paper/50 lg:block">
        <LineArt kind="courtyard" mode="static" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pt-40 pb-16 md:pt-44 md:pb-20">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-sun">
          {studio.city} · Practice since {studio.established}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(4rem,11vw,8.4rem)] text-paper">
          Hombali
          <br />
          Vasisht
        </h1>
        <p className="mt-8 max-w-xl text-2xl leading-snug font-normal text-paper/90 italic md:text-3xl">
          {studio.philosophy}
        </p>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <TextLink to="/projects" tone="light">
            Explore Projects
          </TextLink>
          <TextLink to="/about" tone="light">
            About the Architect
          </TextLink>
        </div>
      </Container>
    </section>
  )
}

function Introduction() {
  return (
    <section id="introduction" className="border-b border-line bg-white py-20 md:py-28">
      <Container className="grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <SectionLabel index="01">Introduction</SectionLabel>
        </div>
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-[clamp(2.6rem,4.5vw,4.4rem)] text-balance">
              A practice of climate, courtyard, and quiet structure.
            </h2>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-stone">
              <p>
                Hombali Vasisht is a Bengaluru architecture practice established in {studio.established}. The
                work is principally led, drawn before it is modelled, and built with materials that can stand
                in the monsoon.
              </p>
              <p>
                Houses, schools, places of work, a few hotels, and the occasional public edge — each begun
                from the site’s light, its trees, and the life it has to hold.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <blockquote className="border-t-2 border-sun pt-6 text-3xl leading-snug italic md:text-4xl">
              “We draw the shade before we draw the object.”
            </blockquote>
            <div className="mt-10 text-ink/80">
              <LineArt kind="section" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function SelectedWork() {
  const [lead, ...rest] = selected
  if (!lead) return null
  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="02">Selected projects</SectionLabel>
            <h2 className="mt-5 text-[clamp(2.6rem,4.5vw,4.4rem)]">Work</h2>
          </div>
          <TextLink to="/projects">All projects</TextLink>
        </div>

        <article className="mt-14 grid items-end gap-8 lg:grid-cols-12">
          <Link to={`/projects/${lead.slug}`} className="group lg:col-span-8">
            <ImageFrame src={lead.hero.src} alt={lead.hero.alt} aspect="aspect-[16/11]" priority />
          </Link>
          <div className="lg:col-span-4">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">01 — {lead.category}</p>
            <h3 className="mt-4 text-5xl">
              <Link to={`/projects/${lead.slug}`} className="transition-colors hover:text-bronze">
                {lead.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm text-stone">
              {lead.location}
              <span className="mx-2">/</span>
              {lead.year}
            </p>
            <p className="mt-5 font-light leading-relaxed text-stone">{lead.summary}</p>
          </div>
        </article>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {rest.map((project, index) => (
            <article key={project.slug} className={index === 1 ? "md:mt-24" : ""}>
              <Link to={`/projects/${project.slug}`} className="group block">
                <ImageFrame src={project.hero.src} alt={project.hero.alt} />
                <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
                  <h3 className="text-4xl transition-colors duration-500 group-hover:text-bronze">
                    {project.title}
                  </h3>
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-stone">{project.year}</span>
                </div>
                <p className="mt-2 text-sm text-stone">
                  {project.location}
                  <span className="mx-2 text-line">/</span>
                  {project.category}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Disciplines() {
  return (
    <section id="disciplines" className="border-y border-line bg-white py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel index="03">Disciplines</SectionLabel>
          <h2 className="mt-5 text-[clamp(2.6rem,4.5vw,4.2rem)] text-balance">What the studio undertakes.</h2>
          <div className="mt-8">
            <TextLink to="/services">View services</TextLink>
          </div>
        </div>
        <ol className="border-b border-line lg:col-span-8">
          {services.map((service, index) => (
            <li key={service.title} className="group border-t border-line">
              <div className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                <span className="text-[0.68rem] tracking-[0.22em] text-bronze md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl transition-colors duration-500 group-hover:text-bronze md:col-span-5 md:text-4xl">
                  {service.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone md:col-span-6 md:text-right">
                  {service.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function Experience() {
  return (
    <section id="practice" className="py-20 md:py-28">
      <Container>
        <SectionLabel index="04">Experience</SectionLabel>
        <h2 className="mt-5 max-w-3xl text-[clamp(2.6rem,4.5vw,4.4rem)] text-balance">
          Nearly four decades, still a small office.
        </h2>
        <dl className="mt-14 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ivory px-5 py-8 md:px-8 md:py-12">
              <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-stone">{stat.label}</dt>
              <dd className="mt-4 text-6xl text-bronze md:text-7xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

function Featured() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section ref={ref} className="relative min-h-[88svh] overflow-hidden bg-deep text-paper">
      <motion.img
        src={featured.hero.src}
        alt={featured.hero.alt}
        width={2000}
        height={1300}
        loading="lazy"
        decoding="async"
        className="absolute inset-x-0 -top-[8%] h-[120%] w-full object-cover"
        style={reduce ? undefined : { y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-deep/25" />
      <Container className="relative flex min-h-[88svh] flex-col justify-end py-20 md:py-28">
        <SectionLabel index="05" tone="light">
          Featured project
        </SectionLabel>
        <h2 className="mt-5 max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)]">{featured.title}</h2>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-paper/75">
          {featured.location} · {featured.year}
        </p>
        <p className="mt-6 max-w-xl font-light leading-relaxed text-paper/85">{featured.summary}</p>
        <div className="mt-8">
          <TextLink to={`/projects/${featured.slug}`} tone="light">
            View project
          </TextLink>
        </div>
      </Container>
    </section>
  )
}

function Philosophy() {
  return (
    <section id="philosophy" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="06">Design philosophy</SectionLabel>
            <h2 className="mt-5 text-[clamp(2.6rem,4.5vw,4.4rem)] text-balance">
              Eight concerns, returned to on every project.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <TextLink to="/philosophy">Read the philosophy</TextLink>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.slice(0, 4).map((principle) => (
            <article key={principle.id} className="bg-ivory p-6 md:p-8">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-bronze">{principle.title}</p>
              <p className="mt-6 text-2xl leading-snug">{principle.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Recognition() {
  return (
    <section id="recognition" className="border-t border-line py-20 md:py-28">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel index="07">Recognition</SectionLabel>
          <h2 className="mt-5 text-[clamp(2.6rem,4vw,4rem)] text-balance">Awards, kept quietly.</h2>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {awards.map((award) => (
              <div key={award.title} className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4">
                <p className="text-sm text-stone sm:col-span-2">{award.year}</p>
                <h3 className="text-3xl sm:col-span-6">{award.title}</h3>
                <p className="text-sm text-stone sm:col-span-4 sm:text-right">{award.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ContactBand() {
  return (
    <section className="bg-deep text-paper">
      <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <SectionLabel index="09" tone="light">
            Contact
          </SectionLabel>
          <h2 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.2rem)] text-balance">
            Let's create something meaningful.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="max-w-sm font-light leading-relaxed text-paper/75">
            Commissions are taken up personally. Write with a site, a house, or a question.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex bg-sun px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink transition-colors duration-500 hover:bg-bronze hover:text-paper"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
