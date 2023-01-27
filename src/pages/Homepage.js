import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";
import Features from "../components/features/Features";
import FeaturesCard from "../components/featuresCard/FeaturesCard"
import Contact from "../components/contact/Contact";
import Foot from "../components/foot/Foot";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About id="over"/>
      <Features id="features" title="Wat wij doen voor U:">
        <FeaturesCard img="card1.jpg" title="Wij kiezen de beste kazen!" subText="Wij proeven en combineren de lekkerste kazen gebaseer op feedback van de klanten" />
        <FeaturesCard img="card2.jpg" title="Wij werken met lokale boeren!" subText="Wij halen alle kaas van lokale boeren. Dat is wel lekker milleu bewust." />
        <FeaturesCard img="card3.jpg" title="Eerlijke prijzen" subText="Wij beloven altijd de boeren eerlijk te betalen voor de kazen." />
      </Features>
      <Features id="prijs" title="Abonnementen:">
        <FeaturesCard img="tier1.jpg" title="BASIC - €20 p/m" subText="Blauwschimmelkaas, ook wel blauwaderkaas genoemd, is een type schimmelkaas met een blauwe schimmel (Penicillium roqueforti) als opvallendste kenmerk. Roquefort, een schapenkaas uit Frankrijk is een goed voorbeeld. Een goedkopere soort is Bleu d'Auvergne, deze is gemaakt van koemelk." />
        <FeaturesCard img="tier2.jpg" title="STANDARD - €35 p/m" subText="Naargelang de textuur van het zuivel kunnen de Zwitserse kazen onderverdeeld worden in verschillende categorieën: extra harde kaas, harde kaas, halfharde kaas, zachte kaas, roomkaas, smeerkaas en smeltkaas." />
        <FeaturesCard img="tier3.jpg" title="PREMIUM - €50 p/m" subText="Naargelang de textuur van het zuivel kunnen de Zwitserse kazen onderverdeeld worden in verschillende categorieën: extra harde kaas, harde kaas, halfharde kaas, zachte kaas, roomkaas, smeerkaas en smeltkaas." />
      </Features>
      <Contact id="contact" />
      <Foot />
    </>
  );
}

export default Homepage;
