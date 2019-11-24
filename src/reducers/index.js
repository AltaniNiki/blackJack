import {PAGE} from '../actions/index.js'
const initStore={
    playerHand:['A','2','3'],
    dealerHand:[],
    page:'Menu',
    round:0,
    scorePlayer:0,
    scoreDealer:0
}


function reducer(state=initStore,action){
    switch(action.type){
        case PAGE: 
            return {...state,page:action.payload};
        default:
            return state;
    }
}

export default reducer;