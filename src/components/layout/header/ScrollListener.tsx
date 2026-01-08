"use client";
import { useEffect } from "react";
import styles from "./header.module.css";

export default function ScrollListener() {
  useEffect(() => {
    const header = document.getElementById('app-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add(styles.transparent);
        header?.classList.remove(styles.top);
      } else {
        header?.classList.remove(styles.transparent);
        header?.classList.add(styles.top);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // No renderiza nada
}
