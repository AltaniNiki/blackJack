import React ,{Component}from 'react';
import '../Card/assets/cards.css';
import './menu.css';
import { connect } from 'react-redux';
import {pageChange} from '../../actions/index.js'

class Menu extends Component{
    render(){
        return(
            <div className='menu-container'>
                <div className='menu-icon-card'>
                    <div className="playingCards">
                            <ul className="hand">
                                <li>
                                    <div className="card rank-Q spades">
                                        <span className="rank">Q</span>
                                        <span className="suit">&spades;</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card rank-a clubs">
                                        <span className="rank">A</span>
                                        <span className="suit">&clubs;</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="card rank-a hearts">
                                        <span className="rank">J</span>
                                        <span className="suit">&hearts;</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card rank-a diams">
                                        <span className="rank">K</span>
                                        <span className="suit">&diams;</span>
                                    </div>
                                </li>
                            </ul>

                    </div>
                </div>

                <div className="title-game">
                    BlackJack
                </div>
              
                <div className="button-start-container">
                    <button className="btn-start" onClick={()=>this.props.pageChange('Table')}>Let's Play</button>
                </div>
              
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        page:state.page
    }
}
export default connect(mapStateToProps,{pageChange})(Menu);