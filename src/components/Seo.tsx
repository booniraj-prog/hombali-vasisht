import { useEffect } from "react"

export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    const ensure = (selector: string, attr: string, name: string, content: string) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attr, name)
        document.head.appendChild(element)
      }
      element.setAttribute("content", content)
    }
    ensure('meta[name="description"]', "name", "description", description)
    ensure('meta[property="og:title"]', "property", "og:title", title)
    ensure('meta[property="og:description"]', "property", "og:description", description)
    ensure('meta[property="og:type"]', "property", "og:type", "website")
  }, [title, description])

  return null
}
