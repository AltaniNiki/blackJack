import React , {Component} from 'react';
import './Table.css'
import Hand from '../Hand/Hand.js';
import Interface from '../Interface/Interface.js';

class Table extends Component{
    render(){
        return(
            <div className="tableContainer">
                <Hand/>
                <Interface/>
                <Hand/>
            </div>
        )
    }
}

export default Table;