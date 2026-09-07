import type { CSSProperties, ReactNode } from "react";
import type { HobbyEntry } from "@/data/types";
import hobbiesData from "@/data/hobbies.json";
import EntryPage from "@/components/entry-page";
import TypingSpeedData from "@/components/typingSpeedData";
import "./hobbies.scss";

// Content lives in data/hobbies.json — see data/README.md for the convention.
const HOBBIES: HobbyEntry[] = hobbiesData;

// Optional rich widget per hobby, keyed by slug. Add one when a hobby earns it.
const WIDGETS: Record<string, ReactNode> = {
  typing: <TypingSpeedData />,
};

export default function Hobbies() {
  return (
    <EntryPage
      title="Hobbies"
      intro="Things I do when I'm not shipping code — and, often enough, to put off shipping code."
    >
      <div className="hobby-list">
        {HOBBIES.map((hobby) => {
          const widget = WIDGETS[hobby.slug];
          return (
            <article
              key={hobby.slug}
              className="hobby-card box p-5"
              style={
                hobby.accent
                  ? ({ "--hobby-accent": hobby.accent } as CSSProperties)
                  : undefined
              }
            >
              <div className="hobby-head">
                <span className="hobby-emoji" aria-hidden="true">
                  {hobby.emoji}
                </span>
                <div>
                  <h2 className="title is-4 mb-1">{hobby.name}</h2>
                  {hobby.since && (
                    <p className="hobby-since">since {hobby.since}</p>
                  )}
                </div>
              </div>

              <p className="is-size-6 mt-3">{hobby.blurb}</p>

              {hobby.highlights && hobby.highlights.length > 0 && (
                <ul className="entry-points mt-3">
                  {hobby.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {widget && <div className="hobby-widget">{widget}</div>}

              {hobby.link && (
                <p className="is-size-7 mt-3">
                  <a
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {hobby.linkLabel ?? hobby.link}
                  </a>
                </p>
              )}
            </article>
          );
        })}
      </div>
    </EntryPage>
  );
}
