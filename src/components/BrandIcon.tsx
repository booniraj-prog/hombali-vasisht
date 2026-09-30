import type { social } from "../data/site.ts"

export type SocialId = (typeof social)[number]["id"]

const iconClass = "h-4 w-4"

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass} fill="none">
      <path
        d="M7.2 3.6h2.05c.42 0 .78.28.9.68l.86 2.72a.95.95 0 0 1-.28.98l-1.48 1.12a11.6 11.6 0 0 0 5.25 5.25l1.12-1.48a.95.95 0 0 1 .98-.28l2.72.86c.4.12.68.48.68.9V16.8c0 .55-.45 1-1 1A14.8 14.8 0 0 1 6.2 4.6c0-.55.45-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass} fill="none">
      <rect x="3" y="5" width="18" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.2 7.4 12 13.1l7.8-5.7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function BrandIcon({ id }: { id: SocialId }) {
  if (id === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path
          fill="currentColor"
          d="M14.9 8.2V6.55c0-.62.4-.85 1.05-.85H17.2V3.2h-2.05C12.55 3.2 11.3 4.55 11.3 6.7v1.5H9.1v2.7h2.2V21h3.15v-9.9h2.35l.4-2.7h-2.3V8.2Z"
        />
      </svg>
    )
  }

  if (id === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass} fill="none">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" />
      </svg>
    )
  }

  if (id === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path
          fill="currentColor"
          d="M6.5 9.2H3.7V20h2.8V9.2ZM5.1 3.8A1.65 1.65 0 1 0 5.12 7.1 1.65 1.65 0 0 0 5.1 3.8ZM20.3 20h-2.8v-5.7c0-1.6-.6-2.6-2-2.6a2.1 2.1 0 0 0-2 1.45 2.7 2.7 0 0 0-.1.95V20H10.6s.04-9.5 0-10.5h2.8v1.7a3.1 3.1 0 0 1 2.7-1.55c1.95 0 3.4 1.28 3.4 4.05V20Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path
        fill="currentColor"
        d="M2.2 19.8h19.6V18H2.2v1.8ZM4 16.6h2.3V8.4H4v8.2Zm4.8 0h2.3V5.6H8.8v11Zm4.9 0h2.3V8.4h-2.3v8.2Zm4.9 0H21V6.8h-2.4v9.8ZM2.2 7.2h19.6V5.4H2.2v1.8Z"
      />
    </svg>
  )
}
