"use client";
import { motion } from "motion/react";
import { ExperienceCard } from "@/components/ui";
import ExperienceData from "./experience_data.json";
import styles from "./experience.module.css";

const CARD_DATA = ExperienceData;

export default function Experience() {
  return (
    <section id="experience-section" className={styles.sectionContainer}>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className={styles.sectionTitle}
      >
        Experience<span style={{ color: "#1c51f2" }}>.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.subtitle}
      >
       Check out my professional journey so far, where I’ve worked on building thoughtful, 
       high-quality web applications.
      </motion.p>
      {CARD_DATA.map((data, i) => (
        <ExperienceCard key={"expcard-" + i} data={data} />
      ))}
    </section>
  );
}
