import { useState } from "react"
import { useReducedMotion } from "framer-motion"
import { leaders, leadershipIntro, pageUrl } from "../data/site.ts"
import { BrandIcon, PhoneIcon } from "../components/BrandIcon.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container } from "../components/Section.tsx"

export function Leadership() {
  return (
    <>
      <Seo
        title="Leadership — Hombali Vasisht"
        description="Partners of Hombali Vasisht in Malleswaram, Bengaluru: Arunachal Hombali, Sarojini Hombali, and Shravanth Vasisht."
        path="/leadership"
        image={
          leaders[0].portrait.startsWith("http")
            ? leaders[0].portrait
            : pageUrl(`/${leaders[0].portrait.split("/").pop()}`)
        }
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Leadership", path: "/leadership" },
        ]}
      />
      <article>
        <header className="bg-ivory">
          <Container className="pt-40 pb-6 md:pt-44 md:pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone">
              <span className="text-bronze">02</span>
              <span className="mx-3 opacity-50">/</span>
              Leadership
            </p>
            <h1 className="mt-6 max-w-4xl text-balance">The partners</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone">{leadershipIntro}</p>
          </Container>
        </header>

        <section aria-label="Partners">
          <ul>
            {leaders.map((partner, index) => (
              <PartnerSpread key={partner.name} partner={partner} index={index} />
            ))}
          </ul>
        </section>
      </article>
    </>
  )
}

function PartnerSpread({
  partner,
  index,
}: {
  partner: (typeof leaders)[number]
  index: number
}) {
  const reduce = useReducedMotion()
  const [shift, setShift] = useState({ x: 0, y: 0 })
  const flip = index % 2 === 1
  const number = String(index + 1).padStart(2, "0")
  const credentials = "credentials" in partner ? partner.credentials : undefined
  const bio = "bio" in partner ? partner.bio : undefined

  return (
    <li className="border-t border-line bg-ivory">
      <div
        className={`mx-auto flex w-full max-w-[1400px] flex-col items-start gap-6 px-5 py-12 sm:px-8 md:items-center md:gap-8 md:py-16 lg:px-14 ${
          flip ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <figure
          className="relative h-[350px] w-[359px] max-w-full shrink-0"
          onMouseMove={(event) => {
            if (reduce) return
            const bounds = event.currentTarget.getBoundingClientRect()
            const x = (event.clientX - bounds.left) / bounds.width - 0.5
            const y = (event.clientY - bounds.top) / bounds.height - 0.5
            setShift({ x: x * 18, y: y * 18 })
          }}
          onMouseLeave={() => setShift({ x: 0, y: 0 })}
        >
          <div className="relative h-full w-full overflow-hidden bg-deep">
            <img
              src={partner.portrait}
              alt={partner.portrait.includes("unsplash.com") ? "" : partner.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out"
              style={
                reduce ? undefined : { transform: `translate(${shift.x}px, ${shift.y}px) scale(1.08)` }
              }
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/55 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 text-xl text-sun">{number}</p>
          </div>
        </figure>

        <div className="min-w-0 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-bronze">{partner.role}</p>
          <h2 className="mt-3 text-balance">{partner.name}</h2>
          {credentials ? <p className="mt-4 text-base font-medium">{credentials}</p> : null}
          {bio ? <p className="mt-5 max-w-xl leading-relaxed text-stone">{bio}</p> : null}
          <a
            href={partner.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-base tracking-wide transition-colors hover:text-bronze"
          >
            <PhoneIcon />
            {partner.phone}
          </a>
          <ul className="-ml-2 mt-3 flex items-center" aria-label={`${partner.name} on social media`}>
            {partner.socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-label={`${partner.name} on ${item.label}`}
                  title={item.label}
                  className="flex h-10 w-10 items-center justify-center transition-colors hover:text-bronze focus-visible:text-bronze focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BrandIcon id={item.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
