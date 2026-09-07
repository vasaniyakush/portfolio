import type { ReactNode } from "react";
import "./entry.scss";

export interface EntryPageProps {
  /** Page heading. */
  title: string;
  /** Lead paragraph under the title. */
  intro?: ReactNode;
  /** Small print under the intro — sources, disclaimers. */
  footnote?: ReactNode;
  /** Content after the list — a CTA, a "say hi" line. */
  footer?: ReactNode;
  /** The <EntryCard> list. */
  children: ReactNode;
}

export default function EntryPage({
  title,
  intro,
  footnote,
  footer,
  children,
}: EntryPageProps) {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="content">
          <h1 className="title is-2">{title}</h1>
          {intro && <p className="subtitle entry-page-intro">{intro}</p>}
          {footnote && <p className="is-size-7">{footnote}</p>}
        </div>

        <hr />

        {children}

        {footer && (
          <div className="content has-text-centered mt-6">{footer}</div>
        )}
      </div>
    </section>
  );
}
