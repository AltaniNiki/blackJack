export const PAGE='PAGE';
export const ADDCARDPLAYER='ADDCARDPLAYER';

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