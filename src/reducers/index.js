import {PAGE,ADDCARDPLAYER,ADDCARDDEALER,SCOREPLAYER,SCOREDEALER} from '../actions/index.js'
const initStore={
    playerHand:[],
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
        case ADDCARDPLAYER:
            return{...state,playerHand:action.payload}  
        case ADDCARDDEALER:
            return{...state,dealerHand:action.payload}  
        case SCOREPLAYER:
            return{...state,scorePlayer:action.payload}  
        case SCOREDEALER:
            return{...state,scoreDealer:action.payload}  
        default:
            return state;
    }
}

export default reducer;