import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

export function ImageFrame({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
  hover = true,
}: {
  src: string
  alt: string
  aspect?: string
  className?: string
  priority?: boolean
  hover?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <div className={`relative overflow-hidden bg-sand ${aspect} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        width={1600}
        height={2000}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        whileHover={hover && !reduce ? { scale: 1.035 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.35, ease: EASE }}
      />
    </div>
  )
}
