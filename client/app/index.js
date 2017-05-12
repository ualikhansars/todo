import React from 'react';
import {render} from 'react-dom';

import {Todos} from './components/Todos';
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
            onShowSlots: this.onShowSlots.bind(this),
            onShowSettings: this.onShowSettings.bind(this),
            fetchTodo: this.onFetchTodosFromDatabase.bind(this),
            todos: []
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
    disableOtherEvents() {
        this.setState({
            showSlots: false,
            showSettings: false,
            showControllers: false,
        });
    }
    
    onFetchTodosFromDatabase() {
        let renderTodo = this.renderTodo;
        let request = new XMLHttpRequest();
        request.open('GET', '/todo', true);

        request.onload = function() {
            let data = JSON.parse(request.responseText);
            this.setState({
                todos: data
            });
        }.bind(this);
        request.send();
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
                       <Todos fetchTodo={this.state.fetchTodo} todos={this.state.todos}/>
                   </div>
                   <div className="col-md-5 col-sm-12">
                        <Dynamic showSlots={this.state.showSlots} showSettings={this.state.showSettings} fetchTodo={this.state.fetchTodo} todos={this.state.todos}/>
                   </div>
                   <div className="col-md-3 col-sm-12">
                       <div className="row">
                           <div className="col-md-12">
                                <Sidebar showSlots={this.state.onShowSlots} showSettings={this.state.onShowSettings}/>
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
