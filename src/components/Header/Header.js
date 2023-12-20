"use client";
import React from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

import styles from "./Header.module.css";
import Cookies from "js-cookie";

function Header({ theme, className, ...delegated }) {
  const [mode, setMode] = React.useState(theme);

  function toggleMode() {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
  }
  
  React.useEffect(() => {
    Cookies.set("color-mode", mode, { expires: 1000 });
    const root = document.documentElement;
    
    if (root.getAttribute("data-color-theme") !== mode) {
      root.setAttribute("data-color-theme", mode);
      const colors = mode === "light" ? LIGHT_COLORS : DARK_COLORS;
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [mode]);

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button className={styles.action} onClick={toggleMode}>
          {mode === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
