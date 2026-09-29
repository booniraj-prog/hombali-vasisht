import { studio } from "../data/site.ts"

export function StudioMap() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-4">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">
          <span className="text-bronze">09</span>
          <span className="mx-3 opacity-50">/</span>
          Location
        </p>
        <h2 className="mt-5 text-[clamp(2.6rem,4.5vw,4.4rem)] text-balance">The studio in Malleswaram.</h2>
        <address className="mt-8 text-sm leading-relaxed not-italic">
          {studio.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <a
          href={studio.map.href}
          className="mt-6 inline-block text-sm text-bronze"
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="h-[420px] overflow-hidden border border-line lg:col-span-8 lg:h-[520px]">
        <iframe
          title="Google Map of the Hombali Vasisht studio at 57/1, East Park Road, Malleswaram, Bengaluru"
          src={studio.map.embed}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  )
}
