import React from 'react';
import Table from './Table/Table.js'
import './App.css';

class App extends React.Component{


    render(){
        return(
            <div className="blackJackContainer">
                <Table/>
            </div>
        )
    }
}

export default App;