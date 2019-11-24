import React, {Component} from 'react';
import './Interface.css';
import { connect } from 'react-redux';
import {addCardPlayer,addScorePlayer} from '../../actions/index.js';
import {randomCard} from '../helper.js';


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
        playerHand:state.playerHand,
        scorePlayer:state.scorePlayer,
        scoreDealer:state.scoreDealer
    }
    
}

export default connect(mapStateToProps,{addCardPlayer,addScorePlayer})(Interface);