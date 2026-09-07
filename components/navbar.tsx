"use client";

import { useEffect, useState } from "react";
import sun from "../public/sun.png";
import moon from "../public/moon.png";
import Image from "next/image";
import Link from "next/link";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme) => {
  const c = document.documentElement.classList;
  c.remove("theme-light", "theme-dark");
  c.add(`theme-${theme}`);
};

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

        <div className="navbar-item is-mobile">
          <div className="navbar-item buttons">
            <span
              onClick={toggleTheme}
              className="icon"
              role="button"
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              style={{
                width: 40,
                height: 40,
                visibility: theme ? "visible" : "hidden",
              }}
            >
              <Image
                width={40}
                height={40}
                alt=""
                src={theme === "dark" ? sun.src : moon.src}
              />
            </span>
          </div>
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

          {/* Showcase */}
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
              <hr className="navbar-divider" />
              <Link
                href={
                  "https://onlychai.neocities.org/support.html?name=Kush%20Vasaniya&upi=vasaniyakush-1%40okhdfcbank"
                }
                target="_blank"
                className="navbar-item"
              >
                Buy me a Chai
              </Link>
            </div>
          </div>

          {/* Shelf */}
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <Link href={"/shelf"} className="navbar-item">
                Shelf
              </Link>
            </div>

            <div className="navbar-dropdown">
              <Link href={"/shelf/blogs"} className="navbar-item">
                Blogs I have read
              </Link>
              <Link href={"/shelf/videos"} className="navbar-item">
                Videos to watch
              </Link>
              <Link href={"/shelf/books"} className="navbar-item">
                Books I have read
              </Link>
              <hr className="navbar-divider" />
              <a className="navbar-item">Get Featured</a>
            </div>
          </div>

          <Link href={"/education"} className="navbar-item">
            Education
          </Link>
        </div>
      </div>
    </nav>
  );
}
