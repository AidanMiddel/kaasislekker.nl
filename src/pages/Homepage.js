import Intro from "../components/intro/Intro";
import About from "../components/about/About";
import Features from "../components/features/Features";
import FeaturesCard from "../components/featuresCard/FeaturesCard"
import Contact from "../components/contact/Contact";
import Foot from "../components/foot/Foot";

const Homepage = () => {
  return (
    <>
      <Intro />
      <About />
      <Features title="Wat wij doen voor U:">
        <FeaturesCard img="card1.jpg" title="Wij kiezen de beste kazen!" subText="Wij proeven en combineren de lekkerste kazen gebaseer op feedback van de klanten" />
        <FeaturesCard img="card2.jpg" title="Wij werken met lokale boeren!" subText="Wij halen alle kaas van lokale boeren. Dat is wel lekker milleu bewust." />
        <FeaturesCard img="card3.jpg" title="Eerlijke prijzen" subText="Wij beloven altijd de boeren eerlijk te betalen voor de kazen." />
      </Features>
      <Contact />
      <Foot />
    </>
  );
}

export default Homepage;
