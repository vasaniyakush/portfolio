import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="content">
        <h1>Kush Vasaniya</h1>
        <p className="subtitle">
          You have read my name a lot of times now, haven't you?
        </p>
        <ul>
          <li>
            <p className="subtitle">
              I'm a software developer with 3 YOE.<sup>[1]</sup>
            </p>
          </li>
          <li>
            <p className="subtitle">
              I love to code and... cliché <sup>you get the point</sup>
              <br />
            </p>
          </li>
          <li>
            <p className="subtitle">
              FullStack, DevOps, and{" "}
              <em className=" has-text-primary p-1">Exploring new things</em>{" "}
              are my fortes.
            </p>
          </li>
        </ul>
      </div>
      <div className="content mt-6">
        <p className="is-size-7">
          <sup>[1]</sup> Candidate investments are subject to market risks, read{" "}
          <Link style={{ textDecoration: "underline" }} href="/experience">
            experience related documents
          </Link>{" "}
          carefully before hiring.
        </p>
      </div>
      <br />
      <br />

      <div className="content">
        <div className="title">Here's what you can do:</div>
        <ul>
          <li>
            Check out my{" "}
            <a
              href="https://github.com/vasaniyakush"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>{" "}
            profile.
          </li>
          <li>
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/kush-vasaniya-667450210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            .
          </li>
          <li>
            Follow me on{" "}
            <a
              href="https://x.com/vasaniyakush"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            .
          </li>
          <li>
            Stalk me on{" "}
            <a
              href="https://www.instagram.com/vasaniyakush/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            .
          </li>
          <li>
            And then... maybe...
            <a href="mailto:vasaniyakush@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect!">
              vasaniyakush@gmail.com
            </a>
            <em> Hire me :D </em>
          </li>
        </ul>
      </div>
    </>
  );
}
