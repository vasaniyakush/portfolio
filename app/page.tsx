import "./page.scss";
import Intro from "@/components/intro";

const SKILLS = [
  "Backend Dev - Go, Java",
  "Databases - Postgres, Redis",
  "System Design and Architecture",
  "Spring",
  "Python",
  "C++",
  "TypeScript",
  "Next.js",
  "System Design",
  "Databases",
  "Spark SQL",
  "Databricks",
  "AWS",
  "Docker",
];

export default function Home() {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-three-quarters">
            <Intro />

            <div className="content mt-6">
              <h2 className="title is-5 mb-3">Things I reach for</h2>
              <div className="tags skills-cloud">
                {SKILLS.map((skill) => (
                  <span className="tag is-medium" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
