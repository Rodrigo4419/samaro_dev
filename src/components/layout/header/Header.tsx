"use client";
import { useState } from "react";
import ScrollListener from "./ScrollListener";
import { MenuIcon } from "@/components/svgIcons";
import styles from "./header.module.css";

export default function Header() {

  const close = () => {
    const header = document.getElementById("app-header");
    if (!header) return;
    header.style.height = "4.4rem";
  };

  const toggle = () => {
    const header = document.getElementById("app-header");

    if (!header) return;

    const isCollapsed =
      header.style.height === "4.4rem" || !header.style.height;

    header.style.height = isCollapsed ? "20.4rem" : "4.4rem";
    header.style.backgroundColor = "#000000d9";
    header.style.borderBottom = "1px solid #3e3e3e";
  };

  return (
    <header id="app-header" className={`${styles.header} ${styles.top}`}>
      <ScrollListener />
      {/*<Drawer open={isOpen} setOpen={setIsOpen} display='mobile'>
        <div>hi</div>
      </Drawer>*/}
      <div className={styles.navContainer}>
        <a href="#home-section" onClick={() => close()}>
          <h2>Rodrigo Mtz</h2>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#about-section" onClick={() => close()}>
                About{" "}
              </a>
              <div className={styles.hoverMarker}></div>
            </li>
            <li>
              <a href="#projects-section" onClick={() => close()}>
                Projects
              </a>{" "}
              <div className={styles.hoverMarker}></div>
            </li>
            <li>
              <a href="#experience-section" onClick={() => close()}>
                Experience
              </a>{" "}
              <div className={styles.hoverMarker}></div>
            </li>
            <li>
              <a href="#contact-section" onClick={() => close()}>
                Contact
              </a>{" "}
              <div className={styles.hoverMarker}></div>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={() => toggle()} style={{color:'#fff'}}>
        <MenuIcon height="1.2rem" width="1.2rem" />
      </button>
    </header>
  );
}
