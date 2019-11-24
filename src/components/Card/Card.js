import React,{Component} from 'react';
import './assets/cards.css';

class Card extends Component{
    render(){
        return(
            <div className="playingCards simpleCards">
               <div className="card rank-7 spades">
                    <span className="rank">7</span>
                    <span className="suit">&spades;</span>
                </div>
            </div>
        )
    }
}

export default Card;