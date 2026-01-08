import Image from "next/image";
import styles from "./card.module.css";
//import imgn from "/SpatialDraw.png"

type TProps = {
  image: any;
  title: string;
  altImg:string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProyectCard({
  image,
  title,
  altImg,
  description,
  tags,
  link,
}: TProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.liveChip}>
        <div className={styles.liveIcon}></div>
        Vite
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          layout={"fill"}
          objectFit={"contain"}
          alt={altImg}
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.chipContainer}>
          {tags.map((tag,i) => (
            <div key={`${title}-tag-${i}`} className={styles.chip}>{tag}</div>
          ))}
        </div>
        <button className={styles.linkButton}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Page
          </a>
        </button>
      </div>
    </div>
  );
}
