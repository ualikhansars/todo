import React from 'react';
import {render} from 'react-dom';

import {Todo} from './components/Todo';
import {Sidebar} from './components/Sidebar';
import {Header} from './components/Header';
import {Calendar} from './components/Calendar';
import {Dynamic} from './components/Dynamic';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showSlots: false,
            showSettings: false,
        }
    }
    onShowSlots(){
        this.setState({
            showSlots: !this.state.showSlots
        });
    }
    onShowSettings() {
        this.setState({
            showSettings: !this.state.showSettings
        });
    }
    render() {
        return (
           <div className="page-wrapper">
               <div className="container">
               <div className="row">
                   <div className="col-md-12">
                        <Header/>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-5 col-sm-12">
                       <div className="todos">
                            <Todo title={"Buy Juice"}/>
                            <Todo title={"Create website"}/>
                       </div>
                   </div>
                   <div className="col-md-4 col-sm-12">
                        <Dynamic showSlots={this.state.showSlots} showSettings={this.state.showSettings}/>
                   </div>
                   <div className="col-md-3 col-sm-12">
                       <div className="row">
                           <div className="col-md-12">
                                <Sidebar showSlots={this.onShowSlots.bind(this)} showSettings={this.onShowSettings.bind(this)}/>
                           </div>
                           <div className="col-md-12">
                                <Calendar/>
                           </div>
                       </div>
                   </div>
               </div> 
               </div>  
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));