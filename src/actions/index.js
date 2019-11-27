export const PAGE='PAGE';
export const ADDCARDPLAYER='ADDCARDPLAYER';
export const ADDCARDDEALER='ADDCARDDEALER';
export const SCOREPLAYER = 'SCOREPLAYER';
export const SCOREDEALER = 'SCOREDEALER';
export const WINNERGAME = 'WINNERGAME';
export const BETTING_CALC= 'BETTING_CALC';
export const CLEARHAND = 'CLEARHANR'; 

export function pageChange(page){

    const action={
        type:PAGE,
        payload:page
    }
    return action;
}

export function addCardPlayer(card){
    const action={
        type:ADDCARDPLAYER,
        payload:card
    }
    return action;
}

export function addCardDealer(card){
    const action={
        type:ADDCARDDEALER,
        payload:card
    }
    return action;
}

export function addScorePlayer(score){
    const action={
        type:SCOREPLAYER,
        payload:score
    }
    return action;
}

export function addScoreDealer(score){
    const action={
        type:SCOREDEALER,
        payload:score
    }
    return action;
}

export function winnerGame(winner){
    const action={
        type:WINNERGAME,
        payload:winner
    }

    return action;
}

export function calculateBetting(pot){
    const action={
        type:BETTING_CALC,
        payload:pot
    }
    return action;
}

export function clearHand(hand){
    const action={
        type:CLEARHAND,
        payload:hand
    }

    return action;
}