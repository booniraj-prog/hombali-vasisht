import { studio } from "../data/site.ts"
import { Clients } from "../components/Clients.tsx"
import { EnquiryForm } from "../components/EnquiryForm.tsx"
import { Seo } from "../components/Seo.tsx"
import { HeroField } from "../components/HeroField.tsx"
import { Container } from "../components/Section.tsx"
import { StudioMap } from "../components/StudioMap.tsx"

export function Contact() {
  return (
    <>
      <Seo
        title="Contact — Hombali Vasisht"
        description="Write to the Bengaluru studio of Hombali Vasisht. Malleswaram office, email, phone, a project enquiry form, and a map."
      />
      <section className="relative min-h-[78svh] overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <HeroField kind="plan" />
        <Container className="relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-stone">
              <span className="text-bronze">07</span>
              <span className="mx-3 opacity-50">/</span>
              Enquiry
            </p>
            <h1 className="mt-5 text-[clamp(3.2rem,6vw,5.6rem)] text-balance">Let's create something meaningful.</h1>
            <p className="mt-6 max-w-md font-light leading-relaxed text-stone">
              Commissions are taken personally. Share a site, a house, or a question. The studio replies from
              Bengaluru.
            </p>

            <address className="mt-12 text-sm leading-relaxed not-italic">
              {studio.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a href={`mailto:${studio.email}`} className="mt-6 block text-sm hover:text-bronze">
              {studio.email}
            </a>
            <a href={studio.phoneHref} className="mt-1 block text-sm hover:text-bronze">
              {studio.phone}
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm />
          </div>
        </Container>
      </section>

      <Clients index="08" />

      <section className="py-20 md:py-28" aria-label="Studio location">
        <Container>
          <StudioMap />
        </Container>
      </section>
    </>
  )
}
