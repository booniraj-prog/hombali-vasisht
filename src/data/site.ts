import type { DrawingKind } from "./types.ts"
import { photo } from "../lib/media.ts"

/**
 * Practice identity, biography, services, and philosophy.
 * Replace this file when the real biography, awards, and contact details are ready.
 */
export const studio = {
  name: "Hombali Vasisht",
  role: "Architect",
  city: "Bengaluru",
  region: "Karnataka, India",
  established: "1988",
  philosophy:
    "Architecture is a patient conversation with climate, material, and the life a building has to hold.",
  hero: {
    src: photo("photo-1773155920824-54413d1a3876", 2400),
    alt: "A sunlit Indian courtyard of carved stone, arched verandahs, and deep balconies.",
  },
  portrait: {
    src: photo("photo-1751214608311-c1e01351426c", 1400),
    alt: "An Indian courtyard of arched stone verandahs.",
    caption: "Light in the room",
  },
  email: "studio@hombalivasisht.in",
  phone: "+91 80 4123 6700",
  phoneHref: "tel:+918041236700",
  address: [
    "57/1, First Floor, East Park Road",
    "15th Cross, Sampige Road",
    "Malleswaram, Bengaluru 560055",
    "India",
  ],
  map: {
    lat: 13.0065,
    lng: 77.5698,
    label: "East Park Road, Malleswaram",
    href: "https://www.google.com/maps/search/?api=1&query=57%2F1%2C+First+Floor%2C+East+Park+Road%2C+15th+Cross%2C+Sampige+Road%2C+Malleswaram%2C+Bengaluru+560055",
    embed:
      "https://maps.google.com/maps?q=57%2F1%2C+East+Park+Road%2C+15th+Cross%2C+Sampige+Road%2C+Malleswaram%2C+Bengaluru+560055&z=16&output=embed",
  },
}

export const pageHeroes = {
  about: photo("photo-1751214608311-c1e01351426c", 2400),
  projects: photo("photo-1757310062384-d3bcfe3026e8", 2400),
  philosophy: photo("photo-1506461883276-594a12b11cf3", 2400),
  services: photo("photo-1667099639128-4b10f464f4a2", 2400),
  journal: photo("photo-1682414181779-591e1c620b4e", 2400),
  contact: photo("photo-1744448365250-9b6aa1a7e4a3", 2400),
  missing: photo("photo-1662264200468-450825d2372c", 2400),
}

export const navigation = [
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Philosophy", to: "/philosophy" },
  { label: "Services", to: "/services" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
]

export const social = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "ArchDaily", href: "https://www.archdaily.com/" },
]

export const stats = [
  { value: "38", label: "Years of practice" },
  { value: "120", label: "Works completed" },
  { value: "18", label: "Towns and cities" },
  { value: "11", label: "Recognitions" },
]

export const education = [
  {
    year: "1984",
    title: "Bachelor of Architecture",
    place: "Sir J.J. College of Architecture, Mumbai",
  },
  {
    year: "1987",
    title: "Master of Architecture, Urban Design",
    place: "CEPT University, Ahmedabad",
  },
]

export const timeline = [
  {
    year: "1988",
    title: "The practice opens",
    text: "A single room near Malleswaram. The first commissions are additions to family houses, drawn at the dining table and built with masons who already knew the weather.",
  },
  {
    year: "1996",
    title: "A library in Malleswaram",
    text: "The first institutional work: a reading room organised around a court, with a verandah deep enough for the afternoon.",
  },
  {
    year: "2004",
    title: "Studio in Malleswaram",
    text: "The office moves to a first-floor room on East Park Road, off Sampige Road. Models stay on the tables. The street outside does the rest of the teaching.",
  },
  {
    year: "2009",
    title: "A public edge",
    text: "Work begins to include landscape and civic rooms — a lake bank, a school court, a shaded arrival — without growing into a large office.",
  },
  {
    year: "2016",
    title: "Recognition, kept quiet",
    text: "A regional honour for a house in Jayamahal. The studio remains four people and a habit of drawing before modelling.",
  },
  {
    year: "2023",
    title: "The mist houses",
    text: "A run of small hospitality works in Kodagu and Chikkamagaluru. Long roofs, laterite, and rooms that look into weather rather than view.",
  },
  {
    year: "Present",
    title: "Still a small practice",
    text: "Commissions are taken personally. The questions have not changed: where is the shade, what is the wall made of, and how does a person cross the day.",
  },
]

export const awards = [
  {
    year: "2009",
    title: "HUDCO Design Award",
    note: "Public realm, citation",
  },
  {
    year: "2014",
    title: "IIA Award for Excellence",
    note: "Residential architecture",
  },
  {
    year: "2016",
    title: "JK Architect of the Year",
    note: "Karnataka chapter",
  },
  {
    year: "2022",
    title: "Aces of Spaces",
    note: "Hospitality, citation",
  },
]

export const affiliations = [
  "Council of Architecture",
  "Indian Institute of Architects",
  "Indian Institute of Interior Designers",
]

export const clients = [
  {
    name: "Private families",
    place: "Indiranagar, Jayamahal, Richmond Town",
    work: "Houses and additions",
  },
  {
    name: "A school trust",
    place: "Whitefield, Bengaluru",
    work: "Learning court",
  },
  {
    name: "Estate owners",
    place: "Kodagu, Karnataka",
    work: "The Verandah",
  },
  {
    name: "A guest-house family",
    place: "Chikkamagaluru",
    work: "Hospitality",
  },
  {
    name: "A chambers partnership",
    place: "Kumara Park, Bengaluru",
    work: "Commercial building",
  },
  {
    name: "A small gallery",
    place: "Museum Road, Bengaluru",
    work: "Rooms and interiors",
  },
  {
    name: "A lakeside trust",
    place: "Hebbal, Bengaluru",
    work: "Public edge",
  },
  {
    name: "An apartment household",
    place: "Lavelle Road, Bengaluru",
    work: "Interior architecture",
  },
]

export const services = [
  {
    title: "Architectural Design",
    summary: "From the first reading of a site to the drawings a building is made from.",
    description:
      "The principal service of the studio. It begins with measured drawing of what is already there — trees, neighbours, slope, light — and ends with a set a contractor can build without invention.",
  },
  {
    title: "Residential Architecture",
    summary: "Houses planned around climate, family life, and the long afternoon.",
    description:
      "Courtyard houses, additions, and new residences in the city and on quieter ground outside it. Plans are organised by shade and by the sequence of a day, not by a catalogue of rooms.",
  },
  {
    title: "Commercial Architecture",
    summary: "Workplaces and small commercial buildings with a civic ground floor.",
    description:
      "Offices, studios, and modest commercial buildings on tight urban plots. The street is treated as a room. Light is borrowed from courts rather than from glass alone.",
  },
  {
    title: "Interior Architecture",
    summary: "Rooms made with the same discipline as the building around them.",
    description:
      "Interiors are not a later decoration. Joinery, lime, stone, and light are drawn with the architecture, whether the shell is new or already standing.",
  },
  {
    title: "Renovation & Restoration",
    summary: "Older buildings repaired with care for what the climate has already tested.",
    description:
      "Colonial bungalows, family houses, and worn public rooms. The work keeps what still performs — verandahs, thick walls, good bones — and replaces what the monsoon has finished.",
  },
  {
    title: "Project Consultation",
    summary: "An independent reading of a site, a plan, or a building in trouble.",
    description:
      "For clients and for other architects. A consultation can be a single study: orientation, a failing plan, a material, or the question of whether to build at all.",
  },
  {
    title: "Design Development",
    summary: "The long middle of a project, where the idea becomes buildable.",
    description:
      "Detail, coordination, and the patient revision of drawings. This is where a courtyard keeps its proportion and a window learns the thickness of its wall.",
  },
  {
    title: "Project Management",
    summary: "Presence on site, so the drawing and the building remain the same work.",
    description:
      "The studio stays with a project through construction. Site visits are drawing visits. Decisions are recorded, not left to memory.",
  },
]

export const process = [
  { index: "01", title: "Listen", text: "The site, the brief, and the life the building has to hold." },
  { index: "02", title: "Draw", text: "Plans, sections, and shade, by hand before they are modelled." },
  { index: "03", title: "Develop", text: "Materials, details, and the thickness of walls." },
  { index: "04", title: "Build", text: "Presence on site until the work can stand alone." },
]

export const principles: {
  id: string
  title: string
  text: string
  note: string
  drawing: DrawingKind
  tone?: "dark"
  image?: string
}[] = [
  {
    id: "form",
    title: "Form",
    text: "Mass is held back. A building in this city should be calm enough to stand beside a rain tree and a neighbour’s compound wall without raising its voice. Silhouettes are long, roofs are honest, and the important gesture is usually a depth rather than a shape.",
    note: "The outline is the last decision, not the first.",
    drawing: "elevation",
  },
  {
    id: "function",
    title: "Function",
    text: "Plans follow the day: arrival, washing, work, meals, rest, and the hour when the house is empty. Circulation is a sequence of shade. A room earns its size by occupation, and a passage is allowed to be narrow if the court beyond it is generous.",
    note: "Use is drawn before furniture.",
    drawing: "plan",
  },
  {
    id: "light",
    title: "Light",
    text: "Bengaluru light is high and clear, and it can be harsh by noon. The studio tempers it with depth, jaali, the thickness of a wall, and courts that take the sky in measure. Morning light is invited. West light is stopped. Darkness is kept as a material, not treated as a failure.",
    note: "Shade is designed with the same care as brightness.",
    drawing: "section",
    tone: "dark",
    image: photo("photo-1757310062384-d3bcfe3026e8", 2000),
  },
  {
    id: "space",
    title: "Space",
    text: "The largest room in a house can hold no furniture. Courts, verandahs, and stair landings do the social work that a living room is often asked to fake. Dimensions are walked, not only drawn. A proportion is kept if it still feels right at full size.",
    note: "Space is what remains after the walls agree.",
    drawing: "courtyard",
  },
  {
    id: "materials",
    title: "Materials",
    text: "Stone, laterite, lime, teak, kadappa, kota, and oxide floors. Materials are chosen because they can age in the weather and be repaired by someone nearby. New materials are welcome when they do a job the old ones cannot — never as a costume.",
    note: "A surface should know how to grow old.",
    drawing: "grid",
  },
  {
    id: "context",
    title: "Context",
    text: "Every site has a tree worth keeping, a neighbour’s window, a slope, a drain, and a memory of what stood there. The building answers those facts. In the city the answer is often a court. On an estate it is often a roof and a long edge.",
    note: "The site is a collaborator with opinions.",
    drawing: "elevation",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    text: "Climate does the first work: orientation, cross ventilation, shade, thermal mass, and water held on the land. Services are quiet and repairable. The most durable energy decision is a room that does not need to be sealed against its own afternoon.",
    note: "Performance begins in the section.",
    drawing: "section",
  },
  {
    id: "human",
    title: "Human experience",
    text: "Architecture is judged by how a person feels at four in the afternoon, when the house is quiet and the floor is cool. The work is for occupation over years: a handrail at the right height, a sill for sitting, a kitchen that can hear the court.",
    note: "The measure is a person, not a photograph.",
    drawing: "plan",
  },
]
