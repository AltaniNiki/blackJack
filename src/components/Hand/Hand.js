import React, {Component} from 'react';
import Card from '../Card/Card.js'
import '../Card/assets/cards.css';
import {connect} from 'react-redux';


class Hand extends Component{




    render(){
        
           const cardsPlayer = this.props.playerHand.map((card,i)=>{
               return(
                <Card
                key={i}
                classCard={'rank-'+card.cardSchema}
                cardType={card.cardType}
                cardNumber={card.cardSchema}
                />
               )
            })
        
            const cardsDealer = this.props.dealerHand.map((card,i)=>{
                return(
                 <Card
                 key={i}
                 classCard={'rank-'+card.cardSchema}
                 cardType={card.cardType}
                 cardNumber={card.cardSchema}
                 />
                )
             })

        return(
           
              <div className="playingCards simpleCards">

                 {this.props.type ==='dealer' && 
                   ( <div>
                       <Card
                        classCard="back"
                       
                        /> 
                       {cardsDealer}
                    </div>)
                 } 
                
                {this.props.type ==='player' && 
                    <div>
                      {cardsPlayer}
                 </div>
                }
             </div>    
          
        )
    }
}

function mapStateToProps(state){
    return{
        playerHand:state.playerHand,
        dealerHand:state.dealerHand
    }
}

export default connect(mapStateToProps,null)(Hand);