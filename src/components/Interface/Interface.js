import React, { Component } from 'react';
import './Interface.css';
import { connect } from 'react-redux';
import { addCardPlayer, addScorePlayer, addCardDealer, addScoreDealer, winnerGame, updateMoney, updateBet } from '../../actions/index.js';
import { randomCard } from '../helper.js';



class Interface extends Component {

    onAddPlayerCard = () => {

        let newCardPlayer = randomCard();
        let oldPlayerHand = [...this.props.playerHand];
        let newPlayerHand = [...oldPlayerHand, newCardPlayer];
        this.props.addCardPlayer(newPlayerHand);
        /* Update score Player */
        let oldScorePlayer = this.props.scorePlayer;
        let newScorePlayer = oldScorePlayer + newCardPlayer.cardValue;
        this.props.addScorePlayer(newScorePlayer);

        if (newScorePlayer > 21) {
            this.props.winnerGame('Dealer');
            this.updateMoneyBetAfterWin(0);
        }
    }

    onStandAction = () => {
        let tempScoreDealer = this.props.scoreDealer;
        let oldDealerHand = [...this.props.dealerHand];

        while (tempScoreDealer < this.props.scorePlayer) {
            let newCardDealer = randomCard();
            oldDealerHand = [...oldDealerHand, newCardDealer];
            tempScoreDealer = tempScoreDealer + newCardDealer.cardValue;

        }
        let newDealerHand = oldDealerHand;
        this.props.addCardDealer(newDealerHand);

        this.props.addScoreDealer(tempScoreDealer);
        this.onChooseWinner(tempScoreDealer);
    }

    onChooseWinner = (tempScoreDealer) => {
        if (tempScoreDealer <= 21 && tempScoreDealer > this.props.scorePlayer) {
            this.props.winnerGame('Dealer');
            this.updateMoneyBetAfterWin(0);
        } else if (tempScoreDealer <= 21 && tempScoreDealer < this.props.scorePlayer) {
            this.props.winnerGame('Player');
            this.updateMoneyBetAfterWin(1);
        } else if (tempScoreDealer <= 21 && tempScoreDealer == this.props.scorePlayer) {
            this.props.winnerGame('no one');
        } else if (tempScoreDealer > 21) {
            this.props.winnerGame('Player');
            this.updateMoneyBetAfterWin(1);
        }
    }

    updateMoneyBetAfterWin = (result) => {
        if (result === 1) {
            let oldMoney = this.props.money;
            let newMoney = (this.props.bet * 2) + oldMoney;
            this.props.updateMoney(newMoney);
            this.props.updateBet(0)
        } else if (result === 0) {
            this.props.updateBet(0)
        }
    }


    nextRound = () => {

        let clear = new Promise((resolve, reject) => {
            this.clearHand();
            resolve(1);
        })
        // Promise.this.clearHand();
        clear.then((result) => {
            let newCardDealer = randomCard();
            let newCardPlayer = randomCard();
            /* Player Card*/
            let oldPlayerHand = [...this.props.playerHand];
            let newPlayerHand = [...oldPlayerHand, newCardPlayer];
            this.props.addCardPlayer(newPlayerHand);
            /* Dealer Card */
            let oldDealerHand = [...this.props.dealerHand];
            let newDealerHand = [...oldDealerHand, newCardDealer];
            this.props.addCardDealer(newDealerHand)

            /*  score Player */
            let oldScorePlayer = this.props.scorePlayer;
            let newScorePlayer = oldScorePlayer + newCardPlayer.cardValue;
            this.props.addScorePlayer(newScorePlayer);

            /* score Dealer */
            let oldScoreDealer = this.props.scoreDealer;
            let newScoreDealer = oldScoreDealer + newCardDealer.cardValue;
            this.props.addScoreDealer(newScoreDealer);

        })


    }

    clearHand = () => {

        this.props.addCardPlayer([]);
        this.props.addCardDealer([]);
        this.props.addScoreDealer(0);
        this.props.addScorePlayer(0);
        this.props.winnerGame('');

    }



    render() {
        return (
            <div className='interface-container'>
                <div className={this.props.winner !== '' ? 'winner-container' : 'winner-container inactiveWinner'}>
                    <div> The winner is {this.props.winner} !</div>
                </div>

                <div className={(this.props.bet == 0 && this.props.winner === '') ? 'isbetting-container' : 'isbetting-container inactiveWinner'}>
                    <div> Please bet money!</div>
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

                    <button className={this.props.winner !== '' ? 'deal-container' : 'deal-container disable-btn'} onClick={() => { this.nextRound() }}>
                        Next round
                </button>
                    <button className={(this.props.winner !== '' || this.props.bet === 0) ? 'hit-container disable-btn' : 'hit-container'} onClick={() => { this.onAddPlayerCard() }}  >
                        Hit
                </button>
                    <button className={(this.props.winner !== '' || this.props.bet === 0) ? 'stand-container disable-btn' : 'stand-container'} onClick={() => { this.onStandAction() }}>
                        Stand
                </button>

                </div>


            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        playerHand: state.playerHand,
        dealerHand: state.dealerHand,
        scorePlayer: state.scorePlayer,
        scoreDealer: state.scoreDealer,
        winner: state.winner,
        money: state.money,
        bet: state.bet
    }

}

export default connect(mapStateToProps, { addCardPlayer, addScorePlayer, addCardDealer, addScoreDealer, winnerGame, updateMoney, updateBet })(Interface);