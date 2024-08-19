"use client";

import { useState } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState("theme-dark");
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

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h3 className="title is-3">Kush Vasaniya</h3>
        </div>




        <div className="navbar-item is-mobile">
          <div className="navbar-item buttons">
            {theme == "theme-dark" ? (
              <button
                onClick={() => toggleTheme()}
                className="button is-white is-small"
              >
                *Sun*
              </button>
            ) : (
              <button
                onClick={() => toggleTheme()}
                className="button is-dark is-small"
              >
                *Moon* 
              </button>
            )}
          </div>
        </div>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">Projects(if any?)</a>

          <a className="navbar-item">Career(for HR flattering)</a>

          <a className="navbar-item">Education(*Redacted*)</a>
        </div>
      </div>
      
      <div className="navbar-brand">
        
      </div>
    </nav>
  );
}
