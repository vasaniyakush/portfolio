import Link from "next/link";
import EntryPage from "@/components/entry-page";

const SECTIONS = [
  {
    href: "/shelf/books",
    title: "Books",
    blurb: "Books that earned a spot on the shelf.",
  },
  {
    href: "/shelf/videos",
    title: "Videos",
    blurb: "Talks and videos worth the runtime.",
  },
  {
    href: "/shelf/blogs",
    title: "Blogs",
    blurb: "Posts and essays I keep coming back to.",
  },
];

export default function Shelf() {
  return (
    <EntryPage
      title="Shelf"
      intro="Things other people made that stuck with me."
    >
      {SECTIONS.map((section) => (
        <Link
          key={section.href}
          href={section.href}
          className="entry-card box p-5 is-block"
        >
          <h2 className="title is-4 mb-1">{section.title}</h2>
          <p className="is-size-6 has-text-grey">{section.blurb}</p>
        </Link>
      ))}
    </EntryPage>
  );
}
