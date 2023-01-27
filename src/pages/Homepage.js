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
        <FeaturesCard img="card1.webp" title="Wij kiezen de beste kazen!" subText="Wij proeven en combineren de lekkerste kazen gebaseer op feedback van de klanten" />
        <FeaturesCard img="card2.webp" title="Wij werken met lokale boeren!" subText="Wij halen alle kaas van lokale boeren. Dat is wel lekker milleu bewust." />
        <FeaturesCard img="card3.webp" title="Eerlijke prijzen" subText="Wij beloven altijd de boeren eerlijk te betalen voor de kazen." />
      </Features>
      <Features id="prijs" title="Abonnementen:">
        <FeaturesCard img="tier1.webp" title="BASIC - €20 p/m" subText="Met het BASIC abonnement krijgt u maandelijks 5 van de meest populaire kaassoorten toegestuurd, waarmee u kunt ontdekken welke kaas bij u past." />
        <FeaturesCard img="tier2.webp" title="STANDARD - €35 p/m" subText="Met het STANDARD abonnement krijgt u maandelijks 10 verschillende kaassoorten toegestuurd met meer variatie, waarmee u uw kaaskennis kunt verdiepen." />
        <FeaturesCard img="tier3.webp" title="PREMIUM - €50 p/m" subText="Met het PREMIUM abonnement krijgt u maandelijks 15 van onze meest exclusieve en zeldzame kaassoorten toegestuurd, waarmee u kunt genieten van unieke smaken en texturen die niet overal verkrijgbaar zijn." />
      </Features>
      <Contact id="contact" />
      <Foot />
    </>
  );
}

export default Homepage;
