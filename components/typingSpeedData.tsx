const PROFILE_URL = "https://monkeytype.com/profile/vasaniyakush1";
const TIME_MODES = ["15", "30", "60", "120"] as const;
const WORD_MODES = ["10", "25", "50", "100"] as const;

interface PersonalBest {
  wpm: number;
  acc: number;
  raw: number;
  consistency: number;
  timestamp: number;
}

type PersonalBests = Record<string, PersonalBest[] | undefined>;

async function getPersonalBests(
  mode: "time" | "words"
): Promise<PersonalBests | null> {
  const apeKey = process.env.APE_KEY;
  if (!apeKey) return null;

  try {
    const res = await fetch(
      `https://api.monkeytype.com/users/personalBests?mode=${mode}`,
      {
        headers: { Accept: "application/json", Authorization: `ApeKey ${apeKey}` },
        next: { revalidate: 3600 * 24 }, // 24 hours
      }
    );
    if (!res.ok) return null;
    const json = (await res.json()) as { data?: PersonalBests };
    return json.data ?? null;
  } catch {
    return null;
  }
}

/** Best run for a given mode length, across languages/punctuation variants. */
function bestRun(
  pbs: PersonalBests | null,
  key: string
): PersonalBest | null {
  const runs = pbs?.[key];
  if (!runs?.length) return null;
  return runs.reduce((best, run) => (run.wpm > best.wpm ? run : best));
}

export default async function TypingSpeedData() {
  const [timePbs, wordPbs] = await Promise.all([
    getPersonalBests("time"),
    getPersonalBests("words"),
  ]);

  if (!timePbs && !wordPbs) {
    return (
      <div className="content">
        <h3 className="title is-5 mb-2">I type fast</h3>
        <p className="is-size-6 has-text-grey">
          The live numbers from Monkeytype are taking a nap. Catch them on{" "}
          <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
            my profile
          </a>
          .
        </p>
      </div>
    );
  }

  const rows = [
    { label: "By seconds", unit: "s", modes: TIME_MODES, pbs: timePbs },
    { label: "By word count", unit: "", modes: WORD_MODES, pbs: wordPbs },
  ];

  const peak = Math.max(
    0,
    ...rows.flatMap((row) =>
      row.modes.map((mode) => bestRun(row.pbs, mode)?.wpm ?? 0)
    )
  );

  return (
    <div className="content">
      <h3 className="title is-5 mb-1">I type fast</h3>
      <p className="is-size-7 has-text-grey mb-4">
        Personal-best <abbr title="words per minute">WPM</abbr>, pulled live from
        Monkeytype and refreshed daily. Accuracy underneath.
      </p>

      {rows.map((row) => (
        <div key={row.label} className="mb-4">
          <p className="heading mb-2">{row.label}</p>
          <div className="fixed-grid has-4-cols">
            <div className="grid">
              {row.modes.map((mode) => {
                const run = bestRun(row.pbs, mode);
                const wpm = run ? Math.round(run.wpm) : null;
                return (
                  <div key={mode} className="cell has-text-centered">
                    <p className="heading mb-1">
                      {mode}
                      {row.unit}
                    </p>
                    <p
                      className={`title is-4 mb-1${
                        wpm !== null && wpm === peak ? " has-text-primary" : ""
                      }`}
                    >
                      {wpm ?? "—"}
                    </p>
                    <p className="is-size-7 has-text-grey">
                      {run ? `${Math.round(run.acc)}%` : " "}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      {/* <p className="is-size-7 has-text-centered mt-2">
        <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
          monkeytype.com/profile/vasaniyakush1
        </a>
      </p> */}
    </div>
  );
}
