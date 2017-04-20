import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="container">
            <div className="row">
                <div className="col-md-4 md-offset-4">
                    Todos
                </div>
            </div>
            <div className="row">
                <ul>
                    <li className="todo" onMouseMove={this.props.showControllers}>
                        Data Structure and Algorithms
                    </li>
                </ul>
            </div>
          </div>    
        );
    }
}