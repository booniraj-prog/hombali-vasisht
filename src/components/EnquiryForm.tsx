import { useState, type FormEvent } from "react"
import { studio } from "../data/site.ts"

const projectTypes = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Institutional",
  "Interior Architecture",
  "Renovation & Restoration",
  "Consultation",
  "Not sure yet",
]

type Errors = Partial<Record<"name" | "email" | "projectType" | "site" | "message", string>>

export function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sentName, setSentName] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (String(data.get("company") ?? "").trim()) {
      setSentName(String(data.get("name") ?? "there"))
      return
    }

    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const projectType = String(data.get("projectType") ?? "")
    const site = String(data.get("site") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const next: Errors = {}
    if (name.length < 2) next.name = "Please share your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address."
    if (!projectType) next.projectType = "Select the kind of project."
    if (site.length < 2) next.site = "Where is the site, or the building?"
    if (message.length < 12) next.message = "A few sentences about the site or the question will help."
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const subject = `Project enquiry — ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Project type: ${projectType}`,
      `Site: ${site}`,
      "",
      message,
    ].join("\n")
    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSentName(name)
  }

  if (sentName) {
    return (
      <div className="border-t border-ink pt-8">
        <h2>Thank you, {sentName}.</h2>
        <p className="mt-5 leading-relaxed text-stone">
          Your mail application should open with this enquiry addressed to the studio. If it does not, write
          directly to{" "}
          <a className="text-ink underline decoration-line underline-offset-4" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <Field id="name" label="Name" error={errors.name} autoComplete="name" />
      <Field id="email" label="Email" type="email" error={errors.email} autoComplete="email" />
      <Field id="phone" label="Phone" type="tel" autoComplete="tel" optional />
      <div className="mt-8">
        <label htmlFor="projectType" className="text-xs font-medium uppercase tracking-[0.12em] text-stone">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="field"
          defaultValue=""
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="" disabled>
            Select
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p id="projectType-error" className="mt-2 text-sm text-bronze">
            {errors.projectType}
          </p>
        ) : null}
      </div>
      <Field id="site" label="Site or location" error={errors.site} autoComplete="off" />
      <div className="mt-8">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.12em] text-stone">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field resize-y"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-bronze">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="mt-10 inline-flex border border-sun bg-sun px-8 py-4 text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-500 hover:border-bronze hover:bg-bronze hover:text-paper"
      >
        Send enquiry
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  type = "text",
  error,
  autoComplete,
  optional = false,
}: {
  id: string
  label: string
  type?: string
  error?: string
  autoComplete?: string
  optional?: boolean
}) {
  return (
    <div className="mt-8">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-[0.12em] text-stone">
        {label}
        {optional ? <span className="ml-2 tracking-normal normal-case">optional</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        className="field"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-bronze">
          {error}
        </p>
      ) : null}
    </div>
  )
}
