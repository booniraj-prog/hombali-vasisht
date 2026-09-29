import { Link, useParams } from "react-router-dom"
import { getArticle, getNextArticle } from "../data/journal.ts"
import { ImageFrame } from "../components/ImageFrame.tsx"
import { Seo } from "../components/Seo.tsx"
import { HeroField } from "../components/HeroField.tsx"
import { Container } from "../components/Section.tsx"
import { NotFound } from "./NotFound.tsx"

export function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <NotFound />
  const next = getNextArticle(article.slug)

  return (
    <>
      <Seo title={`${article.title} — Hombali Vasisht`} description={article.excerpt} />
      <article>
        <header className="relative flex min-h-[72svh] flex-col justify-end overflow-hidden bg-deep text-paper">
          <HeroField kind="section" image={article.image.src} />
          <Container className="relative max-w-3xl pt-36 pb-16">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-paper/75">
              <Link to="/journal" className="hover:text-sun">
                Journal
              </Link>
              <span className="mx-3">/</span>
              {article.category}
            </p>
            <h1 className="mt-6 text-[clamp(2.8rem,6vw,5rem)] text-balance text-paper">{article.title}</h1>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-paper/70">{article.date}</p>
          </Container>
        </header>
        <Container className="mt-10 max-w-5xl">
          <ImageFrame src={article.image.src} alt={article.image.alt} aspect="aspect-[16/9]" priority hover={false} />
        </Container>
        <Container className="max-w-3xl py-12 md:py-16">
          <blockquote className="border-t border-ink pt-6 text-3xl leading-snug italic md:text-4xl">
            {article.pull}
          </blockquote>
          <div className="mt-10 space-y-6 font-light leading-relaxed text-ink/85">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Next in the journal</p>
          <Link to={`/journal/${next.slug}`} className="text-4xl transition-colors hover:text-bronze">
            {next.title}
          </Link>
        </Container>
      </div>
    </>
  )
}
