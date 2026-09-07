import type { BookEntry } from "@/data/types";
import booksData from "@/data/books.json";
import EntryPage from "@/components/entry-page";
import EntryList from "@/components/entry-list";

// Content lives in data/books.json — see data/README.md for the convention.
const BOOKS: BookEntry[] = booksData;

export default function ShelfBooks() {
  return (
    <EntryPage
      title="Books"
      intro="Books that earned a spot on the shelf."
    >
      {BOOKS.length === 0 ? (
        <p className="is-size-6 has-text-grey">Nothing shelved yet. Soon.</p>
      ) : (
        <EntryList
          items={BOOKS.map((book) => ({
            title: book.title,
            href: book.link,
            by: book.author,
            aside: book.year,
            note: book.note,
          }))}
        />
      )}
    </EntryPage>
  );
}
