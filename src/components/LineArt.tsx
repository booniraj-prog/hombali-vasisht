import { motion, useReducedMotion, type Transition } from "framer-motion"
import type { ReactNode } from "react"
import type { DrawingKind } from "../data/types.ts"

const EASE = [0.22, 1, 0.36, 1] as const

type Mode = "load" | "view" | "static"

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinejoin: "miter" as const,
  strokeLinecap: "square" as const,
}

function useDraw(mode: Mode) {
  const reduce = useReducedMotion()
  return (delay = 0) => {
    if (reduce || mode === "static") return { initial: false as const }
    const transition: Transition = { duration: 2.2, ease: EASE, delay }
    if (mode === "load") {
      return {
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition,
      }
    }
    return {
      initial: { pathLength: 0 },
      whileInView: { pathLength: 1 },
      viewport: { once: true, amount: 0.2 },
      transition,
    }
  }
}

type DrawingProps = {
  mode?: Mode
  className?: string
}

function Sheet({
  children,
  className = "",
  viewBox,
}: {
  children: ReactNode
  className?: string
  viewBox: string
}) {
  return (
    <svg
      viewBox={viewBox}
      className={`h-auto w-full ${className}`}
      aria-hidden="true"
      fill="none"
    >
      {children}
    </svg>
  )
}

function FloorPlan({ mode = "view", className }: DrawingProps) {
  const draw = useDraw(mode)
  const walls: [number, number, number, number][] = [
    [28, 28, 572, 28],
    [572, 28, 572, 372],
    [572, 372, 28, 372],
    [28, 372, 28, 28],
    [28, 168, 188, 168],
    [248, 168, 390, 168],
    [390, 28, 390, 250],
    [188, 28, 188, 120],
    [188, 210, 188, 300],
    [28, 300, 188, 300],
    [248, 250, 390, 250],
    [390, 250, 500, 250],
    [500, 168, 572, 168],
    [248, 78, 340, 78],
    [340, 78, 340, 168],
    [248, 168, 248, 78],
    [248, 78, 248, 28],
  ]
  return (
    <Sheet viewBox="0 0 600 420" className={className}>
      {walls.map(([x1, y1, x2, y2], index) => (
        <motion.line key={index} x1={x1} y1={y1} x2={x2} y2={y2} {...stroke} {...draw(index * 0.035)} />
      ))}
      <motion.path d="M188 168 A 26 26 0 0 1 214 142" {...stroke} {...draw(0.7)} />
      <motion.path d="M390 168 A 22 22 0 0 0 368 146" {...stroke} {...draw(0.78)} />
      <motion.line x1="470" y1="46" x2="470" y2="92" {...stroke} {...draw(0.9)} />
      <motion.path d="M470 46 L464 58 L476 58 Z" {...stroke} {...draw(0.95)} />
      <text x="294" y="128" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11" letterSpacing="3">
        COURT
      </text>
      <text x="470" y="42" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10">
        N
      </text>
    </Sheet>
  )
}

function Courtyard({ mode = "view", className }: DrawingProps) {
  const draw = useDraw(mode)
  return (
    <Sheet viewBox="0 0 420 420" className={className}>
      <motion.rect x="24" y="24" width="372" height="372" {...stroke} {...draw(0)} />
      <motion.rect x="118" y="118" width="184" height="184" {...stroke} {...draw(0.25)} />
      {[70, 210, 350].map((value, index) => (
        <motion.line
          key={`v-${value}`}
          x1={value}
          y1="24"
          x2={value}
          y2="396"
          {...stroke}
          {...draw(0.4 + index * 0.08)}
        />
      ))}
      {[70, 210, 350].map((value, index) => (
        <motion.line
          key={`h-${value}`}
          x1="24"
          y1={value}
          x2="396"
          y2={value}
          {...stroke}
          {...draw(0.55 + index * 0.08)}
        />
      ))}
      <text x="210" y="214" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11" letterSpacing="4">
        COURT
      </text>
    </Sheet>
  )
}

function Elevation({ mode = "view", className }: DrawingProps) {
  const draw = useDraw(mode)
  return (
    <Sheet viewBox="0 0 640 360" className={className}>
      <motion.line x1="20" y1="292" x2="620" y2="292" {...stroke} {...draw(0)} />
      <motion.rect x="70" y="168" width="160" height="124" {...stroke} {...draw(0.1)} />
      <motion.rect x="230" y="96" width="150" height="196" {...stroke} {...draw(0.2)} />
      <motion.rect x="380" y="188" width="180" height="104" {...stroke} {...draw(0.3)} />
      <motion.line x1="54" y1="168" x2="246" y2="168" {...stroke} {...draw(0.4)} />
      <motion.line x1="214" y1="96" x2="396" y2="96" {...stroke} {...draw(0.45)} />
      <motion.line x1="364" y1="188" x2="576" y2="188" {...stroke} {...draw(0.5)} />
      {[
        [96, 206, 46, 58],
        [154, 206, 46, 58],
        [258, 140, 40, 64],
        [312, 140, 40, 64],
        [258, 220, 40, 46],
        [312, 220, 40, 46],
        [412, 214, 50, 48],
        [478, 214, 50, 48],
      ].map(([x, y, w, h], index) => (
        <motion.rect key={index} x={x} y={y} width={w} height={h} {...stroke} {...draw(0.6 + index * 0.04)} />
      ))}
      <motion.line x1="40" y1="292" x2="40" y2="214" {...stroke} {...draw(0.85)} />
      <motion.circle cx="40" cy="196" r="22" {...stroke} {...draw(0.95)} />
    </Sheet>
  )
}

function SectionDrawing({ mode = "view", className }: DrawingProps) {
  const draw = useDraw(mode)
  return (
    <Sheet viewBox="0 0 640 380" className={className}>
      <motion.polyline
        points="36,270 90,270 90,150 210,92 360,92 360,168 520,168 520,270 600,270"
        {...stroke}
        {...draw(0)}
      />
      <motion.line x1="90" y1="196" x2="360" y2="196" {...stroke} {...draw(0.25)} />
      <motion.line x1="360" y1="214" x2="520" y2="214" {...stroke} {...draw(0.32)} />
      <motion.line x1="250" y1="110" x2="250" y2="196" {...stroke} {...draw(0.4)} />
      <motion.rect x="150" y="150" width="54" height="46" {...stroke} {...draw(0.5)} />
      {Array.from({ length: 22 }, (_, index) => (
        <motion.line
          key={index}
          x1={36 + index * 26}
          y1="270"
          x2={50 + index * 26}
          y2="292"
          {...stroke}
          {...draw(0.45)}
        />
      ))}
      <motion.circle cx="180" cy="228" r="7" {...stroke} {...draw(0.7)} />
      <motion.path d="M180 235 V256 M180 242 H170 M180 242 H190 M180 256 L172 270 M180 256 L188 270" {...stroke} {...draw(0.78)} />
    </Sheet>
  )
}

function ColumnGrid({ mode = "view", className }: DrawingProps) {
  const draw = useDraw(mode)
  const cols = [80, 200, 320, 440]
  const rows = [70, 170, 270]
  return (
    <Sheet viewBox="0 0 520 360" className={className}>
      {cols.map((x, index) => (
        <motion.line key={`c-${x}`} x1={x} y1="28" x2={x} y2="312" {...stroke} {...draw(index * 0.08)} />
      ))}
      {rows.map((y, index) => (
        <motion.line key={`r-${y}`} x1="40" y1={y} x2="480" y2={y} {...stroke} {...draw(0.3 + index * 0.08)} />
      ))}
      {cols.flatMap((x) =>
        rows.map((y) => (
          <motion.circle key={`${x}-${y}`} cx={x} cy={y} r="5" {...stroke} {...draw(0.6)} />
        )),
      )}
      {["A", "B", "C", "D"].map((label, index) => (
        <text
          key={label}
          x={cols[index]}
          y="338"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontSize="12"
          letterSpacing="1"
        >
          {label}
        </text>
      ))}
      {["1", "2", "3"].map((label, index) => (
        <text key={label} x="22" y={rows[index] + 4} fill="currentColor" stroke="none" fontSize="12">
          {label}
        </text>
      ))}
    </Sheet>
  )
}

const drawings = {
  plan: FloorPlan,
  courtyard: Courtyard,
  elevation: Elevation,
  section: SectionDrawing,
  grid: ColumnGrid,
}

export function LineArt({
  kind,
  mode = "view",
  className = "",
}: {
  kind: DrawingKind
  mode?: Mode
  className?: string
}) {
  const Drawing = drawings[kind]
  return <Drawing mode={mode} className={className} />
}
