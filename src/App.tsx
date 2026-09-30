import { useEffect } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Footer } from "./components/Footer.tsx"
import { Header } from "./components/Header.tsx"
import { studio } from "./data/site.ts"
import { About } from "./pages/About.tsx"
import { Build } from "./pages/Build.tsx"
import { Article } from "./pages/Article.tsx"
import { Contact } from "./pages/Contact.tsx"
import { Home } from "./pages/Home.tsx"
import { Journal } from "./pages/Journal.tsx"
import { Leadership } from "./pages/Leadership.tsx"
import { NotFound } from "./pages/NotFound.tsx"
import { Philosophy } from "./pages/Philosophy.tsx"
import { ProjectDetail } from "./pages/ProjectDetail.tsx"
import { Projects } from "./pages/Projects.tsx"
import { Services } from "./pages/Services.tsx"

const EASE = [0.22, 1, 0.36, 1] as const

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <PracticeSchema />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <RouteTransition />
      <Footer />
    </BrowserRouter>
  )
}

function RouteTransition() {
  const location = useLocation()
  const reduce = useReducedMotion()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main"
        key={location.pathname}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduce ? undefined : { opacity: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/build" element={<Build />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = "auto"
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [pathname])
  return null
}

function PracticeSchema() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = "practice-schema"
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: studio.name,
      description: studio.philosophy,
      url: window.location.origin,
      email: studio.email,
      telephone: studio.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "57/1, First Floor, East Park Road, 15th Cross, Sampige Road, Malleswaram",
        addressLocality: "Bengaluru",
        postalCode: "560055",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: "Bengaluru",
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])
  return null
}
