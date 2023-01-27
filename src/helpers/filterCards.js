import CollectionCardsData from "../data/CollectionCardsData";


export const filterCards = (nameToBeSearched) => {
    return CollectionCardsData.filter(collectionCard => {
        if (collectionCard.title.indexOf(nameToBeSearched.charAt(0).toUpperCase() + nameToBeSearched.slice(1).toLowerCase()) !== -1) {
            return collectionCard
        }
        if (collectionCard.title.indexOf(nameToBeSearched) !== -1){
            return collectionCard
        }
        return null
    })
}