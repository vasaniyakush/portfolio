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
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link href={"/"}>
            <h3 className="title is-3">Kush Vasaniya</h3>
          </Link>
        </div>

        <div className="navbar-item is-mobile">
          <div className="navbar-item buttons">
            <style jsx>{`
              .icon {
                border-radius: 50%;
                transform: scale(1.2); /* Optional: scale effect */
                transition: filter 0.1s ease, transform 0.1s ease;
              }

              .icon:hover {
                padding: 1px; /* Apply blur effect */
              }
            `}</style>
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
          <Link href={"/projects"} className="navbar-item">
            Projects(if any?)
          </Link>

          <Link href={"/career"} className="navbar-item">
            Career(for HR flattering)
          </Link>

          <Link href={"/education"} className="navbar-item">
            Education(*Redacted*)
          </Link>
        </div>
      </div>
    </nav>
  );
}
