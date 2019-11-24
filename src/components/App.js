import React from 'react';
import Table from './Table/Table.js'
import './App.css';
import Menu from './Menu/menu.js';
import {connect } from 'react-redux';

class App extends React.Component{


    render(){
        return(
            <div className="blackJackContainer">
            
               {this.props.page ==='Menu' && <Menu/>} 
               {this.props.page === 'Table' && <Table/>}
            
            </div>
        )
    }
}


function mapStateToProps(state){
  
    return{
      page :state.page
    };
  }
export default  connect (mapStateToProps,null)(App);