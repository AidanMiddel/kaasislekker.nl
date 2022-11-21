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
                        Deze website is onstaan omdat ik van school een React.js website moest maken over eten. 
                    </p>
                </section>
            </article>
            <img className="about__img" src="/img/about_cheese.jpg" alt="" />
        </div>
    )
}

export default About