import "./FeaturesCard.css"

const FeaturesCard = (props) => {
    let cardImage = "/img/" + props.img
    if (props.img === undefined) {
        cardImage = "/img/about_cheese.webp"
    }
    return (

        <section className="cards">
            <img className="cards__img" src={cardImage} alt="" />
            <article className="cards__acticle">
                <h1 className="cards__h1">{props.title || "sample title"}</h1>
                <p className="cards__p">{props.subText || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, tempore asperiores nobis inventore hic animi! Amet, explicabo, dicta eos dolorum, illum mollitia quo repudiandae aspernatur aut neque blanditiis animi officiis."}</p>
            </article>
        </section>
    )
}

export default FeaturesCard;