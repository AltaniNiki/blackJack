import React,{Component} from 'react';
import './assets/cards.css';

class Card extends Component{
    
    // spades: { html: <span>&spades;</span>, class: "spades" },
    // hearts: { html: <span>&hearts;</span>, class: "hearts" },
    // clubs: { html: <span>&clubs;</span>, class: "clubs" },
    // diamonds: { html: <span>&diams;</span>, class: "diams" },

    render(){
     
       if (this.props.classCard === 'back'){
           return(
            <div className="card back">
                *
            </div>
        
        )
       }
       else if (this.props.classCard !== 'back'){
            return(
                
                <div className={'card '+this.props.classCard+' '+ this.props.cardType}>
                    <span className="rank">{this.props.cardNumber}</span>
                    <span className="suit">&spades;</span>
                </div>
           
        )
       }
       
        

       
    }
}

export default Card;