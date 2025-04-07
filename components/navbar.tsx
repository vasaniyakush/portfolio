"use client";

import { useState } from "react";
import sun from "../public/sun.png";
import moon from "../public/moon.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [theme, setTheme] = useState("theme-dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains(
      "theme-light"
    )
      ? "light"
      : "dark";

    if (currentTheme === "light") {
      document.documentElement.classList.remove("theme-light");
      document.documentElement.classList.add("theme-dark");
      setTheme("theme-dark");
    } else {
      document.documentElement.classList.remove("theme-dark");
      document.documentElement.classList.add("theme-light");
      setTheme("theme-light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar is-fixed-top is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ml-3 ">
        <div className="navbar-item ">
          <Link href={"/"}>
            <h3 className="title is-3 has-text-dark">Kush Vasaniya</h3>
          </Link>
        </div>

        <div className="navbar-item is-mobile">
          <div className="navbar-item buttons">
            {theme == "theme-dark" ? (
              <span onClick={toggleTheme} className="icon">
                <Image width={40} height={40} alt="Light" src={sun.src}></Image>
              </span>
            ) : (
              <span onClick={toggleTheme} className="icon">
                <Image width={40} height={40} alt="Dark" src={moon.src}></Image>
              </span>
            )}
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
            Experience(+3xp)
          </Link>

          {/* Showcase */}
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <Link href={"/showcase"} className="navbar-item">
                Showcase(I build)
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
              <Link href={"/showcase/typing"} className="navbar-item">
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
                Shelf(They Build)
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
            Education(yappology)
          </Link>
        </div>
      </div>
    </nav>
  );
}
