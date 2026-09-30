import { pageHeroes, process, services } from "../data/site.ts"
import { LineArt } from "../components/LineArt.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"
import { TextLink } from "../components/TextLink.tsx"

export function Services() {
  return (
    <>
      <Seo
        title="Architecture Services — Hombali Vasisht"
        description="Architectural design, houses, commercial work, interiors, restoration, consultation, and project management from the Bengaluru studio of Hombali Vasisht."
        path="/services"
        image={pageHeroes.services}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <PageIntro
        index="05"
        kicker="Services"
        title="The work of the office"
        sheet="05 / Services"
        drawing="grid"
        image={pageHeroes.services}
        lede="Eight services, one practice. Most commissions begin as a conversation and stay with the principal from the first drawing to the last site visit."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Scope</p>
            <h2 className="mt-4 text-balance">What is undertaken, and how it proceeds.</h2>
            <div className="mt-10 text-ink/75">
              <LineArt kind="grid" />
            </div>
          </div>
          <div className="border-t border-line lg:col-span-8">
            {services.map((service, index) => (
              <article key={service.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-6">
                <p className="text-xs font-medium tracking-[0.12em] text-stone md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="md:col-span-4">{service.title}</h3>
                <p className="leading-relaxed text-stone md:col-span-7">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Method</p>
          <h2 className="mt-4">A project, in four movements</h2>
          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.index} className="bg-ivory p-6 md:p-8">
                <p className="text-xs font-medium tracking-[0.12em] text-bronze">{step.index}</p>
                <h3 className="mt-6">{step.title}</h3>
                <p className="mt-4 text-stone">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <TextLink to="/contact">Discuss a project</TextLink>
          </div>
        </Container>
      </section>
    </>
  )
}
