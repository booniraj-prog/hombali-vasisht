import { Link } from "react-router-dom"
import { navigation, social, studio } from "../data/site.ts"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-20">
        <div className="lg:col-span-4">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Hombali Vasisht Buildings and Blueprints"
            className="h-auto w-full max-w-[280px] bg-white object-contain"
          />
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-stone">{studio.philosophy}</p>
        </div>

        <nav className="lg:col-span-3" aria-label="Footer">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Index</p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm transition-colors hover:text-bronze">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Studio</p>
          <address className="mt-4 text-sm leading-relaxed not-italic text-ink">
            {studio.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={`mailto:${studio.email}`} className="mt-4 block text-sm hover:text-bronze">
            {studio.email}
          </a>
          <a href={studio.phoneHref} className="mt-1 block text-sm hover:text-bronze">
            {studio.phone}
          </a>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">Follow</p>
          <ul className="mt-4 space-y-2">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm hover:text-bronze"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-5 py-5 text-[0.68rem] uppercase tracking-[0.2em] text-stone sm:flex-row sm:justify-between sm:px-8 lg:px-14">
          <p>
            © {year} {studio.name}
          </p>
          <p>Est. {studio.established} · Bengaluru</p>
        </div>
      </div>
    </footer>
  )
}
