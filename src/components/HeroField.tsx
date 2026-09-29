import type { DrawingKind } from "../data/types.ts"
import { LineArt } from "./LineArt.tsx"

export function HeroField({ kind, image }: { kind: DrawingKind; image: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/82 via-deep/32 to-transparent" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,197,24,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,197,24,0.28) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div className="absolute top-[16%] right-[-4%] hidden w-[42%] text-paper/55 lg:block">
        <LineArt kind={kind} mode="static" />
      </div>
    </div>
  )
}
