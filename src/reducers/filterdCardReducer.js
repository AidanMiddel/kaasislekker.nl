

const filterdCardReducer = (state, action) => {
    if (state === undefined){
        return [];
    }
    if (action.type === "FILTERDCARDS"){
        return action.payload;
    }
    return state
}

export default filterdCardReducer