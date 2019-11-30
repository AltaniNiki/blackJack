
import {PAGE,ADDCARDPLAYER,ADDCARDDEALER,SCOREPLAYER,SCOREDEALER,WINNERGAME,UPDATEBET,UPDATEMONEY} from '../actions/index.js'
const initStore={
    playerHand:[],
    dealerHand:[],
    page:'Menu',
    round:0,
    scorePlayer:0,
    scoreDealer:0,
    winner:'',
    money:100,
    bet:0
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
        case WINNERGAME:
            return{...state,winner:action.payload} 
        case UPDATEBET:       
            return{...state,bet:action.payload}
        case UPDATEMONEY:
            return{...state,money:action.payload}
        default:
            return state;
    }
}

export default reducer;