import { Link } from "react-router-dom"
import { articles } from "../data/journal.ts"
import { pageHeroes } from "../data/site.ts"
import { Seo } from "../components/Seo.tsx"
import { Container, PageIntro } from "../components/Section.tsx"

export function Journal() {
  return (
    <>
      <Seo
        title="Journal — Hombali Vasisht"
        description="Essays and notes from Hombali Vasisht on drawing, materials, courtyards, and the practice of architecture in Bengaluru."
        path="/journal"
        image={pageHeroes.journal}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
        ]}
      />
      <PageIntro
        index="06"
        kicker="Journal"
        title="Notes from the studio"
        sheet="06 / Journal"
        drawing="courtyard"
        image={pageHeroes.journal}
        lede="Short writings on courtyards, materials, schools, and the habit of drawing. A record of how the practice thinks between projects."
      />
      <section className="py-16 md:py-20">
        <Container>
          <div className="border-t border-line">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-line">
                <Link to={`/journal/${article.slug}`} className="group grid gap-6 py-10 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-3">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">{article.date}</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-bronze">{article.category}</p>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="transition-colors duration-500 group-hover:text-bronze">
                      {article.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-stone">{article.excerpt}</p>
                  </div>
                  <div className="overflow-hidden md:col-span-3">
                    <img
                      src={article.image.src}
                      alt={article.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
