import { useEffect } from "react"
import { pageUrl } from "../data/site.ts"

type Crumb = { name: string; path: string }

export function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  crumbs,
  jsonLd,
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
  noindex?: boolean
  crumbs?: Crumb[]
  jsonLd?: Record<string, unknown>
}) {
  const crumbKey = JSON.stringify(crumbs ?? [])
  const ldKey = JSON.stringify(jsonLd ?? null)

  useEffect(() => {
    const url = pageUrl(path)
    const summary = summarize(description)
    const trail = JSON.parse(crumbKey) as Crumb[]
    const extra = JSON.parse(ldKey) as Record<string, unknown> | null
    document.title = title

    setMeta("name", "description", summary)
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow")
    setMeta("property", "og:title", title)
    setMeta("property", "og:description", summary)
    setMeta("property", "og:type", type)
    setMeta("property", "og:url", url)
    setMeta("property", "og:site_name", "Hombali Vasisht")
    setMeta("property", "og:locale", "en_IN")
    if (image) {
      setMeta("property", "og:image", image)
      setMeta("name", "twitter:image", image)
    }
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary")
    setMeta("name", "twitter:title", title)
    setMeta("name", "twitter:description", summary)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", url)

    const graph: Record<string, unknown>[] = []
    if (trail.length > 0) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: pageUrl(crumb.path),
        })),
      })
    }
    if (extra) graph.push(extra)

    const existing = document.getElementById("page-schema")
    if (graph.length === 0) {
      existing?.remove()
    } else {
      const script = existing ?? document.createElement("script")
      script.id = "page-schema"
      script.setAttribute("type", "application/ld+json")
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": graph,
      })
      if (!existing) document.head.appendChild(script)
    }
  }, [title, description, path, image, type, noindex, crumbKey, ldKey])

  return null
}

function setMeta(attr: "name" | "property", name: string, content: string) {
  const selector = `meta[${attr}="${name}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute("content", content)
}

function summarize(text: string) {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= 170) return clean
  const cut = clean.slice(0, 170)
  const last = cut.lastIndexOf(" ")
  return `${cut.slice(0, last > 90 ? last : 170).trim()}…`
}
