import React, {Component} from 'react';
import './Interface.css';
import { connect } from 'react-redux';
import {addCardPlayer} from '../../actions/index.js';

const validCard=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const validCardType=['spades','hearts','clubs','diams'];

class Interface extends Component{
    
    onAddPlayerCard=()=>{
        let selectedCard = validCard[Math.floor(Math.random()*validCard.length)];
        let selectedCardType=validCardType[Math.floor(Math.random()*validCardType.length)];
        
        let newCard={
            cardValue:selectedCard,
            cardSchema:selectedCard,
            cardType:selectedCardType
        }
        let oldPlayerHand = this.props.playerHand;
        console.log('oldPlayerHand',+oldPlayerHand);
        let newPlayerHand = {...oldPlayerHand,newCard};
        console.log('newPlayerHand',+newPlayerHand);
        // this.props.addCardPlayer(newPlayerHand)
        
    }

    render(){
        return(
            <div className='interface-container'>

              <div className='score-container'>  
                <div className="dealer-score-container">
                    <div className="score-label">
                        Dealer Score:
                    </div>
                    <div className="score-value">
                        7
                    </div>
                </div>

                <div className='player-score-container'>
                    <div className='score-label'>
                        Player Score:
                    </div>
                    <div className="score-value">
                        10
                    </div>
                </div>
              </div>

              <div className="action-container">

                <div className="deal-container">
                    Deal
                </div>
                <div className="hit-container" onClick={()=>{this.onAddPlayerCard()}}>
                    Hit
                </div>
                <div className="stand-container">
                    Stand
                </div>
              
              </div>


            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        playerHand:state.playerHand
    }
    
}

export default connect(mapStateToProps,{addCardPlayer})(Interface);