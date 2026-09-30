import { pageHeroes, process } from "../data/site.ts"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"
import { TextLink } from "../components/TextLink.tsx"

const steps = [
  {
    title: "A site and a brief",
    text: "Bring a plot, a house that needs another room, or a question about whether to build. The studio begins by measuring what is already there.",
  },
  {
    title: "Drawings you can build from",
    text: "Plans, sections, and details are prepared so a contractor can follow them. The drawing is the instruction, not a picture of a finished house.",
  },
  {
    title: "You lead the building",
    text: "Clients who want to build themselves keep the site, the contractor, and the pace. The studio stays available for the decisions that the drawing cannot settle alone.",
  },
  {
    title: "A building that can stand alone",
    text: "The aim is a house that does not depend on the architect once it is occupied. Materials are chosen so they can be repaired nearby.",
  },
]

export function Build() {
  return (
    <>
      <Seo
        title="Build it yourself — Hombali Vasisht"
        description="Drawings, guidance, and a clear sequence for clients who want to build with the Bengaluru studio of Hombali Vasisht."
      />
      <PageIntro
        index="05"
        kicker="Build"
        title="Build it yourself"
        sheet="05 / Build"
        drawing="grid"
        image={pageHeroes.build}
        lede="Some commissions are drawn so the client can build them. The studio provides the reading of the site, the drawings, and advice on site. The building stays in your hands."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">How it works</p>
            <h2 className="mt-4 text-5xl text-balance">A drawing, then a building you can carry.</h2>
          </div>
          <ol className="border-t border-line lg:col-span-8">
            {steps.map((step, index) => (
              <li key={step.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-12">
                <p className="text-[0.68rem] tracking-[0.22em] text-bronze md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-3xl md:col-span-4">{step.title}</h3>
                <p className="font-light leading-relaxed text-stone md:col-span-7">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <Container>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Sequence</p>
          <h2 className="mt-4 text-5xl">Four movements, still the same practice</h2>
          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.index} className="bg-ivory p-6 md:p-8">
                <p className="text-[0.68rem] tracking-[0.22em] text-bronze">{step.index}</p>
                <h3 className="mt-6 text-4xl">{step.title}</h3>
                <p className="mt-4 font-light text-stone">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <TextLink to="/contact">Connect with us</TextLink>
          </div>
        </Container>
      </section>
    </>
  )
}
