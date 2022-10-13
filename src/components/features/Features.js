import "./Features.css";

const Features = (props) => {
    return (
        <article className="features">
            <h1 className="features__title">{props.title} </h1>
            <section className="card">
                {props.children}
            </section>
        </article>
    )
}

export default Features;
