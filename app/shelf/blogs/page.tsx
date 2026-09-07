import type { BlogEntry } from "@/data/types";
import blogsData from "@/data/blogs.json";
import EntryPage from "@/components/entry-page";
import EntryList from "@/components/entry-list";

// Content lives in data/blogs.json — see data/README.md for the convention.
const BLOGS: BlogEntry[] = blogsData;

export default function ShelfBlogs() {
  return (
    <EntryPage title="Blogs" intro="Posts and essays I keep coming back to.">
      {BLOGS.length === 0 ? (
        <p className="is-size-6 has-text-grey">Nothing shelved yet. Soon.</p>
      ) : (
        <EntryList
          items={BLOGS.map((blog) => ({
            title: blog.title,
            href: blog.url,
            by: blog.author,
            note: blog.note,
          }))}
        />
      )}
    </EntryPage>
  );
}
