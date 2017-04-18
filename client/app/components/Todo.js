import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todo">{this.props.title}</div>
        );
    }
}