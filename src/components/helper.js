export const validCard=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

export const validCardType=['spades','hearts','clubs','diams'];

export function randomCard(){
    let selectedCard = validCard[Math.floor(Math.random()*validCard.length)];
    let selectedCardType=validCardType[Math.floor(Math.random()*validCardType.length)];
    let value ;
    if (selectedCard === 'A' ||selectedCard === 'J' ||selectedCard === 'Q' ||selectedCard === 'K' ){
        value = 10;
    }else{
        value = Number(selectedCard);
    }

    return {
        cardValue:value,
        cardSchema:selectedCard,
        cardType:selectedCardType
    }
}