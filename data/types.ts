/**
 * Shared content types for data-driven pages.
 *
 * Convention
 * ----------
 * Every list-style page keeps its content in `data/<name>.json` as an array of
 * entries. The row shape for that file lives here as `<Name>Entry`. Pages load
 * it like this:
 *
 *   import type { CareerEntry } from "@/data/types";
 *   import entries from "@/data/career.json";
 *
 *   const career: CareerEntry[] = entries;
 *
 * The typed assignment validates the JSON against the interface at build time —
 * a missing field, an extra field, or a wrong type fails `next build`.
 *
 * If an entry has a string-union field (e.g. `status: "read" | "reading"`),
 * TypeScript widens the JSON value to `string`, so cast instead of assigning:
 *
 *   const books = entries as BookEntry[];
 *
 * Adding a page: create `data/<name>.json`, add its `<Name>Entry` here, done.
 */

/** One hobby on the Hobbies page — `data/hobbies.json`. */
export interface HobbyEntry {
  /** URL-safe id. Also the key for an optional embedded widget. Keep unique. */
  slug: string;
  /** Display name. */
  name: string;
  /** A single emoji used as the hobby's mark. */
  emoji: string;
  /** Optional accent colour (any CSS colour) for the card's edge and emoji ring. */
  accent?: string;
  /** Optional "since" year, e.g. "2021". */
  since?: string;
  /** One or two sentences. */
  blurb: string;
  /** Optional bullet highlights. */
  highlights?: string[];
  /** Optional external link. */
  link?: string;
  /** Label for `link`; falls back to the raw URL. */
  linkLabel?: string;
}

/** One school on the Education page — `data/education.json`. */
export interface EducationEntry {
  /** School / university name. Also the React key, so keep it unique. */
  institution: string;
  /** "City, Country". */
  location: string;
  /** Degree or qualification, e.g. "BTech (Hons), Computer Science". */
  credential: string;
  /** Human-readable date range, e.g. "Aug 2020 — Jun 2024". */
  timeframe: string;
  /** Optional grade / result, e.g. "CGPA 8.9 / 10" or "72%". */
  result?: string;
  /** Optional notes — activities, honours, coursework. */
  points?: string[];
}

/** One role on the Experience page — `data/career.json`. */
export interface CareerEntry {
  /** Employer name. Also used as the React key, so keep it unique. */
  company: string;
  /** "City, Country". */
  location: string;
  /** Job title. */
  role: string;
  /** Human-readable date range, e.g. "May 2025 — Present". */
  timeframe: string;
  /** Bullet points describing the work; rendered in order. `[]` hides the list. */
  points: string[];
  /** Tech / tools shown as chips. `[]` hides the chip row. */
  stack: string[];
}

/*
 * Shelf — things other people made. One JSON file per medium under /shelf.
 */

/** One book on the Shelf → Books page — `data/books.json`. */
export interface BookEntry {
  /** Book title. Also the React key, so keep it unique. */
  title: string;
  /** Author(s). */
  author: string;
  /** Optional year (read or published), shown as the chip. */
  year?: string;
  /** Optional one- or two-sentence take. */
  note?: string;
  /** Optional genre / topic chips. */
  tags?: string[];
  /** Optional external link — Goodreads, the publisher, an essay about it. */
  link?: string;
}

/** One video on the Shelf → Videos page — `data/videos.json`. */
export interface VideoEntry {
  /** Video title. */
  title: string;
  /** Creator / channel. */
  channel: string;
  /** Watch link. Makes the title clickable; also the React key. */
  url: string;
  /** Optional one- or two-sentence take. */
  note?: string;
  /** Optional topic chips. */
  tags?: string[];
}

/** One post on the Shelf → Blogs page — `data/blogs.json`. */
export interface BlogEntry {
  /** Post title. */
  title: string;
  /** Optional author or publication. */
  author?: string;
  /** Read link. Makes the title clickable; also the React key. */
  url: string;
  /** Optional one- or two-sentence take. */
  note?: string;
  /** Optional topic chips. */
  tags?: string[];
}
