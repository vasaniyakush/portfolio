import TypingSpeedData from "@/components/typingSpeedData";
import "./page.scss";

export default function Home() {
  return (
    <>
      <div className="columns">
        <div className="column is-half">
          <section className="section is-medium">
            <div className="content">
              <h1>Kush Vasaniya</h1>
              <p className="subtitle">
                {"You have read my name a lot of time now, haven't you? "}
                <br />
                {"This website is under construction right now."}
              </p>
            </div>
            <br />
            <br />
            <div className="content">
              <div className="title"> {"Here's what you can do:"}</div>
              <ul>
                <li>Check out my GitHub profile.</li>
                <li>Connect with me on LinkedIn.</li>
                <li>Follow me on Twitter.</li>
                <li>Stalk me on Instagram.</li>
                <li>
                  And then....maybe...<em>Hire me :D</em>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="column is-two-fifths">
          <section className="section is-medium">
            <TypingSpeedData />
          </section>
        </div>
      </div>
    </>
  );
}
