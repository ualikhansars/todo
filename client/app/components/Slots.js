import React from 'react';
import {SlotsForm} from './SlotsForm';
import {Slot} from './Slot';

export class Slots extends React.Component {
    constructor() {
            super();
            this.state = {
                showSlotForm: false,
                // todos: []
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

    onSaveTodo() {
        let xhr = new XMLHttpRequest();
        if(xhr.readyState == 4) {
            xhr.open('POST', '/todo', true);
            console.log('save todo');
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send();
        }
        else if(xhr.readyState == 1) {
            console.log('access denied');
        }
        else {
            console.log(`I don't know`);
        }
        
    }

    onSubmitForm() {
        this.onShowSlotForm();
        this.onSaveTodo();
    }

    onAddToList(id) {
        this.props.addToList(id);
        // this.props.fetchTodo();
    }


    /*componentDidMount() {
    //    this.onFetchTodosFromDatabase();
        this.props.fetchTodo();
    }*/

    // onFetchTodosFromDatabase() {
    //     let renderTodo = this.renderTodo;
    //     let request = new XMLHttpRequest();
    //     request.open('GET', '/todo', true);

    //     request.onload = function() {
    //         let data = JSON.parse(request.responseText);
    //         this.setState({
    //             todos: data
    //         })
    //     }.bind(this);
    //     request.send();
    // }

    // addToList(id) {
    //     let request = new XMLHttpRequest();
    //     let url = '/todo/addToList/' + id;
    //     request.open('PUT', url , true);
    //     // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     request.send();
    // }

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
                <SlotsForm submitForm={this.onSubmitForm.bind(this)} />
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
                    {this.props.todos.map((todo,i) => 
                        <Slot addToList={this.onAddToList.bind(this)} display={todo.display} title={todo.title} id={todo._id} key={i}/>   
                    )}
                 </ul>
            </div>
          </div>  
        );
        }
    }
}