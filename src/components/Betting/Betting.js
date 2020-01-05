import React,{Component} from 'react';
import '../Betting/Betting.css';
import {connect} from 'react-redux';
import {updateBet,updateMoney, pageChange,addCardPlayer,addCardDealer,addScoreDealer,addScorePlayer,winnerGame} from '../../actions/index.js';


class Betting extends Component{

    changeBet=(num)=>{
      
        

       let oldBet= this.props.bet;
       let newBet = oldBet + num;
        this.props.updateBet(newBet);

       let oldMoney = this.props.money;
       let newMoney = oldMoney - num;
       this.props.updateMoney(newMoney);
    }

    onCheckOut=()=>{

        this.props.addCardPlayer([]);
        this.props.addCardDealer([]);
        this.props.addScoreDealer(0);
        this.props.addScorePlayer(0);
        this.props.winnerGame('');
        this.props.pageChange('Menu');
    }
    
    render(){
        return(
            <div className="betting-container">
                <div className="betting-top">
                    Bet
                </div>
                <div className="betting-content">
                    <div className="betting-money">
                            Money: {this.props.money}
                    </div>

                    <div className="pot-container">
                        <button className={this.props.bet>0 ?"minus-pot":'minus-pot disable-btn'}  onClick={()=>{this.changeBet(-5)}}>-</button>
                        <div className="value-pot"> {this.props.bet}</div>
                        <button className="add-pot" onClick={()=>{this.changeBet(5)}}>+</button>
                     
                    </div>
                    <div className="check-out">
                          <button onClick={()=>{this.onCheckOut()}}> Check Out</button>
                        </div> 
                </div>
{/* 
                <div className="betting-bottom">
                    <button className="betBtn">Bet </button>
                </div> */}
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        money:state.money,
        bet:state.bet
    }
}

export default connect(mapStateToProps,{updateBet,updateMoney,pageChange,addCardPlayer,addCardDealer,addScoreDealer,addScorePlayer,winnerGame})(Betting);