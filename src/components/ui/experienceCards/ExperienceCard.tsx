"use client";
import { motion } from "motion/react";
import { AnimatedCalendar } from "@/components/svgIcons";
import styles from "./experienceCard.module.css";

type DataProps = {
  company: string;
  subtitle: string;
  chip: string;
  description: string;
  achievements: string[];
  techList: string[];
  date: string;
  dateSub: string;
};

type TProps = {
  data: DataProps;
  //keyval:string;
};

export default function ExperienceCard({ data }: TProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "50%" }}
      whileInView={{ opacity: 1, x: "0%" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 2 }}
      className={styles.experienceMap}
    >
      <div className={styles.dot}></div>
      <div className={styles.line}></div>

      <article className={styles.experienceCard}>
        <div style={{ display: "flex" }}>
          <div>
            <h4>
              {data.company}{" "}
              <span className={styles.currentChip} style={data.chip !== 'Current Role' ? {color:'#0099ffff',backgroundColor:'#0099ff2a'}:{}}>{data.chip}</span>
            </h4>
            <p className={styles.subtitleCard}>{data.subtitle}</p>
            <span className={styles.responsiveDate}>
              <AnimatedCalendar height={"1rem"} width={"1rem"} />
              {data.date}
            </span>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <p className={styles.dateCard}>{data.date}</p>
            <p className={styles.lapseCard}>{data.dateSub}</p>
          </div>
        </div>
        <p className={styles.descriptionCard}>{data.description}</p>
        <h5>Key Achievements</h5>
        <div className={styles.listContainer}>
          {data.achievements.map((text,i) => (
            <div key ={'listExp-'+i} className={styles.listItem}>
              <div className={styles.listDot}></div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <h5>Technologies</h5>
        <div className={styles.chipContainer}>
          {data.techList.map((label,i) => (
            <div key ={'expChip-'+i} className={styles.chip}>{label}</div>
          ))}
        </div>
      </article>
    </motion.div>
  );
}
