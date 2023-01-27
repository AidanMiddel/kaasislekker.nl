import "./Foot.css";

const Foot = () => {
    return (
        <article className="foot">
            <section className="foot__section">
                <h1>Adres:</h1>
                <p>
                    DieEneWegInAmsterdam 69 <br />
                    Hamsterdam <br />
                    2169KB
                </p>
            </section>
            <section className="foot__section">
                <h1>Kvk nummer:</h1>
                <p>79832498732479803254098</p>
            </section>
            <section className="foot__section">
                <h1>Socials:</h1>
                <img className="foot__logo foot__logo--insta" src="img/insta.webp" alt="" /><img className="foot__logo" src="img/face.webp" alt="" />
            </section>
        </article>
    )
}

export default Foot