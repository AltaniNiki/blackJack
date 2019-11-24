import {PAGE,ADDCARDPLAYER} from '../actions/index.js'
const initStore={
    playerHand:[
        {cardValue:10,
         cardSchema:'10',
         cardType:'spades'
        },
        { cardValue:10,
          cardSchema:'A',
          cardType:'spades'
        },
    ],
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
        default:
            return state;
    }
}

export default reducer;