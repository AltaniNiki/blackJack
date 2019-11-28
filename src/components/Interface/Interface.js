import React, {Component} from 'react';
import './Interface.css';
import { connect } from 'react-redux';
import {addCardPlayer,addScorePlayer,addCardDealer,addScoreDealer,winnerGame} from '../../actions/index.js';
import {randomCard} from '../helper.js';
import { throwStatement } from '@babel/types';


class Interface extends Component{
    
    onAddPlayerCard=()=>{

        let newCardPlayer = randomCard();
        let oldPlayerHand = [...this.props.playerHand];
        let newPlayerHand = [...oldPlayerHand,newCardPlayer];
        this.props.addCardPlayer(newPlayerHand);
        /* Update score Player */
        let oldScorePlayer = this.props.scorePlayer;
        let newScorePlayer = oldScorePlayer + newCardPlayer.cardValue;
        this.props.addScorePlayer(newScorePlayer);
        console.log(newScorePlayer);
        if (newScorePlayer >21){
            console.log('mphka');
            this.props.winnerGame('Dealer');
        } 
    }

    onStandAction=()=>{
        let tempScoreDealer = this.props.scoreDealer;
        // console.log('temp init',tempScoreDealer);

        while (tempScoreDealer < this.props.scorePlayer){
            let newCardDealer = randomCard();
            // console.log('newCardDealer',newCardDealer);

            let oldDealerHand = [...this.props.dealerHand];
            let newDealerHand = [...oldDealerHand,newCardDealer];
            this.props.addCardDealer(newDealerHand);
            
            tempScoreDealer = tempScoreDealer + newCardDealer.cardValue;
            // console.log('tempScoreDealer',tempScoreDealer);
           
        }

        this.props.addScoreDealer(tempScoreDealer);
        this.onChooseWinner(tempScoreDealer);
    }

    onChooseWinner=(tempScoreDealer)=>{
        console.log(this.props.scorePlayer+' '+ tempScoreDealer);
         if (tempScoreDealer <= 21 && tempScoreDealer > this.props.scorePlayer){
            this.props.winnerGame('Dealer');
        }else if(tempScoreDealer <= 21 && tempScoreDealer < this.props.scorePlayer){
            this.props.winnerGame('Player');
        }else if (tempScoreDealer <= 21 && tempScoreDealer == this.props.scorePlayer){
            this.props.winnerGame('no one');
        }
    }
  
    clearHand=()=>{
        console.log('clear hand');
        this.props.addCardPlayer([]);
        this.props.addCardDealer([]);
        this.props.addScoreDealer(0);
        this.props.addScorePlayer(0);

    }

    

    render(){
        return(
            <div className='interface-container'>
              <div className={this.props.winner !== ''? 'winner-container':'winner-container inactiveWinner'}>
                 <div> The winner is {this.props.winner} !</div>
              </div>

              <div className='score-container'>  
                <div className="dealer-score-container">
                    <div className="score-label">
                        Dealer Score:
                    </div>
                    <div className="score-value">
                        {this.props.scoreDealer}
                    </div>
                </div>

                <div className='player-score-container'>
                    <div className='score-label'>
                        Player Score:
                    </div>
                    <div className="score-value">
                       {this.props.scorePlayer}
                    </div>
                </div>
              </div>

              <div className="action-container">

                <button className={this.props.winner !== ''?'deal-container':'deal-container disable-btn' } onClick={()=>{this.clearHand() } }> 
                    Next round
                </button>
                <button className={this.props.winner !== ''?'hit-container disable-btn':'hit-container' } onClick={()=>{this.onAddPlayerCard()}}  >
                    Hit
                </button>
                <button className={this.props.winner !== ''?'stand-container disable-btn':'stand-container' } onClick={()=>{this.onStandAction()}}>
                    Stand
                </button>
              
              </div>


            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        playerHand:state.playerHand,
        dealerHand:state.dealerHand,
        scorePlayer:state.scorePlayer,
        scoreDealer:state.scoreDealer,
        winner:state.winner
    }
    
}

export default connect(mapStateToProps,{addCardPlayer,addScorePlayer,addCardDealer,addScoreDealer,winnerGame})(Interface);