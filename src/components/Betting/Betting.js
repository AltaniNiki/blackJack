import React,{Component} from 'react';
import '../Betting/Betting.css';
import {connect} from 'react-redux';
import { throwStatement } from '@babel/types';

class Betting extends Component{
    
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
                        <button className="minus-pot">-</button>
                        <div className="value-pot"> {this.props.bet}</div>
                        <button className="add-pot">+</button>
                    </div>
                </div>

                <div className="betting-bottom">
                    <button class="betBtn">Bet </button>
                </div>
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

export default connect(mapStateToProps,null)(Betting);