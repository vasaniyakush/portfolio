import type { EducationEntry } from "@/data/types";
import educationData from "@/data/education.json";
import EntryPage from "@/components/entry-page";
import EntryCard from "@/components/entry-card";

// Content lives in data/education.json — see data/README.md for the convention.
const EDUCATION: EducationEntry[] = educationData;

export default function Education() {
  return (
    <EntryPage
      title="Education"
      intro="Where the fundamentals came from — plus the clubs and contests that taught me the rest."
    >
      {EDUCATION.map((edu) => (
        <EntryCard
          key={edu.institution}
          title={edu.credential}
          subtitle={
            <>
              {edu.institution}
              <span className="has-text-grey"> · {edu.location}</span>
              {edu.result && (
                <span className="has-text-primary has-text-weight-semibold">
                  {" · "}
                  {edu.result}
                </span>
              )}
            </>
          }
          meta={edu.timeframe}
          points={edu.points}
        />
      ))}
    </EntryPage>
  );
}
