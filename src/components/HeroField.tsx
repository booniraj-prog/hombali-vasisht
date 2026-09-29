import type { DrawingKind } from "../data/types.ts"
import { LineArt } from "./LineArt.tsx"

const companion: Record<DrawingKind, DrawingKind> = {
  plan: "elevation",
  elevation: "plan",
  section: "grid",
  grid: "section",
  courtyard: "elevation",
}

export function HeroField({ kind }: { kind: DrawingKind }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full text-bronze"
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M48 88 H96 M48 88 V136" stroke="currentColor" strokeWidth="1.25" />
        <path d="M1352 88 H1304 M1352 88 V136" stroke="currentColor" strokeWidth="1.25" />
        <path d="M48 712 H96 M48 712 V664" stroke="currentColor" strokeWidth="1.25" />
        <path d="M1352 712 H1304 M1352 712 V664" stroke="currentColor" strokeWidth="1.25" />
        <line x1="120" y1="748" x2="460" y2="748" stroke="currentColor" strokeWidth="1" />
        <line x1="120" y1="740" x2="120" y2="756" stroke="currentColor" strokeWidth="1" />
        <line x1="460" y1="740" x2="460" y2="756" stroke="currentColor" strokeWidth="1" />
        <line x1="290" y1="742" x2="290" y2="754" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="absolute top-[8%] -right-[6%] w-[92%] text-ink/80 sm:w-[72%] lg:top-[6%] lg:w-[56%]">
        <LineArt kind={kind} mode="static" />
      </div>
      <div className="absolute right-[2%] bottom-[4%] hidden w-[34%] text-ink/45 lg:block">
        <LineArt kind={companion[kind]} mode="static" />
      </div>
      <div className="absolute inset-y-0 left-0 w-[82%] bg-gradient-to-r from-white from-[12%] via-white/80 to-transparent lg:w-[58%]" />
    </div>
  )
}
