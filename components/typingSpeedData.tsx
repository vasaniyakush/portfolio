export default async function TypingSpeedData() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `ApeKey ${process.env.APE_KEY}`,
  };
  // fetch with headers
  const response = await fetch(
    "https://api.monkeytype.com/users/personalBests?mode=time",
    {
      headers: headers,
    }
  );
  const TypingTimedata = (await response.json()).data;

  const responseWords = await fetch(
    "https://api.monkeytype.com/users/personalBests?mode=words",
    {
      headers: headers,
    }
  );
  const TypingWordsdata = (await responseWords.json()).data;

  console.log("Time", TypingTimedata);
  console.log("Words", TypingWordsdata);

  return (
    <div className="content">
      <h1 className="has-text-centered">
        {"Let me flex,"}
        <em>{" I type fast :"}</em>
      </h1>
      <p className="has-text-centered">
        <sub>
          Honestly, the empty space looked bad, and this component was quick to
          implement (pun intended).
        </sub>
      </p>
      <p className="has-text-centered"></p>
      <hr></hr>
      <div className="subtitle">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">15s</p>
              <p className="title">{TypingTimedata["15"][0]["wpm"]}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">30s</p>
              <p className="title">{TypingTimedata["30"][0]["wpm"]}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">60s</p>
              <p className="title">{TypingTimedata["60"][0]["wpm"]}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">120s</p>
              <p className="title">{TypingTimedata["120"][0]["wpm"]}</p>
            </div>
          </div>
        </nav>
      </div>
      <hr></hr>
      <div className="subtitle">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">10 words</p>
              <p className="title">{TypingWordsdata["10"][0]["wpm"]}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">25 words</p>
              <p className="title">{TypingWordsdata["25"][0]["wpm"]}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">50 words</p>
              <p className="title">{TypingWordsdata["50"][0]["wpm"]}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">100 words</p>
              <p className="title">{TypingWordsdata["100"][0]["wpm"]}</p>
            </div>
          </div>
        </nav>
      </div>
      <hr></hr>
      <p className="has-text-centered">
        <a
          href="https://monkeytype.com/profile/vasaniyakush1"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://monkeytype.com/profile/vasaniyakush1
        </a>
      </p>
    </div>
  );
}
