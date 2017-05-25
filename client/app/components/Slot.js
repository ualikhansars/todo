import React from 'react';

export class Slot extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-4">
                    <button onClick={() => {this.props.addToList(this.props.property.id)}} className="btn btn-success">Add to List</button>    
                </div>
                <div className="todo_desc col-md-8">
                        <p>{this.props.property.title}</p>
                        <p>Category: {this.props.property.category}</p>
                        <p className="todo_id">{this.props.id}</p>
                </div>
            </div>   
        );
    }
}