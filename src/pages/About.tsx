import { affiliations, awards, education, pageHeroes, stats, studio, timeline } from "../data/site.ts"
import { ImageFrame } from "../components/ImageFrame.tsx"
import { LineArt } from "../components/LineArt.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"
import { TextLink } from "../components/TextLink.tsx"

export function About() {
  return (
    <>
      <Seo
        title="About the Architect — Hombali Vasisht"
        description="About Hombali Vasisht, a Bengaluru architecture practice since 1988. The Malleswaram studio, education, and the path of the work."
        path="/about"
        image={studio.portrait.src}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageIntro
        index="02"
        kicker="About"
        title="The architect"
        sheet="02 / About"
        drawing="elevation"
        image={pageHeroes.about}
        lede="A principal-led practice in Bengaluru. The work is drawn slowly, built with local materials, and judged by how a room feels in the middle of the afternoon."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <figure className="lg:col-span-6 lg:col-start-7">
            <ImageFrame src={studio.portrait.src} alt={studio.portrait.alt} aspect="aspect-[4/5]" priority />
            <figcaption className="mt-3 flex justify-between text-xs font-medium uppercase tracking-[0.1em] text-stone">
              <span>{studio.portrait.caption}</span>
              <span>Bengaluru</span>
            </figcaption>
          </figure>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-bronze">Practice since {studio.established}</p>
            <div className="mt-6 space-y-5 leading-relaxed text-stone">
              <p>
                Hombali Vasisht studied architecture in Mumbai and urban design in Ahmedabad, then returned
                south to open a practice in Bengaluru in 1988. The office has stayed small on purpose. The
                principal still draws, still visits site, and still begins a project by asking where the shade
                will fall.
              </p>
              <p>
                The early work was additions to family houses — verandahs reopened, kitchens pulled out of
                passages, rooms given back their afternoon. Institutional and civic projects followed, then a
                run of houses and a few hotels on the estates of Kodagu and Chikkamagaluru. The questions did
                not change with the scale.
              </p>
              <p>
                The studio is a first-floor room on East Park Road, Malleswaram. Models stay on the tables. There is no
                reception designed to impress. Clients are met with a drawing, a doubt, and usually a cup of
                coffee that has gone cold.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Education</p>
            <h2 className="mt-4">Formation</h2>
          </div>
          <dl className="divide-y divide-line border-y border-line lg:col-span-8">
            {education.map((item) => (
              <div key={item.title} className="grid gap-3 py-7 sm:grid-cols-12">
                <dt className="text-sm text-stone sm:col-span-2">{item.year}</dt>
                <dd className="sm:col-span-10">
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="mt-2 text-sm text-stone">{item.place}</p>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Journey</p>
            <h2 className="mt-4">A short chronology</h2>
            <div className="mt-10 hidden text-ink/75 lg:block">
              <LineArt kind="elevation" />
            </div>
          </div>
          <ol className="relative border-l border-line lg:col-span-7 lg:col-start-6">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute top-2 -left-[5px] h-2 w-2 bg-bronze" />
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">{item.year}</p>
                <h3 className="mt-2">{item.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-stone">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-deep py-24 text-paper md:py-32">
        <Container className="grid gap-10 lg:grid-cols-12">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-paper/60 lg:col-span-3">Philosophy</p>
          <div className="lg:col-span-8">
            <blockquote className="text-xl leading-snug italic">
              {studio.philosophy}
            </blockquote>
            <p className="mt-8 max-w-2xl leading-relaxed text-paper/75">
              Form is held back. Light is tempered. Materials are chosen for the tenth monsoon, not the first
              photograph. The full account of this position lives on its own page, beside the drawings that
              keep it honest.
            </p>
            <div className="mt-8">
              <TextLink to="/philosophy" tone="light">
                Design philosophy
              </TextLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">In numbers</p>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ivory px-5 py-8 md:px-8 md:py-12">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-stone">{stat.label}</dt>
                <dd className="mt-4 text-6xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2>Recognition</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {awards.map((award) => (
                <div key={award.title} className="grid gap-1 py-5 sm:grid-cols-[5rem_1fr]">
                  <p className="text-sm text-stone">{award.year}</p>
                  <div>
                    <h3>{award.title}</h3>
                    <p className="mt-1 text-sm text-stone">{award.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Affiliations</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {affiliations.map((item) => (
                <li key={item} className="py-5 text-lg font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
