import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { BrandIcon, MailIcon, PhoneIcon } from "./BrandIcon.tsx"
import { navigation, social, studio } from "../data/site.ts"

function isCurrent(pathname: string, item: (typeof navigation)[number]) {
  if (item.end) return pathname === item.to
  if (pathname === item.to || pathname.startsWith(`${item.to}/`)) return true
  return (
    item.children?.some((child) => {
      const path = child.to.split("?")[0]
      return pathname === path || pathname.startsWith(`${path}/`)
    }) ?? false
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<string | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open && !menu) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        setMenu(null)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, menu])

  const linkClass = (active: boolean) =>
    `inline-flex h-10 items-center text-[0.72rem] leading-none uppercase tracking-[0.16em] transition-colors duration-300 ${
      active ? "text-ink" : "text-stone hover:text-ink"
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-ink">
      <div className="relative z-50 bg-deep text-paper">
        <div className="mx-auto flex h-10 w-full max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <a
              href={studio.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 text-[0.72rem] leading-none tracking-wide transition-colors hover:text-sun"
            >
              <PhoneIcon />
              <span>{studio.phone}</span>
            </a>
            <a
              href={`mailto:${studio.email}`}
              aria-label={studio.email}
              className="inline-flex min-w-0 items-center gap-2 text-[0.72rem] leading-none tracking-wide transition-colors hover:text-sun"
            >
              <MailIcon />
              <span className="hidden truncate sm:inline">{studio.email}</span>
            </a>
          </div>
          <ul className="-mr-2 flex shrink-0 items-center" aria-label="Social media">
            {social.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="flex h-8 w-8 items-center justify-center text-paper transition-colors hover:text-sun focus-visible:text-sun focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-sun"
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

      <div className="relative z-50 border-b border-line bg-white">
        <div className="mx-auto flex h-[5.25rem] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link to="/" className="flex items-center" aria-label="Hombali Vasisht, home" onClick={() => setOpen(false)}>
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="Hombali Vasisht Buildings and Blueprints"
              className="h-14 w-auto max-w-[52vw] object-contain object-left sm:h-16 sm:max-w-[280px]"
            />
          </Link>

          <nav className="hidden h-10 items-center gap-8 xl:flex" aria-label="Primary">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative flex h-10 items-center"
                  onMouseEnter={() => setMenu(item.label)}
                  onMouseLeave={() => setMenu(null)}
                  onFocus={() => setMenu(item.label)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setMenu(null)
                  }}
                >
                  <NavLink
                    to={item.to}
                    className={`gap-2 ${linkClass(isCurrent(pathname, item))}`}
                    aria-expanded={menu === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 8"
                      aria-hidden="true"
                      className={`h-1.5 w-2 shrink-0 transition-transform ${menu === item.label ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1.25 6 6.25 11 1.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </NavLink>
                  {menu === item.label ? (
                    <div className="absolute top-full left-0 z-50 min-w-56 pt-3">
                      <ul className="border border-line bg-white py-2" role="menu">
                        {item.children.map((child) => (
                          <li key={child.label} role="none">
                            <NavLink
                              to={child.to}
                              end
                              role="menuitem"
                              className={({ isActive }) =>
                                `block px-5 py-2.5 text-[0.68rem] leading-none uppercase tracking-[0.16em] transition-colors ${
                                  isActive ? "text-ink" : "text-stone hover:text-ink"
                                }`
                              }
                              onClick={() => setMenu(null)}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <button
            type="button"
            className="relative h-10 w-10 xl:hidden"
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
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ivory px-5 pt-40 pb-10 text-ink sm:px-8 xl:hidden"
        >
          <ul className="space-y-5">
            {navigation.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `block text-4xl ${isActive ? "text-bronze" : "text-ink"}`}
                >
                  {item.label}
                </NavLink>
                {item.children ? (
                  <ul className="mt-3 space-y-2 border-l border-line pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.to}
                          end={child.to === "/projects"}
                          onClick={() => setOpen(false)}
                          className="block text-sm tracking-[0.12em] text-stone uppercase hover:text-ink"
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
