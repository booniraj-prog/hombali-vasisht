export const categories = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Institutional",
  "Interior Architecture",
  "Urban / Landscape",
] as const

export type Category = (typeof categories)[number]

export type DrawingKind = "plan" | "elevation" | "section" | "grid" | "courtyard"

export type Picture = {
  src: string
  alt: string
}
