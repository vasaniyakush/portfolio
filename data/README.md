# `data/` — page content as JSON

List-style pages (Experience, and later "Books I've read", "Papers I've read",
…) keep their content here as plain JSON, separate from the page that renders
it. Editing or adding an entry means touching one `.json` file — no JSX.

## Layout

```
data/
  types.ts        all entry interfaces (one per collection)
  career.json     content for /career
  hobbies.json    content for /hobbies
  education.json  content for /education
  <name>.json     content for /<name>
```

## How a page uses it

Content comes from JSON; markup comes from the shared `<EntryPage>` +
`<EntryCard>` components (`components/entry-page.tsx`, `components/entry-card.tsx`).
The page is just the adapter between the two:

```tsx
import type { CareerEntry } from "@/data/types";
import careerData from "@/data/career.json";
import EntryPage from "@/components/entry-page";
import EntryCard from "@/components/entry-card";

const CAREER: CareerEntry[] = careerData;

export default function Career() {
  return (
    <EntryPage title="Experience" intro="…">
      {CAREER.map((e) => (
        <EntryCard
          key={e.company}
          title={e.role}
          subtitle={e.company}
          meta={e.timeframe}
          points={e.points}
          tags={e.stack}
        />
      ))}
    </EntryPage>
  );
}
```

`EntryCard` props: `title`, `href?` (makes the title an external link),
`subtitle?` (string or JSX), `meta?` (the crayon-red chip — date / year /
status), `points?` (bullets), `tags?` (chips), `children?` (free-form body).
`EntryPage` props: `title`, `intro?`, `footnote?`, `footer?`.

The typed assignment (`const CAREER: CareerEntry[] = careerData`) checks the JSON
against the interface during `next build` (`resolveJsonModule` is on): a missing
field, an extra field, or a wrong type breaks the build. For a field that's a
string union (e.g. `status: "read" | "reading"`), cast instead —
`careerData as BookEntry[]` — because JSON widens the literal to `string`.

## Adding a new collection

1. Create `data/<name>.json` — an array of entries.
2. Add its `<Name>Entry` interface to `data/types.ts` with a doc comment per field.
3. Add `app/<name>/page.tsx` following the pattern above.

Keep entries ordered the way they should render — nothing sorts them.
