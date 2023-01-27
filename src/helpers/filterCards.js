import CollectionCardsData from "../data/CollectionCardsData";


export const filterCards = (nameToBeSearched, milkToBeSearched) => {
    return CollectionCardsData.filter(collectionCard => {
        if (collectionCard.land.indexOf(nameToBeSearched) !== -1 && collectionCard.melk.indexOf(milkToBeSearched) !== -1) {
            return collectionCard
        }
        return null
    })
}