"use client";
import { motion } from "motion/react";
import {
  ReactIcon,
  LocationIcon,
  ViteIcon,
  NextIcon,
  NodeIcon,
  AWSIcon,
  PostgresqlIcon,
  EsriIcon,
  GitIcon,
  JavascriptIcon,
  TypescriptIcon,
} from "@/components/svgIcons";
import styles from "./about.module.css";

export default function About() {
  const LIST = [
    {
      icon: <JavascriptIcon height={"2rem"} width={"2rem"} />,
      label: "Javascript",
      delay: 1,
    },
    {
      icon: <TypescriptIcon height={"2rem"} width={"2rem"} />,
      label: "Typescript",
      delay: 1.4,
    },
    {
      icon: <ReactIcon height={"2rem"} width={"2rem"} />,
      label: "React.js",
      delay: 1.8,
    },
    {
      icon: <NextIcon height={"2rem"} width={"2rem"} />,
      label: "Next.js",
      delay: 2.2,
    },
    {
      icon: <ViteIcon height={"2rem"} width={"2rem"} />,
      label: "Vite",
      delay: 2.6,
    },
    {
      icon: <NodeIcon height={"2rem"} width={"2rem"} />,
      label: "Node.js",
      delay: 1.2,
    },
    {
      icon: <AWSIcon height={"2rem"} width={"2rem"} />,
      label: "AWS",
      delay: 1.6,
    },
    {
      icon: <PostgresqlIcon height={"2rem"} width={"2rem"} />,
      label: "PostgreSQL",
      delay: 2,
    },
    {
      icon: <EsriIcon height={"2rem"} width={"2rem"} />,
      label: "Geospatial",
      delay: 2.4,
    },
    {
      icon: <GitIcon height={"2rem"} width={"2rem"} />,
      label: "Git",
      delay: 2.8,
    },
  ];

  return (
    <section id="about-section" className={styles.sectionContainer}>

      <article className={styles.articleContainer}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.5,
            duration: 0.5,
          }}
          className={styles.chip}
        >
          <LocationIcon height={"1rem"} width={"1rem"} />
          <p>Mexico, Mexico City</p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className={styles.title}
        >
          About Me<span>.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            delay: 0.5,
            duration: 0.5,
          }}
          className={styles.aboutText}
        >
          I'm a passionate{" "}
          <span style={{ color: "#1c51f2", fontWeight: "600" }}>
            Front End developer
          </span>{" "}
          with over 4 years of experience designing and implementing web-based
          applications across the energy and technology sectors.
          <br></br>
          <br></br>I have successfully developed a full-featured platform for
          visualizing, uploading, and analyzing georeferenced data used by
          electrical networks across Mexico, Colombia, and Chile.
          <br></br>
          <br></br>
          As a self-taught, passionate developer, I keep expanding my front-end
          and UX skills while enjoying cross-functional teamwork that pushes
          technical boundaries.
        </motion.p>
      </article>
      <aside className={styles.aside}>
        {LIST.map((skill) => (
          <div
            key={skill.label}
            style={{
              width: "4.5rem",
              height: "fit-content",
              position: "relative",
            }}
          >
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: skill.delay,
              duration: 0.5,
            }}
              className={styles.iconContainer}
              //style={{ animationDelay: `${skill.delay}ms` }}
            >
              {skill.icon}
            </motion.div>
            <motion.p
            initial={{ opacity: 0, scale: 0, x:"-50%" }}
            whileInView={{ opacity: 1, scale: 1, x:"-50%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: skill.delay + 2.2,
              duration: 0.5,
            }}
              className={styles.skillTag}
              //style={{ animationDelay: `${skill.delay + 1800}ms` }}
            >
              {skill.label}
            </motion.p>
          </div>
        ))}
      </aside>
    </section>
  );
}
