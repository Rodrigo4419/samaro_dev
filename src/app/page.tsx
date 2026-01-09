import { HomeSection, About, Projects, Experience, Connect } from "./sections";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Stars from "@/components/common/Stars";

export default function Home() {
  return (
    <>
      <Header />
      <Stars />
      <HomeSection />
      <About />
      <Projects />
      <Experience />
      <Connect />
      <Footer />
    </>
  );
}
