"use client";
import styles from "./connect.module.css";
import { motion } from "motion/react";
import { EmailIcon, LinkedinIcon, GitIcon } from "@/components/svgIcons";

export default function Connect() {
  const cardList = [
    {
      icon: <EmailIcon height={"2rem"} width={"auto"} />,
      title: "Email",
      subtitle: "rodrigomartinezsanchez.rms@gmail.com",
      message: "Send me an email",
      bg: "linear-gradient(120deg, #8da9ff 0%, #1c51f2 90%)",
      link: "mailto:rodrigomartinezsanchez.rms@gmail.com",
      delay: 0.5,
    },
    {
      icon: <LinkedinIcon height={"2rem"} width={"auto"} />,
      title: "Linkedin",
      subtitle: "Check my profile",
      message: "Let's connect on linkedin",
      bg: "linear-gradient(120deg, #0077B5 0%, #0077B5 90%)",
      link: "https://www.linkedin.com/in/rodrigo-martinez-36b2721b0",
      delay: 1,
    },
    {
      icon: <GitIcon height={"2rem"} width={"auto"} />,
      title: "GitHub",
      subtitle: "Check out my code",
      message: "View my repositories",
      bg: "linear-gradient(120deg, #374151 0%, #111827 90%)",
      link: "https://github.com/Rodrigo4419",
      delay: 1.5,
    },
  ];

  const redirect = (link: string) => {
    const element = document.createElement("a");
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.href = link;
    element.click();
  };

  const Card = ({ icon, title, subtitle, message, bg, delay, link }: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: delay,
          duration: 0.5,
        }}
        onClick={() => redirect(link)}
      >
        <motion.div
          whileHover={{
            translateY: "-10%",
            transition: {
              type: "tween",
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className={styles.connectCard}
        >
          <div
            className={styles.iconContainer}
            style={{
              background: bg,
            }}
          >
            {icon}
          </div>
          <h4>{title}</h4>
          <p className={styles.cardLink}>{subtitle}</p>
          <p className={styles.cardText}>{message}</p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="contact-section" className={styles.sectionContainer}>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className={styles.sectionTitle}
      >
        Let's Conect<span style={{ color: "#1c51f2" }}>.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.subtitle}
      >
        Always open to connecting with developers and collaborators. Let’s build
        something great.
      </motion.p>
      <div className={styles.cardsContainer}>
        {cardList.map((card, i) => (
          <Card
            key={`connect-${i}`}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            message={card.message}
            bg={card.bg}
            delay={card.delay}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}
