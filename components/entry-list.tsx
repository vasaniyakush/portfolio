import "./entry.scss";

export interface EntryListItem {
  /** Primary text. */
  title: string;
  /** If set, the title renders as an external link. */
  href?: string;
  /** Author / channel / publication. */
  by?: string;
  /** A short parenthetical — a year, for instance. */
  aside?: string;
  /** A trailing sentence. */
  note?: string;
}

/**
 * A dotted (bulleted) list — a lighter alternative to a stack of EntryCards.
 * The list scrolls inside a capped viewport, so a long list never stretches
 * the page. Content is fully server-rendered (no windowing), which keeps it
 * indexable and works without JS; add row virtualization only if a list ever
 * grows into the thousands.
 */
export default function EntryList({ items }: { items: EntryListItem[] }) {
  return (
    <div className="entry-list-viewport">
      <ul className="entry-list">
        {items.map((item) => (
          <li key={item.href ?? item.title}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              item.title
            )}
            {item.by && <span className="entry-list-by"> — {item.by}</span>}
            {item.aside && (
              <span className="entry-list-by"> ({item.aside})</span>
            )}
            {item.note && (
              <span className="entry-list-note"> · {item.note}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
