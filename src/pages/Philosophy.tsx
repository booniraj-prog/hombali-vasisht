import { pageHeroes, principles, studio } from "../data/site.ts"
import { LineArt } from "../components/LineArt.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"

export function Philosophy() {
  return (
    <>
      <Seo
        title="Design Philosophy — Hombali Vasisht"
        description="How the practice thinks about form, function, light, space, materials, context, sustainability, and human experience."
      />
      <PageIntro
        index="04"
        kicker="Philosophy"
        title="How the work is judged"
        sheet="04 / Philosophy"
        drawing="section"
        image={pageHeroes.philosophy}
        lede={studio.philosophy}
      />

      {principles.map((principle, index) => {
        const dark = principle.tone === "dark"
        return (
          <section
            key={principle.id}
            className={dark ? "relative overflow-hidden bg-deep text-paper" : index % 2 === 1 ? "bg-white" : "bg-ivory"}
          >
            {dark && principle.image ? (
              <>
                <img
                  src={principle.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-deep/70" />
              </>
            ) : null}
            <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
              <div className={`${index % 2 === 0 ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-7"}`}>
                <p className={`text-[0.68rem] uppercase tracking-[0.24em] ${dark ? "text-paper/70" : "text-bronze"}`}>
                  {String(index + 1).padStart(2, "0")} / {principle.title}
                </p>
                <h2 className="mt-4 text-[clamp(3rem,5vw,5rem)]">{principle.title}</h2>
                <p className={`mt-6 font-light leading-relaxed ${dark ? "text-paper/80" : "text-stone"}`}>
                  {principle.text}
                </p>
                <p className="mt-8 text-2xl italic md:text-3xl">{principle.note}</p>
              </div>
              <div
                className={`${dark ? "text-paper/85" : "text-ink/80"} ${
                  index % 2 === 0 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                }`}
              >
                <div className={`border p-6 md:p-10 ${dark ? "border-paper/25" : "border-line bg-paper/70"}`}>
                  <LineArt kind={principle.drawing} />
                </div>
              </div>
            </Container>
          </section>
        )
      })}
    </>
  )
}
