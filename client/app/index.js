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
            showControllers: false,
            onShowSlots: this.onShowSlots.bind(this),
            onFetchTodo: this.onFetchTodosFromDatabase.bind(this),
            onShowSettings: this.onShowSettings.bind(this),
            onClickSlots: this.onClickSlots.bind(this),

        }
    }
    onShowSlots(){
        this.disableOtherEvents();
        this.setState({
            showSlots: !this.state.showSlots,
        });
    }
    onShowSettings() {
        this.disableOtherEvents();
        this.setState({
            showSettings: !this.state.showSettings,
        });
    }
    onShowSlotsAndControllers() {
        this.disableOtherEvents();
        this.setState({
            showControllers: true,
        });
    }
    disableOtherEvents() {
        this.setState({
            showSlots: false,
            showSettings: false,
            showControllers: false,
        });
    }

    onFetchTodosFromDatabase() {
        let request = new XMLHttpRequest();
        request.open('GET', '/todo', true);
        request.onload = function() {
            let todos = JSON.parse(request.responseText);
            console.log(todos);
        }
        request.send();
    }
    
    onClickSlots() {
        this.onShowSlots();
        this.onFetchTodosFromDatabase();
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
                   <div className="col-md-4 col-sm-12">
                       <Todo showControllers={this.onShowSlotsAndControllers.bind(this)}/>
                   </div>
                   <div className="col-md-5 col-sm-12">
                        <Dynamic showSlots={this.state.showSlots} showSettings={this.state.showSettings} showControllers={this.state.showControllers}/>
                   </div>
                   <div className="col-md-3 col-sm-12">
                       <div className="row">
                           <div className="col-md-12">
                                <Sidebar fetchTodo={this.state.onFetchTodo} showSlots={this.state.onClickSlots} showSettings={this.state.onShowSettings}/>
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