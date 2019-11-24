const initStore={
    playerHand:[],
    dealerHand:[],
    page:'menu',
    round:0,
    scorePlayer:0,
    scoreDealer:0
}


function reducer(state=initStore,action){
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;