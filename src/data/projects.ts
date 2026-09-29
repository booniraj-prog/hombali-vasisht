import type { Category, DrawingKind, Picture } from "./types.ts"
import { photo } from "../lib/media.ts"

export type Project = {
  slug: string
  title: string
  location: string
  year: string
  category: Category
  summary: string
  overview: string
  concept: string
  materials: string[]
  challenges: { title: string; text: string }[]
  details: { label: string; value: string }[]
  hero: Picture
  gallery: Picture[]
  drawing: DrawingKind
  selected?: boolean
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "courtyard-house-indiranagar",
    title: "Courtyard House",
    location: "Indiranagar, Bengaluru",
    year: "2019",
    category: "Residential",
    selected: true,
    drawing: "courtyard",
    summary:
      "A family house gathered around a planted court that cools the plan and holds the day.",
    overview:
      "Built for a family of three generations on a deep urban plot in Indiranagar, the house turns away from the street and inward to a court of frangipani and kota. Rooms open to this centre by verandahs rather than by glass walls, so the interior stays shaded while the sky remains present.",
    concept:
      "The court is the largest room and the only one without a ceiling. Around it, the plan is a slow ring: entrance, sitting, dining, and a stair that pauses at a landing wide enough to read. The upper floor steps back so the court keeps its light. A thin water rill along the eastern edge cools the breeze before it enters the hall.",
    materials: ["Lime plaster", "Exposed concrete", "Teak joinery", "Kota stone", "Oxide flooring"],
    challenges: [
      {
        title: "A narrow front to a busy street",
        text: "The house offers the road a quiet wall and a single shaded gate. Life is organised behind it, so privacy does not depend on curtains.",
      },
      {
        title: "Three generations, one plan",
        text: "An elder’s room sits on the ground floor with its own court edge and a washroom that does not require a stair. The upper rooms belong to the younger family without dividing the house into two addresses.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2019" },
      { label: "Site area", value: "1,080 sq m" },
      { label: "Built area", value: "640 sq m" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1773155920824-54413d1a3876"),
      alt: "A historic Indian courtyard of pink stone, balconies, and arches.",
    },
    gallery: [
      {
        src: photo("photo-1751214608311-c1e01351426c"),
        alt: "Arched walkways around a planted Indian courtyard.",
      },
      {
        src: photo("photo-1705572243594-0f6b1e60915d"),
        alt: "A stone court with arches in Old Delhi.",
      },
      {
        src: photo("photo-1662264200468-450825d2372c"),
        alt: "A courtyard looking toward Nahargarh Fort, Jaipur.",
      },
    ],
  },
  {
    slug: "stone-and-shade-jayamahal",
    title: "Stone and Shade",
    location: "Jayamahal, Bengaluru",
    year: "2021",
    category: "Residential",
    selected: true,
    drawing: "elevation",
    summary:
      "A residence of local granite, deep overhangs, and rooms that face a rain-tree garden.",
    overview:
      "The site held a mature rain tree and a fall toward the west. The house was set behind the tree, with its long side to the north garden and a heavy overhang to the west. Granite from nearby quarries forms the base; lime-washed walls sit above it, so the building reads as weight below and quiet above.",
    concept:
      "Shade was drawn before the object. A two-metre overhang, a jaali at the stair, and a verandah that runs the length of the garden make the afternoon habitable without closing the rooms. The tree was surveyed and the foundation threaded between its roots.",
    materials: ["Local granite", "Lime wash", "Teak", "Kadappa", "Terracotta jaali"],
    challenges: [
      {
        title: "Keeping the rain tree",
        text: "The plan bends around the canopy. No root zone was cut for parking. The drive approaches from the side and stops short of the drip line.",
      },
      {
        title: "West light on an open garden",
        text: "The overhang and a row of operable teak screens take the west sun. In the monsoon the screens fold away and the garden comes back into the room.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2021" },
      { label: "Site area", value: "1,450 sq m" },
      { label: "Built area", value: "720 sq m" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1757310062384-d3bcfe3026e8"),
      alt: "The pink sandstone screen of Hawa Mahal, Jaipur.",
    },
    gallery: [
      {
        src: photo("photo-1524229648276-e66561fe45a9"),
        alt: "The honeycomb façade of Hawa Mahal.",
      },
      {
        src: photo("photo-1582510003544-4d00b7f74220"),
        alt: "Carved sandstone windows of an Indian palace.",
      },
      {
        src: photo("photo-1695395550316-8995ae9d35ff"),
        alt: "A tall Indian palace front of repeated arches and jali.",
      },
    ],
  },
  {
    slug: "kumara-park-chambers",
    title: "Kumara Park Chambers",
    location: "Kumara Park, Bengaluru",
    year: "2016",
    category: "Commercial",
    selected: true,
    drawing: "grid",
    summary:
      "A quiet commercial building on a tight plot, lit by a narrow court and a shaded lobby.",
    overview:
      "Four floors of studios and small offices sit above a public ground floor of stone and shadow. The plot is only fourteen metres wide. Rather than a glass front, the building holds a slot of open air through its centre, so each floor borrows light without facing the traffic.",
    concept:
      "The structural grid is deliberately visible and calm: a bay that repeats, a court that interrupts it, and a stair that is the social room of the building. The ground floor is given to the street as a deep lobby, not a shopfront. Upper floors are leased as rooms with windows of ordinary size.",
    materials: ["Pigmented concrete", "Shahabad stone", "Mild steel", "Clear glass in small panes", "Lime plaster"],
    challenges: [
      {
        title: "Light without a glass wall",
        text: "The central court and a north light monitor bring daylight to the middle of a plan that would otherwise be a corridor. Glazing is used where a person sits, not as a façade costume.",
      },
      {
        title: "A commercial brief with a civic ground",
        text: "The client needed lettable area. The studio held the ground floor as a tall, unlet lobby. The building pays for that generosity in the way people enter it.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2016" },
      { label: "Site area", value: "680 sq m" },
      { label: "Built area", value: "1,960 sq m" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1667099639128-4b10f464f4a2"),
      alt: "The red sandstone courts of City Palace, Jaipur.",
    },
    gallery: [
      {
        src: photo("photo-1548013146-72479768bada"),
        alt: "India Gate, a civic arch in New Delhi.",
      },
      {
        src: photo("photo-1506461883276-594a12b11cf3"),
        alt: "The Lotus Temple in Delhi, a public building beside water.",
      },
      {
        src: photo("photo-1743136648410-a73d5c9dbaab"),
        alt: "India Gate seen across its ceremonial ground.",
      },
    ],
  },
  {
    slug: "the-verandah-coorg",
    title: "The Verandah",
    location: "Kodagu, Karnataka",
    year: "2022",
    category: "Hospitality",
    featured: true,
    selected: true,
    drawing: "plan",
    summary:
      "A small hotel of long verandahs and laterite walls, set lightly among coffee shade.",
    overview:
      "Twelve rooms on a coffee estate in Kodagu, arranged as a loose court rather than a block. Guests arrive under a roof that continues as a verandah, and the rooms look into shade, not into a cleared view. The landscape was already the architecture. The building tries not to improve it.",
    concept:
      "A single roof geometry shelters rooms, a dining hall, and an open sit-out. Laterite is left visible. Floors are oxide, dark enough to hold the forest light. There is no lobby larger than the verandah. Rain is collected along the long edge and taken to the estate’s existing tanks.",
    materials: ["Laterite", "Oxide floor", "Reclaimed teak", "Mangalore tile", "Lime plaster"],
    challenges: [
      {
        title: "Building in a working estate",
        text: "Construction was phased around the coffee calendar. The structure sits between existing rows, and not a shade tree on the approach was removed for the drive.",
      },
      {
        title: "Rain, every afternoon",
        text: "The verandah is the circulation. Guests move in weather without opening an umbrella. Roofs overhang far enough that the laterite base stays dry.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2022" },
      { label: "Site area", value: "Estate edge, 3.2 acres" },
      { label: "Built area", value: "980 sq m" },
      { label: "Rooms", value: "12" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1744448365250-9b6aa1a7e4a3"),
      alt: "A tropical Indian house among palms, with a long shaded edge.",
    },
    gallery: [
      {
        src: photo("photo-1713026511073-853c2c3d2f7e"),
        alt: "A brick house with a planted terrace.",
      },
      {
        src: photo("photo-1682414181779-591e1c620b4e"),
        alt: "A painted haveli in Rajasthan.",
      },
      {
        src: photo("photo-1477587458883-47145ed94245"),
        alt: "A street of traditional buildings in Jaipur.",
      },
    ],
  },
  {
    slug: "learning-court-whitefield",
    title: "Learning Court",
    location: "Whitefield, Bengaluru",
    year: "2018",
    category: "Institutional",
    drawing: "plan",
    summary:
      "A primary school planned as a series of courts, with classrooms open to covered play.",
    overview:
      "A primary school for four hundred children on a flat site in Whitefield. The brief asked for security and air-conditioning. The built work offers a shaded campus that can be secured at its edge, and classrooms that breathe toward covered courts for most of the year.",
    concept:
      "Three courts organise the school: arrival, play, and a quieter garden for the youngest children. Classrooms are pairs under a continuous roof, with a verandah wide enough for a class to sit outside. North light enters high. The south and west are protected by the thickness of circulation.",
    materials: ["Pigmented concrete", "Clay jaali", "Kota stone", "Bamboo screens", "White lime"],
    challenges: [
      {
        title: "Security without a closed box",
        text: "The compound is secure at the boundary. Inside, children move between courts without passing through corridors that feel like institutions. Gates are few and legible.",
      },
      {
        title: "A demand for sealed rooms",
        text: "A portion of the upper floor can be cooled for the hottest weeks. The rest of the school is designed to work with fans, shade, and cross ventilation, and it does.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2018" },
      { label: "Site area", value: "6,200 sq m" },
      { label: "Built area", value: "3,400 sq m" },
      { label: "Capacity", value: "400 children" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1751214608311-c1e01351426c"),
      alt: "The arched courts of the Indian Museum, Kolkata.",
    },
    gallery: [
      {
        src: photo("photo-1599661046289-e31897846e41"),
        alt: "A sandstone fort and palace complex in Rajasthan.",
      },
      {
        src: photo("photo-1506461883276-594a12b11cf3"),
        alt: "The Lotus Temple in Delhi, seen across its pools.",
      },
      {
        src: photo("photo-1705572243594-0f6b1e60915d"),
        alt: "Stone arches around a court at the Qutub complex, Delhi.",
      },
    ],
  },
  {
    slug: "lavelle-road-interiors",
    title: "Lavelle Road Rooms",
    location: "Lavelle Road, Bengaluru",
    year: "2020",
    category: "Interior Architecture",
    drawing: "section",
    summary:
      "A city apartment remade in lime, teak, and a library that holds the evening.",
    overview:
      "An apartment in an ordinary 1990s block, two floors below the studio’s own office. The shell could not change. Everything else could: the sequence of rooms, the depth of storage, and the quality of surfaces under Bengaluru’s hard daylight.",
    concept:
      "A library wall becomes the centre of the home, not a television. Lime replaces acrylic paint. Teak is used once, in a long piece of joinery, rather than everywhere. The balcony is brought into the plan with a stone sill deep enough to sit on, so the city is a ledge and not a view to be framed.",
    materials: ["Lime plaster", "Teak joinery", "Shahabad", "Linen", "Brass"],
    challenges: [
      {
        title: "A structure that could not move",
        text: "Columns land in awkward places. The joinery absorbs them. What looks like a thick library wall is, in parts, a column doing a second job.",
      },
      {
        title: "Evening glare from the west",
        text: "Sheer linen and a deep reveal cut the west light without darkening the room at noon. The library is placed on the east, where reading survives the afternoon.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2020" },
      { label: "Area", value: "210 sq m" },
      { label: "Scope", value: "Interior architecture" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1682414181779-591e1c620b4e"),
      alt: "A painted haveli façade in Mandawa, Rajasthan.",
    },
    gallery: [
      {
        src: photo("photo-1773155920824-54413d1a3876"),
        alt: "Balconies and arches around a Jaipur palace court.",
      },
      {
        src: photo("photo-1524229648276-e66561fe45a9"),
        alt: "Jali screens in pink sandstone.",
      },
      {
        src: photo("photo-1695395550316-8995ae9d35ff"),
        alt: "A palace elevation of repeated arched openings.",
      },
    ],
  },
  {
    slug: "lake-edge-walk-hebbal",
    title: "Lake Edge Walk",
    location: "Hebbal, Bengaluru",
    year: "2015",
    category: "Urban / Landscape",
    drawing: "elevation",
    summary:
      "A public edge along the lake: a stone path, a pause pavilion, and a repaired bank.",
    overview:
      "A short civic project for a stretch of lake edge that had become a dump and a fence. The work is modest on purpose: a stone path, a place to sit, planting that holds the bank, and a small pavilion for shade. It does not pretend to restore the whole lake.",
    concept:
      "The path follows the water without railing it off as a spectacle. At two points it widens into a seat. The pavilion is a roof on four columns, open on all sides, so it cannot be locked into a private use. Planting is native and dense enough to discourage new encroachment.",
    materials: ["Granite setts", "Exposed concrete", "Native planting", "Laterite edging"],
    challenges: [
      {
        title: "A public edge with private pressure",
        text: "The pavilion has no walls to capture. Benches face the water and each other. The design makes enclosure difficult without making the place unfriendly.",
      },
      {
        title: "A bank that was failing",
        text: "Laterite and planting do the structural work of the edge. Concrete is limited to the pavilion and the path, so the water still meets soil.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2015" },
      { label: "Length", value: "280 metres" },
      { label: "Scope", value: "Public edge and pavilion" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1506461883276-594a12b11cf3"),
      alt: "The Lotus Temple in Delhi, a white public building beside still water.",
    },
    gallery: [
      {
        src: photo("photo-1705927122615-02dcef3b1465"),
        alt: "India Gate at sunrise, Delhi.",
      },
      {
        src: photo("photo-1599661046289-e31897846e41"),
        alt: "Fort walls and palace stone in Rajasthan.",
      },
      {
        src: photo("photo-1477587458883-47145ed94245"),
        alt: "The pink city of Jaipur, seen along a street.",
      },
    ],
  },
  {
    slug: "richmond-town-bungalow",
    title: "Richmond Town Bungalow",
    location: "Richmond Town, Bengaluru",
    year: "2012",
    category: "Residential",
    drawing: "elevation",
    summary:
      "The careful restoration of a colonial bungalow, keeping its verandah and repairing what the climate had worn away.",
    overview:
      "A one-storey bungalow from the early twentieth century, altered over decades and tired in its bones. The family wished to stay. The work stripped later accretions, rebuilt the verandah where it had been enclosed, and replaced roof timber that could no longer be trusted.",
    concept:
      "Restoration here means performance as much as appearance. The verandah is returned because it cools the rooms, not because it is picturesque. Lime replaces cement on the old masonry. New bathrooms are placed in a side wing so the principal rooms keep their proportions. A kitchen that had migrated to a back verandah is given a proper room without eating the court.",
    materials: ["Lime mortar", "Reclaimed teak", "Mangalore tile", "Athangudi-style oxide", "Brass hardware"],
    challenges: [
      {
        title: "Structure that had been quietly failing",
        text: "Roof members were opened and tested. What could be saved was sistered and kept visible in the verandah ceiling. What could not was replaced in the same species, not in steel pretending to be timber.",
      },
      {
        title: "A house still being lived in",
        text: "The work was phased room by room. The family did not move out. Drawings were revised on site each week against what the walls actually contained.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2012" },
      { label: "Original", value: "Early 20th century" },
      { label: "Built area", value: "480 sq m" },
      { label: "Scope", value: "Restoration and addition" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1477587458883-47145ed94245"),
      alt: "Older buildings along a street in Jaipur.",
    },
    gallery: [
      {
        src: photo("photo-1682414181779-591e1c620b4e"),
        alt: "A Rajasthani haveli with painted walls.",
      },
      {
        src: photo("photo-1667099639128-4b10f464f4a2"),
        alt: "Red sandstone buildings of City Palace, Jaipur.",
      },
      {
        src: photo("photo-1776966892086-c0f6cdf3380f"),
        alt: "Hawa Mahal rising above a Jaipur street.",
      },
    ],
  },
  {
    slug: "chikmagalur-guest-house",
    title: "Guest House, Chikkamagaluru",
    location: "Chikkamagaluru, Karnataka",
    year: "2023",
    category: "Hospitality",
    drawing: "section",
    summary:
      "A guest house on a tea estate, with a long roof, a fire court, and rooms that look into mist.",
    overview:
      "Six rooms for an estate that already had a family house and did not want a hotel. Guests are friends, buyers, and the occasional writer. The building sits below the ridge so it does not take the family’s view, and it looks instead into a fold of tea and morning mist.",
    concept:
      "A long roof, split by a court with a fire and a stone seat. Rooms are pairs, each with a sitting ledge at the window. The section is the project: a high sleeping side, a low bath, and a roof that drains to a tank the estate already used. Materials are those the hill towns can repair.",
    materials: ["Laterite", "Black granite", "Mangalore tile", "Teak", "Lime"],
    challenges: [
      {
        title: "Mist, damp, and a short building season",
        text: "Work stopped for the heaviest months. Lime was given time. The roof was closed before the interiors began, so nothing was finished in the wet.",
      },
      {
        title: "Not a hotel",
        text: "There is no reception desk and no back-of-house performance. A pantry serves the court. The plan refuses the amenities that would have turned a guest house into a brand.",
      },
    ],
    details: [
      { label: "Status", value: "Completed, 2023" },
      { label: "Built area", value: "540 sq m" },
      { label: "Rooms", value: "6" },
      { label: "Principal", value: "Hombali Vasisht" },
    ],
    hero: {
      src: photo("photo-1662264200468-450825d2372c"),
      alt: "Courts in the foreground, with Nahargarh Fort beyond.",
    },
    gallery: [
      {
        src: photo("photo-1744448365250-9b6aa1a7e4a3"),
        alt: "A tropical house shaded by palms.",
      },
      {
        src: photo("photo-1713026511073-853c2c3d2f7e"),
        alt: "A brick house opening onto a planted court.",
      },
      {
        src: photo("photo-1582510003544-4d00b7f74220"),
        alt: "Sandstone jali, cut to break the sun.",
      },
    ],
  },
]

export function getProject(slug: string | undefined) {
  if (!slug) return undefined
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return projects[0]
  return projects[(index + 1) % projects.length]
}
