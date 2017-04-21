import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [1,2,3,4,5,6,7,8,9]
        }
    }

    render() {
        return(
          <div className="container todos">
            <div className="row">
                <div className="col-md-4 md-offset-4">
                    <h2>Todos</h2>
                </div>
            </div>
            <div className="row">
                <ul>
                    {this.state.todos.map((todo,i) => 
                        <li className="todo" key={i} className="todo" onMouseMove={this.props.showControllers}>{todo}</li>
                    )}
                </ul>
            </div>
          </div>    
        );
    }
}