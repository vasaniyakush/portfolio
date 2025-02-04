"use client";
import Link from "next/link";

export default function Resume() {
  return (
    <section className="hero">
      <object
        data="Kush_Vasaniya_Resume.pdf"
        type="application/pdf"
        className="hero is-large is-fullheight"
      >
        <div className="hero-body">
          <div className="container is-fullwidth">
            <div className="content has-text-centered is-medium">
              <p className="is-bold is-size-4">
                The PDF can't be displayed
                <sup className="has-text-primary p-1">*not funny</sup> <br></br>
              </p>
              <div className="pt-2">
                <Link
                  href="/Kush_Vasaniya_Resume.pdf"
                  className="button is-link is-medium"
                  target="_blank"
                >
                  <div>Download CV</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </object>
    </section>
  );
}
