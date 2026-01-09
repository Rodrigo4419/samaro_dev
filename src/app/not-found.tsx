import Stars from "@/components/common/Stars";
import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'

export default function NotFound() {
  return (
    <main className={styles.notFoundMain}>
      <Image
        src="/backgrounds/earth.png"
         width={186}
         height={124}
         alt='earth viwed from the moon'
         className={styles.earth}
      />

      <Image
        src="/backgrounds/surface.png"
         width={1536}
         height={506}
         alt='moon surface'
         className={styles.moon}
      />

      <Stars/>
      <section>
        <h1 className={styles.label404}>404</h1>
        <h2>Oops! Page not found</h2>
        <p>
          Looks like this page wandered off or never existed in the first place.
          Don’t worry though let’s get you back on track.
        </p>
        <Link href={'/'}>Back to Home</Link>
      </section>
    </main>
  );
}
