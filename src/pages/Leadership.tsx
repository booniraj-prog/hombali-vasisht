import { leaders, leadershipIntro, pageHeroes } from "../data/site.ts"
import { BrandIcon, PhoneIcon } from "../components/BrandIcon.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"

export function Leadership() {
  return (
    <>
      <Seo
        title="Leadership — Hombali Vasisht"
        description="Arunachal Hombali, Sarojini Hombali, and Shravanth Vasisth, partners of Hombali Vasisht in Bengaluru."
      />
      <PageIntro
        index="02"
        kicker="Leadership"
        title="The partners"
        sheet="02 / Leadership"
        drawing="elevation"
        image={pageHeroes.leadership}
        lede={leadershipIntro}
      />

      <section className="py-20 md:py-28">
        <Container>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">
            <span className="text-bronze">03</span>
            <span className="mx-3 opacity-50">/</span>
            Partners
          </p>
          <ul className="mt-10 grid border-t border-line md:grid-cols-3">
            {leaders.map((partner, index) => (
              <li
                key={partner.name}
                className="border-b border-line py-10 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <p className="text-[0.68rem] tracking-[0.22em] text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-6 text-[clamp(2rem,3vw,2.8rem)] text-balance">{partner.name}</h2>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-stone">{partner.role}</p>
                <a
                  href={partner.phoneHref}
                  className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide transition-colors hover:text-bronze"
                >
                  <PhoneIcon />
                  {partner.phone}
                </a>
                <ul className="-ml-2 mt-4 flex items-center" aria-label={`${partner.name} on social media`}>
                  {partner.socials.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        aria-label={`${partner.name} on ${item.label}`}
                        title={item.label}
                        className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-bronze focus-visible:text-bronze focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BrandIcon id={item.id} />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
