import React,{Component} from 'react';
import '../Betting/Betting.css';
import {connect} from 'react-redux';
import {updateBet,updateMoney} from '../../actions/index.js';


class Betting extends Component{

    changeBet=(num)=>{
      
        

       let oldBet= this.props.bet;
       let newBet = oldBet + num;
        this.props.updateBet(newBet);

       let oldMoney = this.props.money;
       let newMoney = oldMoney - num;
       this.props.updateMoney(newMoney);
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

export default connect(mapStateToProps,{updateBet,updateMoney})(Betting);