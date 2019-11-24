import React, {Component} from 'react';
import Card from '../Card/Card.js'
import '../Card/assets/cards.css';

class Hand extends Component{

    render(){
        return(
           
              <div className="playingCards simpleCards">

                 {this.props.type ==='dealer' && 
                   ( <div>
                       <Card
                        classCard="back"
                       
                        /> 
                        <Card
                        classCard="rank-7"
                        cardType="spades"
                        cardNumber='7'
                        /> 
                    </div>)
                 } 
                
                {this.props.type ==='player' && 
                    <div>
                        <Card
                        classCard="rank-10"
                        cardType="spades"
                        cardNumber='10'
                        />
                    </div>
                }
             </div>    
          
        )
    }
}

export default Hand;