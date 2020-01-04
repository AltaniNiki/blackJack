import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return (
            <div className="introduction-container">
                <div className="title-containt">
                    <i className="material-icons">
                        info_outline
                    </i>
                    <div className="title">BlackJack Information</div>
                </div>
                <div className="basic-intro">
                    <div className="subtitle"> <u>Introduction</u></div>
                    <p className="paragraph">
                        The North American game of Blackjack, also known as 21, has been one of the most popular casino games of the last hundred years and has spread throughout the world. In the 21st century it has been overtaken in popularity by Slots (slot machine games), but it remains one of the most popular casino card games and is available in almost all casinos both on and offline.
    
                        Blackjack is a casino banked game, meaning that players compete against the house rather than each other. The objective is to get a hand total of closer to 21 than the dealer without going over 21 (busting).
                        
                        At the start of a Blackjack game, the players and the dealer receive two cards each. The players' cards are normally dealt face up, while the dealer has one face down (called the hole card) and one face up. The best possible Blackjack hand is an opening deal of an ace with any ten-point card.
                        
                        The house advantage of this game is derived from several rules that favour the dealer. The most significant of these is that the player must act before the dealer, allowing the player to bust and lose their bet before the dealer plays.
                    </p>

                    <div className="subtitle"> <u>Equipment</u></div>
                    <p className="paragraph">
                        Blackjack is played with a standard international deck of cards with the Jokers removed, leaving 52 cards. Originally the game was played with a single deck. However, as a counter measure to card counting, casinos introduced multi-deck games, based on the false assumption that if there were more cards in play it would be harder for the card counter to keep track of them all. As a result, 
                        Blackjack is now usually offered in either single deck, double deck, 4 deck,6 deck or 8 deck variants.
                        It should be noted that there are exceptions in online casinos where far larger numbers of decks can be used than would be practical to manage offline.
                        Aside from the cards, the game requires a table, chips, a discard tray, cut card and a shoe.
                        After the dealer has shuffled a player will be selected at random and asked to take the cut card – a coloured plastic card matching the playing cards in size – and place it at a random position within stack of cards. The dealer will then move the cards above the cut card to the back of the stack. This technique is intended to demonstrate to the players that the dealer cannot have rigged the deck. 
                        The cut card is then reinserted into the stack of cards by the dealer at a pre-defined position and when this card is reached this indicates the final deal of the game before the cards are shuffled.
                        Where multiple decks are used, after the shuffle the cards will be placed into a dispenser called a shoe. This piece of equipment has two purposes: to hold large stacks of cards in multi-deck games and make the practice of hole carding (cheating by catching a glimpse of the dealer’s hole card) more difficult. In fact hole carding is not illegal in the vast majority of jurisdictions. 
                        If the dealer is poorly trained or sloppy enough to fail to protect their down card from being seen by a player at the table this is not the player's fault and the player is not obliged to look away to prevent themselves seeing the down card. If however the player uses any form of device, for instance a metal lighter to observe the reflection in, or an accomplice off table signals the information to them, this is cheating. Hole carding
                        is only legal where the player can see the card naturally from one of the player positions at the table.
                    </p>

                    <div className="subtitle"> <u>Card Values</u> </div>
                    <div>

                    </div>
                </div>


            </div>
        )
    }
}


export default Introduction;