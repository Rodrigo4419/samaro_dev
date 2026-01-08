"use client";
import { motion } from "motion/react";
import { ProyectCard } from "@/components/ui/index";
import { AnimatedCalendar } from "@/components/svgIcons";
import styles from "./projects.module.css";
type TProps = {
  image: any;
  title: string;
  description: string;
  tags: string[];
  link: string;
};
export default function Projects() {
  const cardList = [
    {
      image: "/proyectScreens/SpatialDraw.png",
      title: "Spatial Draw",
      altImg: "spatial draw proyect",
      description: `Spatial Draw is a useful and intuitive tool designed for anyone who needs an easy way
          to create and save geospatial data in KML and GeoJSON formats. It allows you to customize
          the basic styles of your geometries and add information and properties to them — all of which
          can be viewed seamlessly in Google Earth.`,
      tags: ["React.js", "Typescript", "Vite", "Deck.gl", "Mapbox", "AWS"],
      link: "http://spatial-draw-front.s3-website-us-east-1.amazonaws.com/",
    },
    {
      image: "/proyectScreens/SmartMenu.png",
      title: "Smart Menu",
      altImg: "smart menu proyect",
      description: `Smart Menu is an agile and easy-to-use tool designed to help nutritionists create, manage, and share 
      diet and meal plans for their patients. The platform allows users to upload CSV files to work with their own data 
      and export PDF documents containing patient information and personalized diet plans.`,
      tags: ["React.js", "Typescript", "Vite", "Joy UI", "AWS"],
      link: "http://smart-menu-front.s3-website-us-east-1.amazonaws.com/",
    },
  ];
  return (
    <section id="projects-section" className={styles.sectionContainer}>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className={styles.sectionTitle}
      >
        Featured Projects<span style={{ color: "#1c51f2" }}>.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.subtitle}
      >
        A showcase of some of my personal portfolio projects, 
        ranging from a geospatial creation tool to a tool designed for nutritionists.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.cardsContainer}
      >
        {cardList.map(({ image, title, altImg, description, tags, link }) => (
          <ProyectCard
            key={title}
            image={image}
            title={title}
            altImg={altImg}
            description={description}
            tags={tags}
            link={link}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className={styles.comingSoonContainer}
      >
        <div className={styles.iconContainer}>
          <AnimatedCalendar height="3rem" width="3rem" />
        </div>
        <h3>More Projects coming soon</h3>
        <p>
          Check back soon to see updates on my latest creative solutions.
           I'm constantly working on new projects and experiments.
        </p>
        <div className={styles.chipContainer}>
          <div className={styles.chip}>React</div>
          <div className={styles.chip}>AI</div>
          <div className={styles.chip}>Python</div>
          <div className={styles.chip}>Vue</div>
        </div>
      </motion.div>
    </section>
  );
}
