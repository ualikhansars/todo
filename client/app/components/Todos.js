import React from 'react';
import {Todo} from './Todo';

export class Todos extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: []
    //     }
    // }

    componentDidMount() {
       this.props.fetchTodo();
    }

     ajax(method, url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                resolve(this.responseText);
            };
            xhr.onerror = reject;
            xhr.open(method, url);
            xhr.send();
            });
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Component will update', nextProps, nextState);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Should component update', nextProps, nextState);
    //     return true;
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log('Component will receive props', nextProps);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Component Did Update', prevProps, prevState);
    // }

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

    render() {
        const todos = this.props.todos.map((todo, i) => {
            let property = {
                title: todo.title,
                duration: todo.duration,
                startTimeHours: todo.startTimeHours,
                startTimeMinutes: todo.startTimeMinutes,
                finishTimeHours: todo.finishTimeHours,
                finishTimeMinutes: todo.finishTimeMinutes,
                id: todo._id,
            }
            if(todo.display) {
                return (
                    <Todo removeFromList={this.props.removeFromList} key={i} property={property}/>
                );
            }
        });
        return(
          <div className="container todos">
            <div className="row">
                <div className="col-md-4 md-offset-4">
                    <h2>Todos</h2>
                </div>
            </div>

            <div className="row">
                <ul>
                   {todos}
                </ul>
            </div>
          </div>    
        );
    }

}