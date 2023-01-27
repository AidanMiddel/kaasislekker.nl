import "./About.css"

const About = (props) => {
    return (
        <div className="about" id={props.id}>
            <article className="about__article">
                <header className="about__header">
                    <h1>Over Kaasislekker.nl</h1>
                </header>
                <section className="about__section">
                    <p>
                        Kaasislekker.nl biedt een unieke ervaring voor kaasliefhebbers door middel van onze abonnementen met verschillende rangen:
                        BASIC, STANDAARD en PREMIUM. <br /> Elk abonnement biedt een toenemende hoeveelheid kaas per maand,
                        zodat u kunt genieten van een breder scala aan smaken en soorten kaas. Met een BASIC abonnement
                        krijgt u een selectie van onze meest populaire kaassoorten toegestuurd, waarmee u kunt ontdekken
                        welke kaas bij u past. Een STANDAARD abonnement biedt een grotere selectie kaas en meer variatie,
                        waarmee u uw kaaskennis kunt verdiepen. Met een PREMIUM abonnement krijgt u de meest exclusieve en
                        zeldzame kaassoorten toegestuurd, waarmee u kunt genieten van unieke smaken en texturen die niet overal
                        verkrijgbaar zijn. Onze abonnementen zijn flexibel en kunnen maandelijks worden aangepast of opgezegd.
                        Of u nu een kaasliefhebber bent of gewoon op zoek bent naar een leuke manier om kaas te ontdekken,
                        wij hebben een abonnement dat bij u past. Schrijf u nu in voor een abonnement en ontdek de wereld van kaas met ons!
                    </p>
                </section>
            </article>
            <img className="about__img" src="/img/about_cheese.webp" alt="" />
        </div>
    )
}

export default About