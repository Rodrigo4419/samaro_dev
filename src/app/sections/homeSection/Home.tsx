"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon, DownloadIcon } from "@/components/svgIcons";
import styles from "./home.module.css";

export default function Home() {
  
  const download =() =>{
    const link = document.createElement('a')
    link.href = "/files/cv.pdf"
    link.download = "cv.pdf"
    link.click()
  }
  return (
    <section id="home-section" className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={styles.title}
        >
          Hey ,I'm
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={styles.name}
        >
          Rodrigo Martínez
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className={styles.title}
        >
          <span className={styles.frontSpan}>Front End</span> developer crafting
          digital experiences in <span className={styles.mxSpan}>Mexico</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          I design and build high-quality web applications with a strong focus on performance,
           accessibility, and user experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className={styles.buttonContainer}
        >
          <motion.a
            initial="rest"
            whileHover="hover"
            className={styles.connectButton}
            href="#contact-section"
          >
            Lets connect{" "}
            <motion.span
              variants={{
                rest: { x: 0 },
                hover: {
                  x: [0, 6, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              <ArrowRightIcon height="1.5rem" width="1.5rem" />
            </motion.span>
          </motion.a>
          <motion.button
            initial="rest"
            whileHover="hover"
            className={styles.cvButton}
            onClick={()=>download()}
          >
            Download CV{" "}
            <motion.span
              variants={{
                rest: { y: 0 },
                hover: {
                  y: [0, 4, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    //ease: "easeInOut",
                  },
                },
              }}
            >
              <DownloadIcon height="1.5rem" width="1.5rem" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
