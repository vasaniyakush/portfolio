import type { ReactNode } from "react";
import "./entry.scss";

export interface EntryCardProps {
  /** Primary heading — role, book title, paper title. */
  title: string;
  /** If set, the title renders as an external link. */
  href?: string;
  /** Company · location, author, venue. Plain string or JSX. */
  subtitle?: ReactNode;
  /** Right-aligned chip — date range, year, reading status. */
  meta?: string;
  /** Bullet points, rendered in order. */
  points?: string[];
  /** Chips shown under the body. */
  tags?: string[];
  /** Free-form body between the bullets and the tags. */
  children?: ReactNode;
}

export default function EntryCard({
  title,
  href,
  subtitle,
  meta,
  points,
  tags,
  children,
}: EntryCardProps) {
  return (
    <article className="entry-card box p-5">
      <div className="columns is-vcentered mb-2">
        <div className="column">
          <h2 className="title is-4 mb-1">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
          {subtitle != null && (
            <p className="subtitle is-6 mb-0">{subtitle}</p>
          )}
        </div>
        {meta && (
          <div className="column is-narrow">
            <span className="tag is-medium entry-meta">{meta}</span>
          </div>
        )}
      </div>

      {points && points.length > 0 && (
        <ul className="entry-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      {children}

      {tags && tags.length > 0 && (
        <div className="entry-tags mt-4 tags">
          {tags.map((tag) => (
            <span className="tag is-link is-light" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
