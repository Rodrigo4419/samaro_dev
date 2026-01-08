import { HomeSection, About, Projects, Experience, Connect} from "./sections";
import styles from "./page.module.css";

export default function Home() {

  return (
    <>
        <HomeSection/>
        <About/>
        <Projects/>
        <Experience/>
        <Connect/>
    </>
  );
}
