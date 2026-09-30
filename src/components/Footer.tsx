import { Link } from "react-router-dom"
import { BrandIcon } from "./BrandIcon.tsx"
import { navigation, social, studio } from "../data/site.ts"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-20">
        <div className="lg:col-span-4">
          <img
            src={`${import.meta.env.BASE_URL}header-logo.jpg`}
            alt="Hombali Vasisht, Buildings and Blueprints"
            className="h-auto w-full max-w-[280px] object-contain"
          />
          <p className="mt-6 max-w-xs leading-relaxed text-stone">{studio.philosophy}</p>
        </div>

        <nav className="lg:col-span-3" aria-label="Footer">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Index</p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm transition-colors hover:text-bronze">
                  {item.label}
                </Link>
                {item.children && item.children.length <= 3 ? (
                  <ul className="mt-2 space-y-2 border-l border-line pl-4">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to} className="text-sm text-stone transition-colors hover:text-bronze">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Studio</p>
          <address className="mt-4 leading-relaxed not-italic text-ink">
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
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">Follow</p>
          <ul className="-ml-2 mt-4 flex items-center">
            {social.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-bronze focus-visible:text-bronze focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BrandIcon id={item.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-5 py-5 text-xs font-medium uppercase tracking-[0.1em] text-stone sm:flex-row sm:justify-between sm:px-8 lg:px-14">
          <p>
            © {year} {studio.name}
          </p>
          <p>Est. {studio.established} · Bengaluru</p>
        </div>
      </div>
    </footer>
  )
}
