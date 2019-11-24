import React, {Component} from 'react';
import './Interface.css';



class Interface extends Component{
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
                <div className="hit-container">
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

export default Interface;