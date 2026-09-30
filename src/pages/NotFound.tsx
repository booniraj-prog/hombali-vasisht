import { pageHeroes } from "../data/site.ts"
import { HeroField } from "../components/HeroField.tsx"
import { Seo } from "../components/Seo.tsx"
import { Container } from "../components/Section.tsx"
import { TextLink } from "../components/TextLink.tsx"

export function NotFound() {
  return (
    <>
      <Seo title="Page not found — Hombali Vasisht" description="This page is not part of the Hombali Vasisht practice site." />
      <section className="relative min-h-[78svh] overflow-hidden bg-deep text-paper">
        <HeroField kind="grid" image={pageHeroes.missing} />
        <Container className="relative flex min-h-[78svh] flex-col justify-end pt-40 pb-16 md:pt-44 md:pb-20">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-paper/70">404 / Sheet missing</p>
        <h1 className="mt-4 text-[clamp(3.4rem,8vw,6.5rem)] text-paper">This page is not on the drawing.</h1>
        <p className="mt-6 max-w-md font-light text-paper/80">The address does not match a project, essay, or page in the studio index.</p>
        <div className="mt-10">
          <TextLink to="/" tone="light">Return home</TextLink>
        </div>
        </Container>
      </section>
    </>
  )
}
