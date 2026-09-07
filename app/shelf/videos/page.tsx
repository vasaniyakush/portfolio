import type { VideoEntry } from "@/data/types";
import videosData from "@/data/videos.json";
import EntryPage from "@/components/entry-page";
import EntryList from "@/components/entry-list";

// Content lives in data/videos.json — see data/README.md for the convention.
const VIDEOS: VideoEntry[] = videosData;

export default function ShelfVideos() {
  return (
    <EntryPage title="Videos" intro="Talks and videos worth the runtime.">
      {VIDEOS.length === 0 ? (
        <p className="is-size-6 has-text-grey">Nothing shelved yet. Soon.</p>
      ) : (
        <EntryList
          items={VIDEOS.map((video) => ({
            title: video.title,
            href: video.url,
            by: video.channel,
            note: video.note,
          }))}
        />
      )}
    </EntryPage>
  );
}
