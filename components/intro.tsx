import Link from "next/link";

const LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: "GitHub", href: "https://github.com/vasaniyakush", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kush-vasaniya-667450210/",
    external: true,
  },
  { label: "Twitter", href: "https://x.com/vasaniyakush", external: true },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vasaniyakush/",
    external: true,
  },
  { label: "Email", href: "mailto:vasaniyakush@gmail.com" },
];

export default function Intro() {
  return (
    <div className="content intro">
      <p className="intro-eyebrow">Banswara / Jaipur, India</p>
      <h1 className="title is-1 mb-3">Kush Vasaniya</h1>
      <p className="subtitle is-4 mb-4">
        Software Engineer 1 at Sophos · Cybersecurity · Technology
      </p>

      <p className="is-size-5">
        I build backends, research cloud providers, and occassional deep dives
        in tech. Right now I&apos;m on the Identity Threat Detection &amp;
        Response team at{" "}
        <a
          href="https://www.sophos.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sophos
        </a>
        , working on the XDR product.
      </p>
      <p className="is-size-6 intro-muted">
        Before this: Plotly Dash dashboards and Spark pipelines at AppPerfect,
        MERN products and REST APIs across a couple of startups, and a stint
        writing interactive coding content at Newton School. Four NPTEL topper
        certs and 1000+ solved DSA problems somewhere in there too.
      </p>

      <div className="buttons mt-5">
        <Link href="/career" className="button is-primary is-medium">
          See the experience
        </Link>
        <Link href="/resume" className="button is-medium">
          Download CV
        </Link>
      </div>

      <p className="is-size-6 intro-muted mt-5 mb-1">
        Find me around the internet
      </p>
      <p className="is-size-6 intro-links">
        {LINKS.map((link, i) => (
          <span key={link.label}>
            {i > 0 && <span className="intro-sep"> · </span>}
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}
