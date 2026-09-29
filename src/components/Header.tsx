import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navigation, studio } from "../data/site.ts"

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass = (active: boolean) =>
    `text-[0.68rem] uppercase tracking-[0.24em] transition-colors duration-300 ${
      active ? "text-ink" : "text-stone hover:text-ink"
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white text-ink">
      <div className="relative z-50 mx-auto flex h-[5.25rem] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link to="/" className="flex items-center" aria-label="Hombali Vasisht, home">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Hombali Vasisht Buildings and Blueprints"
            className="h-14 w-auto max-w-[62vw] object-contain object-left sm:h-16 sm:max-w-[280px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => linkClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={`absolute left-2 top-[15px] h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-[23px] h-px w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-0 top-0 z-40 flex flex-col justify-between bg-ivory px-6 pt-28 pb-10 text-ink lg:hidden"
        >
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-5xl ${isActive ? "text-bronze" : "text-ink"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone">
            {studio.city} · Est. {studio.established}
          </p>
        </nav>
      ) : null}
    </header>
  )
}
