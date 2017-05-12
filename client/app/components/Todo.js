import React from 'react';

export class Todo extends React.Component {
    render() {
        return(
            <li className="todo" onMouseMove={this.props.showControllers}>
                <div>
                    <p>
                        <button className="btn btn-danger">Delete</button>
                        <button className="btn btn-warning">Edit</button>
                    </p>
                    <p>{this.props.property.title}</p>
                    <p>Duration: {this.props.property.duration}</p>
                    <span>Start Time: {this.props.property.startTimeHours}:{this.props.property.startTimeMinutes}</span>
                    <span>Finish Time: {this.props.property.finishTimeHours}:{this.props.property.finishTimeMinutes}</span>
                </div> 
            </li>
        );
    }
}


