import tw from "tailwind-styled-components";
import AboutItems from "./components/AboutItems";
import BlogItems from "./components/BlogItems";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import NavTiles from "./components/NavTiles";
import ProjectItems from "./components/projectItems";
import Sponsors from "./components/Sponsors";
export default function Home() {
  const headingStyles = "bg-primaryColor";
  return (
    <Wrapper>
      <Header
        heading="Raise you helping hand for Deprived Women"
        subHeading="fkyfy,v,yf v f yf fdy iyfbfku fy lfyi"
        heroImg="./img/we1.jpg"
        heroAlt="woman with young baby at the farm"
      />
      <NavTiles />
      <MainHeading text="Recent News & Events" clas={headingStyles} />
      <BlogItems />
      <MainHeading text="Where we are" clas={headingStyles} />
      <ProjectItems />
      <MainHeading text="Our Mission" clas={headingStyles} />
      <AboutItems />
      <ContactForm />
      <MainHeading text="Sponsors/Collaberators" clas={headingStyles} />

      <Sponsors />
      <Footer />
    </Wrapper>
  );
}
const Wrapper = tw.div`w-full flex flex-col items-center`;
