import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
  children: ReactNode
  tone?: "dark" | "light"
  to?: string
  href?: string
}

export function TextLink({ children, tone = "dark", to, href }: Props) {
  const className = `group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] ${
    tone === "light" ? "text-paper" : "text-ink"
  }`
  const content = (
    <>
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0 ${
            tone === "light" ? "bg-paper" : "bg-ink"
          }`}
        />
        <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-sun transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to ?? "/"} className={className}>
      {content}
    </Link>
  )
}
