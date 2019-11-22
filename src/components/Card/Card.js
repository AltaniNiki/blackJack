import React,{Component} from 'react';
import './assets/cards.css';

class Card extends Component{
    render(){
        return(
            <div>
               <div class="card rank-7 spades">
                    <span class="rank">7</span>
                    <span class="suit">&spades;</span>
                </div>
            </div>
        )
    }
}

export default Card;