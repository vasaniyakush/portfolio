"use client";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">404</h1>
          <h2 className="subtitle is-3">
            {"Sorry I'm slow: I'm still working on this page."}
          </h2>
          <p className="is-size-5">
            {"Please come again another day. You're just awesome :D"}
          </p>
          <br />
          <Link href="/" className="button is-light is-large">
            <div>Go Back Home</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
