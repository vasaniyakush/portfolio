import Link from "next/link";
import type { CareerEntry } from "@/data/types";
import careerData from "@/data/career.json";
import EntryPage from "@/components/entry-page";
import EntryCard from "@/components/entry-card";

// Content lives in data/career.json — see data/README.md for the convention.
const CAREER: CareerEntry[] = careerData;

export default function Career() {
  return (
    <EntryPage
      title="Experience"
      intro="A few years, a few companies, one recurring theme: making things faster and less annoying to maintain."
      footnote={
        <>
          <sup>*</sup> Sourced from my{" "}
          <Link style={{ textDecoration: "underline" }} href="/resume">
            CV
          </Link>{" "}
          and{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://www.linkedin.com/in/kush-vasaniya-667450210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          . Past performance is not indicative of future results, but it&apos;s a
          decent hint.
        </>
      }
      footer={
        <p>
          Want the condensed version?{" "}
          <Link href="/resume" className="has-text-primary">
            Grab the CV
          </Link>{" "}
          or{" "}
          <a href="mailto:vasaniyakush@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect!">
            say hi
          </a>
          .
        </p>
      }
    >
      {CAREER.map((entry) => (
        <EntryCard
          key={entry.company}
          title={entry.role}
          subtitle={
            <>
              {entry.company}
              <span className="has-text-grey"> · {entry.location}</span>
            </>
          }
          meta={entry.timeframe}
          points={entry.points}
          tags={entry.stack}
        />
      ))}
    </EntryPage>
  );
}
