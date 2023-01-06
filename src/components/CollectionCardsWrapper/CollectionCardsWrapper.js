import "./CollectionCardsWrapper.css";
import CollectionCardsInfo from "../CollectionCardsInfo/CollectionCardsInfo";
import CollectionCards from "../CollectionCards/CollectionCards";

const CollectionCardsWrapper = (props) => {
    return (
        <section className="collectionCardsWrapper">
            <CollectionCardsInfo/>
            <CollectionCards/>
        </section>
    )
}

export default CollectionCardsWrapper;