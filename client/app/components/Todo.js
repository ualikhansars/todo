import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>{this.props.title}</p>
        );
    }
}