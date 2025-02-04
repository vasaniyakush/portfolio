"use client";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">404</h1>
          <h2 className="subtitle is-3">
            {"Sorry I'm slow: I'm still working on this page."}
          </h2>
          <p className="is-size-5">{"Please come again another day. "}</p>
          <p className="">You're just awesome :D</p>
          <br />
          <div className="columns">
            <div className="column is-4"></div>
            <div className="column is-2">
              <Link href="/" className="button is-primary is-large">
                <div>Go Back Home</div>
              </Link>
            </div>
            <div className="column is-2">
              <Link href="/resume" className="button is-link is-large">
                <div>Checkout CV</div>
              </Link>
            </div>
            <div className="column is-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
