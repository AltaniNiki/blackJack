import React , {Component} from 'react';
import './Table.css'
import Hand from '../Hand/Hand.js';
import Interface from '../Interface/Interface.js';
import Betting from '../Betting/Betting.js';

class Table extends Component{

    render(){

        return(
            <div className="tableContainer">
                <Hand 
                 type='dealer'
                 />
                <Interface/>

                <div class="player-container">

                    <div className="hand-player">
                        <Hand
                        type='player'
                        />
                    </div>
                   
                   <div className="pot-player-container">
                       <Betting/>
                   </div> 
                   
                </div>
                
            </div>
        )
    }
}

export default Table;