import React from 'react';
import {SlotsForm} from './SlotsForm';
import {Slot} from './Slot';
import {Todo} from './Todo';
export class Slots extends React.Component {
    constructor() {
            super();
            this.state = {
                showSlotForm: false,
                // todos: []
            }
    }

    onFetchUserFromDatabase() {
        return axios.get('/user')
        .then(res => {
        let data = res.data;
        this.setState({ todos: data });
        })
        .catch(function (error) {
            throw error;
        });
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
        let user = this.props.user;
        let todos = this.props.todos.map((todo, i) => {
            let property = {
                title: todo.title,
                category: todo.category,
                id: todo._id,
            }
            console.log('user', user);
            console.log('todo', todo.username);
            if(todo.username == user._id) {
                return (
                    <Slot addToList={this.props.addToList} key={i} property={property}/>
                );
            }
        });

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
                    {user.username}
                   {todos}
                 </ul>
            </div>
          </div>  
        );
        }
    }
}