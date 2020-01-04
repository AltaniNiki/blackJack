import React ,{Component}from 'react';
import '../Card/assets/cards.css';
import './menu.css';
import { connect } from 'react-redux';
import {pageChange,addCardPlayer,addCardDealer,addScorePlayer,addScoreDealer} from '../../actions/index.js'
import {randomCard} from '../helper.js';



class Menu extends Component{

    onStartGame=()=>{
        let newCardDealer = randomCard();
        let newCardPlayer = randomCard();
    /* Player Card*/
        let oldPlayerHand = [...this.props.playerHand];
        let newPlayerHand = [...oldPlayerHand,newCardPlayer];
        this.props.addCardPlayer(newPlayerHand)
    /* Dealer Card */
        let oldDealerHand = [...this.props.dealerHand];
        let newDealerHand = [...oldDealerHand,newCardDealer];
        this.props.addCardDealer(newDealerHand)

    /*  score Player */
        let oldScorePlayer = this.props.scorePlayer;
        let newScorePlayer = oldScorePlayer + newCardPlayer.cardValue;
        this.props.addScorePlayer(newScorePlayer);

    /* score Dealer */    
        let oldScoreDealer = this.props.scoreDealer;
        let newScoreDealer = oldScoreDealer + newCardDealer.cardValue;
        this.props.addScoreDealer(newScoreDealer);

    /* chane page */
        this.props.pageChange('Table')  
    }

    render(){
        return(
            <div className='menu-container'>
                <div className='menu-icon-card'>
                    <div className="playingCards">
                            <ul className="hand">
                                <li>
                                    <div className="card rank-Q spades">
                                        <span className="rank">Q</span>
                                        <span className="suit">&spades;</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card rank-a clubs">
                                        <span className="rank">A</span>
                                        <span className="suit">&clubs;</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="card rank-a hearts">
                                        <span className="rank">J</span>
                                        <span className="suit">&hearts;</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card rank-a diams">
                                        <span className="rank">K</span>
                                        <span className="suit">&diams;</span>
                                    </div>
                                </li>
                            </ul>

                    </div>
                </div>

                <div className="title-game">
                    BlackJack
                </div>
              
                <div className="button-start-container">
                    <button className="btn-start" onClick={()=>this.onStartGame()}>Let's Play</button>
                </div>

                <div className="introductions" onClick={()=>this.props.pageChange('Introduction')}>
                    <i className="material-icons">
                        info_outline
                    </i>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        page:state.page,
        playerHand:state.playerHand,
        dealerHand:state.dealerHand,
        scorePlayer:state.scorePlayer,
        scoreDealer:state.scoreDealer
    }
}
export default connect(mapStateToProps,{pageChange,addCardPlayer,addCardDealer,addScorePlayer,addScoreDealer})(Menu);