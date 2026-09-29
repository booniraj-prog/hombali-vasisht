import type { Picture } from "./types.ts"
import { photo } from "../lib/media.ts"

export type Article = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  pull: string
  paragraphs: string[]
  image: Picture
}

export const articles: Article[] = [
  {
    slug: "courtyards-and-the-bengaluru-afternoon",
    title: "On Courtyards and the Bengaluru Afternoon",
    date: "March 2024",
    category: "Essay",
    excerpt:
      "A court is not a style. In this city it is a way of holding heat, family, and a piece of sky on a plot that no longer has a garden.",
    pull: "The court is the room that makes the other rooms possible.",
    image: {
      src: photo("photo-1773155920824-54413d1a3876", 1600),
      alt: "An Indian palace courtyard of arches and balconies.",
    },
    paragraphs: [
      "Bengaluru still sells itself as a garden city, and on many plots the garden has become a driveway. The courtyard is what remains of the idea that a house should contain some weather of its own. It is not a nostalgic device. It is a practical one: a shaft of sky, a place for a tree, a way for air to cross a plan that the setbacks have squeezed.",
      "In the houses of this practice the court is drawn first. Rooms arrange themselves around the consequence. A dining table can face it. A stair can pause beside it. An elder’s room can take it without climbing. The alternative — a living room pressed to a boundary wall and a light well the size of a duct — is what the bylaws produce if nobody argues.",
      "There is a discipline to the size. Too small, and the court is a vent. Too large, and it becomes a yard nobody sits in, hot at noon and empty of shade. The useful court in this climate is often the width of a room, planted, paved in stone that can be hosed, and edged by a verandah deep enough for a chair in the rain.",
      "Clients sometimes ask for the court to be covered later, in glass, “to make it usable.” It was already usable. The covering is usually a wish for air-conditioning, and it ends the very thing the plan was built to do. We leave the sky where it is.",
    ],
  },
  {
    slug: "drawing-before-deciding",
    title: "Drawing Before Deciding",
    date: "November 2023",
    category: "Note",
    excerpt:
      "The studio still begins on paper. A model can persuade too early. A line is easier to doubt.",
    pull: "A line is easier to doubt than a rendering, and doubt is part of the work.",
    image: {
      src: photo("photo-1757310062384-d3bcfe3026e8", 1600),
      alt: "Sandstone jali screens on an Indian palace front.",
    },
    paragraphs: [
      "The first weeks of a project in this office are stubbornly slow. We measure what is there, including the tree nobody mentioned, and we draw it. Plans are tried in pencil. Sections are cut through the afternoon sun, not only through the stair. The computer is open. It is not in charge yet.",
      "A rendering is a confident object. It invites agreement before the plan deserves it. Clients, quite reasonably, fall for the light in the picture. The light in the picture has not yet met the neighbour’s first floor. Drawing keeps the conversation at the altitude of a decision: this wall, this depth, this opening, this doubt.",
      "None of this is a romance of the hand. Drawings are scanned, shared, and built from. The point is the order of operations. Decide in a medium that is cheap to change. Develop in a medium that can coordinate. Visit the site often enough that the drawing remains a description of a place, not of itself.",
      "Students ask whether this is still a responsible method. It is slower at the start and faster on site, which is the only speed that matters to a building.",
    ],
  },
  {
    slug: "laterite-lime-and-the-weather",
    title: "Laterite, Lime, and the Weather",
    date: "June 2023",
    category: "Essay",
    excerpt:
      "Materials earn their place by how they behave after the tenth monsoon, not by how they photograph on the first.",
    pull: "A surface should know how to grow old in public.",
    image: {
      src: photo("photo-1582510003544-4d00b7f74220", 1600),
      alt: "Carved sandstone of an Indian palace.",
    },
    paragraphs: [
      "Laterite is a local fact on the coast and on many of the hills this studio works in. It is also a fashion, which is a reason to be careful. Used as a veneer on a concrete frame, far from the quarries and the masons who know it, it becomes a costume. Used as a wall that can be cut, laid, and repaired nearby, it is simply a good heavy thing that takes lime and holds a day of heat.",
      "Lime asks for time, and time is the material clients find hardest to buy. Cement is quicker, harder, and less forgiving of the old masonry it is often smeared onto. On the Richmond Town bungalow, cement plaster was the problem we were hired to continue. We declined, and the house is drier for it.",
      "Teak is used less than it was, and more carefully. A single long piece of joinery is better than a house in which every surface pretends to be furniture. Oxide floors, done by people who still know how, take a patina that stone sometimes refuses. Brass dulls in the hand, which is the correct outcome.",
      "The test we use is unromantic. In ten years, can this be cleaned, patched, and understood by a mason who did not build it? If the answer needs a specialist from another city, it is probably the wrong material for the job.",
    ],
  },
  {
    slug: "a-school-should-have-a-shade",
    title: "A School Should Have a Shade",
    date: "January 2022",
    category: "Project story",
    excerpt:
      "Notes from Learning Court in Whitefield, where the verandah was argued for as seriously as the classroom.",
    pull: "The verandah is not circulation. It is where the school actually happens.",
    image: {
      src: photo("photo-1751214608311-c1e01351426c", 1600),
      alt: "Arched courts of a public building in Kolkata.",
    },
    paragraphs: [
      "The first brief for the school in Whitefield was a stack of classrooms, a secure wall, and air-conditioning. It was a brief written by anxiety, which is understandable, and by a picture of schools the trustees had visited in sealed buildings. The site was hot, flat, and large enough to do better.",
      "We drew the verandah at the width of a classroom and refused to call it circulation. A class can sit there. A parent can wait there. Rain is a roof question, not a reason to go inside. Once that width was agreed, the classrooms became quieter, because the noise of movement had a place to be.",
      "Three courts — arrival, play, and a smaller garden for the youngest — mean a child always knows where they are. Corridors, in schools, are where children become a crowd. Courts make them a group in a place. The difference is architectural, and it is also disciplinary in the old sense: it teaches by arrangement.",
      "A portion of the building can still be cooled. The rest works with fans and north light. The trustees were sceptical until the first May. Scepticism is a reasonable part of a brief. The building’s job was to answer it without humiliation.",
    ],
  },
  {
    slug: "notes-from-a-restoration",
    title: "Notes from a Restoration",
    date: "August 2021",
    category: "Perspective",
    excerpt:
      "What the Richmond Town bungalow insisted on, once the later rooms were peeled away.",
    pull: "We did not restore an image of the past. We restored a way of staying cool.",
    image: {
      src: photo("photo-1477587458883-47145ed94245", 1600),
      alt: "Older buildings along a street in Jaipur.",
    },
    paragraphs: [
      "The bungalow had been improved for thirty years, and the improvements were the damage. Verandahs enclosed to make bedrooms. Cement on lime walls. A kitchen that had drifted into a passage. The family loved the house and could no longer quite live in it. Both facts were true.",
      "Opening the enclosed verandah was the decision that frightened everyone and fixed the plan. The rooms behind it had become dark, and the darkness had been blamed on age. It was only a verandah trying to be a room. Given back its edge, the house remembered how it was supposed to work.",
      "We kept the awkwardness that was original. A slightly low beam. A door that is not centred. Symmetry, imposed now, would have been a fiction. New work — a bathroom wing, a kitchen with a real flue — sits to the side and does not imitate the old windows. It is quieter than imitation, and more honest about its year.",
      "The family stayed through the work. That is not ideal for a contractor and it is very good for a drawing. Every week the walls contradicted the archive. Restoration, in the end, was a conversation with a building that still had opinions.",
    ],
  },
]

export function getArticle(slug: string | undefined) {
  if (!slug) return undefined
  return articles.find((article) => article.slug === slug)
}

export function getNextArticle(slug: string) {
  const index = articles.findIndex((article) => article.slug === slug)
  if (index < 0) return articles[0]
  return articles[(index + 1) % articles.length]
}
