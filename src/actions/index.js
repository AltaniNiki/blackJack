export const PAGE='PAGE';
export const ADDCARDPLAYER='ADDCARDPLAYER';
export const ADDCARDDEALER='ADDCARDDEALER';
export const SCOREPLAYER = 'SCOREPLAYER';
export const SCOREDEALER = 'SCOREDEALER';


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