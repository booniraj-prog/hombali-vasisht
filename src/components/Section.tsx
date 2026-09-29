import type { ReactNode } from "react"
import type { DrawingKind } from "../data/types.ts"
import { HeroField } from "./HeroField.tsx"

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-14 ${className}`}>
      {children}
    </div>
  )
}

export function SectionLabel({
  index,
  children,
  tone = "dark",
}: {
  index: string
  children: ReactNode
  tone?: "dark" | "light"
}) {
  return (
    <p
      className={`text-[0.68rem] font-medium uppercase tracking-[0.28em] ${
        tone === "light" ? "text-paper/70" : "text-stone"
      }`}
    >
      <span className={tone === "light" ? "text-sun" : "text-bronze"}>{index}</span>
      <span className="mx-3 opacity-50">/</span>
      {children}
    </p>
  )
}

export function SheetMark({ sheet, title }: { sheet: string; title: string }) {
  return (
    <div className="grid w-max grid-cols-[auto_auto] gap-x-6 gap-y-1 border border-line bg-white/95 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-stone">
      <span>Practice</span>
      <span className="text-ink">Hombali Vasisht</span>
      <span>Sheet</span>
      <span className="text-ink">{sheet}</span>
      <span>Title</span>
      <span className="text-ink">{title}</span>
      <span>Scale</span>
      <span className="text-ink">N.T.S.</span>
    </div>
  )
}

export function PageIntro({
  index,
  kicker,
  title,
  lede,
  sheet,
  drawing,
  image,
}: {
  index: string
  kicker: string
  title: string
  lede: string
  sheet: string
  drawing: DrawingKind
  image: string
}) {
  return (
    <header className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden bg-deep text-paper">
      <HeroField kind={drawing} image={image} />
      <Container className="relative grid gap-10 pt-36 pb-14 lg:grid-cols-12 lg:items-end md:pb-20">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-paper/75 lg:col-span-3">
          <span className="text-sun">{index}</span>
          <span className="mx-3 opacity-50">/</span>
          {kicker}
        </p>
        <div className="lg:col-span-8">
          <h1 className="max-w-4xl text-[clamp(3.1rem,7vw,6.4rem)] text-balance text-paper">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-paper/85">{lede}</p>
        </div>
        <div className="hidden lg:col-span-12 lg:block">
          <SheetMark sheet={sheet} title={kicker} />
        </div>
      </Container>
    </header>
  )
}
