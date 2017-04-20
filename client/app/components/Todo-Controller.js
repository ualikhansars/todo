import React from 'react';

export class TodoController extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-danger">
                        Remove
                    </button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-info">
                        Edit
                    </button>
                </div>
            </div>
        );
    }
}