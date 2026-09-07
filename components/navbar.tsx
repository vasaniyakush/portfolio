"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.scss";

type Theme = "light" | "dark";

// Feature flags for nav sections that aren't ready yet.
const NAV_FLAGS = { showcase: false };

const applyTheme = (theme: Theme) => {
  const c = document.documentElement.classList;
  c.remove("theme-light", "theme-dark");
  c.add(`theme-${theme}`);
};

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 13.2A8.2 8.2 0 1 1 10.8 3.5a6.4 6.4 0 0 0 9.7 9.7z" />
    </svg>
  );
}

export default function NavBar() {
  // null until mounted — the pre-paint script owns the class before then.
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Adopt the class the pre-paint script applied, then follow the OS while the
  // user hasn't made an explicit choice.
  useEffect(() => {
    const read = (): Theme =>
      document.documentElement.classList.contains("theme-dark")
        ? "dark"
        : "light";

    // Client-only sync after mount; not derivable during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(read());

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (localStorage.getItem("theme")) return;
      applyTheme(mql.matches ? "dark" : "light");
      setTheme(read());
    };
    mql.addEventListener("change", onSystemChange);
    return () => mql.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode / storage disabled — the selection just won't persist */
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ml-3 ">
        <div className="navbar-item ">
          <Link href={"/"}>
            <h3 className="title is-3">Kush Vasaniya</h3>
          </Link>
        </div>

        <a
          role="button"
          className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          data-target="navhamburger"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navhamburger"
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <Link href={"/career"} className="navbar-item">
            Experience
          </Link>

          <Link href={"/hobbies"} className="navbar-item">
            Hobbies
          </Link>

          {/* Showcase — hidden until those pages exist (see NAV_FLAGS) */}
          {NAV_FLAGS.showcase && (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <Link href={"/showcase"} className="navbar-item">
                  Showcase
                </Link>
              </div>

              <div className="navbar-dropdown">
                <Link href={"/showcase/projects"} className="navbar-item">
                  Projects
                </Link>
                <Link href={"/showcase/achievements"} className="navbar-item">
                  Achievements
                </Link>
                <Link href={"/showcase/content"} className="navbar-item">
                  Youtube/Twitch
                </Link>
                <Link href={"/hobbies"} className="navbar-item">
                  I Type Fast
                </Link>
                <Link href={"/showcase/blogs"} className="navbar-item">
                  Blogs
                </Link>
                <Link href={"/showcase/poems"} className="navbar-item">
                  Poems
                </Link>
                <Link href={"/showcase/photography"} className="navbar-item">
                  Photography
                </Link>
              </div>
            </div>
          )}

          {/* Shelf */}
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <Link href={"/shelf"} className="navbar-item">
                Shelf
              </Link>
            </div>

            <div className="navbar-dropdown">
              <Link href={"/shelf/books"} className="navbar-item">
                Books
              </Link>
              <Link href={"/shelf/videos"} className="navbar-item">
                Videos
              </Link>
              <Link href={"/shelf/blogs"} className="navbar-item">
                Blogs
              </Link>
            </div>
          </div>

          <Link href={"/education"} className="navbar-item">
            Education
          </Link>

          <div className="navbar-item">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              aria-pressed={theme === "dark"}
              style={{ visibility: theme ? "visible" : "hidden" }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
