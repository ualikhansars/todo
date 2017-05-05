import React from 'react';
import {SlotsForm} from './SlotsForm';

export class Slots extends React.Component {
    constructor() {
            super();
            this.state = {
                showSlotForm: false,
                todos: []
            }
    }

    onShowSlotForm() {
        this.setState({
            showSlotForm: !this.state.showSlotForm,
        });
    }

    // to bind form to the DOM
    onAddFormToDOM() {
        document.addEventListener("DOMContentLoaded", function(event) { 
        this.onShowSlotForm();
        // this.onFetchTodosFromDatabase();
        });
    }

    componentDidMount() {
       this.onFetchTodosFromDatabase();
    }

    // ajax(url) {
    //     return new Promise(function(resolve, reject) {
    //         var xhr = new XMLHttpRequest();
    //         xhr.onload = function() {
    //             resolve(this.responseText);
    //         };
    //         xhr.onerror = reject;
    //         xhr.open('GET', url);
    //         xhr.send();
    //         });
    // }
    


    onFetchTodosFromDatabase() {
        let renderTodo = this.renderTodo;
        let request = new XMLHttpRequest();
        request.open('GET', '/todo', true);

        request.onload = function() {
            let data = JSON.parse(request.responseText);
            this.setState({
                todos: data
            })
        }.bind(this);
        request.send();
    }

    // getApi(apiRoute, callback){
    //     var request = new XMLHttpRequest();
        
    //     request.addEventListener('load', dataHandler);
    //     request.open('GET', apiRoute); //sends to the API you include
    //     request.send();
        
    //     function dataHandler(){
    //         //this passes "this.responseText" to your callback function
    //         callback(this.responseText);
    //     }
    // }

    renderTodo(data) {
        // let todoContainer = document.createElement('div');
        let todoContainer = document.getElementById('dynamic');
        let todoString = '';
        for(let todo of data) {
            todoString += '<div id="slots_todo_item"><p> Title: ' + todo.title + '</p>';
            todoString += '<p> Duration: ' + todo.duration + '</p></div>'; 
        }
       todoContainer.insertAdjacentHTML('beforeend', todoString);
  }

  onSetState(prevState, nextState) {
    this.setState({
        prevState: nextState
    });
  }

    render() {
        let isShowSlotForm = this.state.showSlotForm;

        if(isShowSlotForm) {
            return (
                <div className="row dynamic">
               <div className="row">
                <div className="createNew col-md-12">
                    <button onClick={this.onShowSlotForm.bind(this)} className="btn btn-success">Create new</button>
                </div>
                </div>
                <SlotsForm showSlotsForm={this.onAddFormToDOM.bind(this)}/>
                <div className="row dynamic-item">
                </div>
            </div>  
            );
        } else {
            return(
            <div className="row dynamic">
               <div className="row">
                <div className="createNew col-md-12">
                    <button onClick={this.onShowSlotForm.bind(this)} className="btn btn-success">Create new</button>
                </div>
            </div>

            <div className="row dynamic-item">
                 <ul className="todo-item">
                    {this.state.todos.map((todo,i) => 
                        <li key={i}>{todo.title}</li>   
                    )}
                 </ul>
            </div>
          </div>  
        );
        }
    }
}