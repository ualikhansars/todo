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
            addToList: this.onAddToList.bind(this),
            removeFromList: this.onRemoveFromList.bind(this),
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

    //  onAddToList(id) {
    //     let xhr = new XMLHttpRequest();
    //     let url = '/todo/addtoList/' + id;
    //     if("withCredentials"  in xhr) {
    //        xhr.open('POST', url , true);
    //     } else if(typeof XDomainRequest != 'undefined'){
    //         xhr = new XDomainRequest();
    //         xhr.open('POST', url);
    //         xhr.send();
    //     } else {
    //         xhr = null;
    //     }
    // }

    // onRemoveFromList(id) {
    //     let xhr = new XMLHttpRequest();
    //     let url = '/todo/removeFromList/' + id;
    //     if("withCredentials" in xhr) {
    //        xhr.open('POST', url , true);
    //     } else if(typeof XDomainRequest != 'undefined'){
    //         xhr = new XDomainRequest();
    //         xhr.open('POST', url);
    //     } else {
    //         xhr = null;
    //     }    
    //     xhr.send();
    // }

    ajax(method, url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = () => {
                console.log('fuckkk');
                return;
            }
            xhr.onerror = reject;
            xhr.open(method, url);
            xhr.send();
            });
    }

    onRemoveFromList(id) {
       this.ajax("POST", '/todo/removeFromList/' + id).then(this.onFetchTodosFromDatabase());
    }
    onAddToList(id) {
        this.ajax("POST", '/todo/addToList/' + id);
    }
    
    
    // onAddToList(id) {
    //     new Promise(function(resolve, reject) {
    //          console.log('ADD');
    //         let xhr = new XMLHttpRequest();
    //         let url = '/todo/addtoList/' + id;
    //         xhr.open('POST', url , true);
    //         xhr.onerror = function() {
    //             console.log(xhr.responseText);
    //         }
    //         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //         console.log(reject);
    //         xhr.send();
    //         }).then(this.onFetchTodosFromDatabase())
    //     .catch(error => console.log(error));
    // }

    // onRemoveFromList(id) {
    //     let xhr = new XMLHttpRequest();
    //     let url = '/todo/removeFromList/' + id;
    //     xhr.open('POST', url , true);
    //     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     // this.onFetchTodosFromDatabase();
    //     xhr.send();
    // }

    //  onAddToList(id) {
    //     let xhr = new XMLHttpRequest();
    //     let url = '/todo/addtoList/' + id;
    //     xhr.open('POST', url , true);
    //     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     // xhr.onload = function() {
    //     //     this.onFetchTodosFromDatabase();
    //     // }.bind(this);
    //     xhr.send();
    // }
    
    onFetchTodosFromDatabase() {
        console.log('on Fetch Todo from database');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/todo', true);
        xhr.onload = function() {
            let data = JSON.parse(xhr.responseText);
            console.log('Fetch todo', data);
            this.setState({
                todos: data
            });
            console.log('end of set state');
        }.bind(this);
         xhr.send();
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
                       <Todos  removeFromList={this.state.removeFromList} fetchTodo={this.state.fetchTodo} todos={this.state.todos}/>
                   </div>
                   <div className="col-md-5 col-sm-12">
                        <Dynamic showSlots={this.state.showSlots} addToList={this.state.addToList} showSettings={this.state.showSettings} fetchTodo={this.state.fetchTodo} todos={this.state.todos}/>
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
