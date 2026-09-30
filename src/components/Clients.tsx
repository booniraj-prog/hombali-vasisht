import { clients } from "../data/site.ts"
import { Container, SectionLabel } from "./Section.tsx"

export function Clients({ index = "08", tone = "white" }: { index?: string; tone?: "white" | "ivory" }) {
  return (
    <section id="clients" className={tone === "white" ? "bg-white py-20 md:py-28" : "py-20 md:py-28"}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionLabel index={index}>Clients</SectionLabel>
            <h2 className="mt-5 text-balance">
              The people who commission the work.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-stone lg:col-span-5 lg:col-start-8">
            Families, a school, a few estates, and one small gallery. Names here stand in for the commissions
            and can be replaced with the studio’s own list.
          </p>
        </div>
        <ul className="mt-16 divide-y divide-line border-y border-line">
          {clients.map((client, index) => (
            <li key={client.name} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
              <span className="text-xs font-medium tracking-[0.12em] text-bronze md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4">{client.name}</h3>
              <p className="text-sm text-stone md:col-span-4">{client.work}</p>
              <p className="text-sm text-stone md:col-span-3 md:text-right">{client.place}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
