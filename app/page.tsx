import TypingSpeedData from "@/components/typingSpeedData";
import "./page.scss";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <>
      <section className="section is-medium">
        <div className="columns">
          <div className="column is-half p-6">
            <Intro />
          </div>
          <div className="column is-two-fifths box p-6">
            <TypingSpeedData />
          </div>

          {/* <div className="column is-half p-6">
            <Yappology />
          </div> */}
        </div>
      </section>

      <section className="section is-medium">
        <div className="columns"></div>
      </section>
    </>
  );
}
