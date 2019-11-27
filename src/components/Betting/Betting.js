import React,{Component} from 'react';
import '../Betting/Betting.css';


class Betting extends Component{
    
    render(){
        return(
            <div className="betting-container">
                <div className="betting-top">
                    Bet
                </div>
                <div className="betting-content">
                    <div className="betting-money">
                            Money: 100
                    </div>

                    <div className="pot-container">
                        <button className="minus-pot">-</button>
                        <div className="value-pot">20</div>
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


export default Betting;