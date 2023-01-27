import "./Intro.css"

const Intro = () => {
    return(
        <article className="container">
            <img className="container__background" src="img/kaasislekker.webp" alt="" />
            <section className="container__text">
                <h1 className="container__text--header">Kaas is Lekker</h1>
                <p className="container__text--footer">Al jouw favoriete kaas op één plek!</p>
            </section>
        </article>
    )
}

export default Intro;