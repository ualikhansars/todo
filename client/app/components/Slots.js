import React from 'react';

export class Slots extends React.Component {
    render() {
        return(
            <div className="row dynamic">
                <div className="col-md-12 dynamic-item">
                    <p>Database Design</p>
                </div>
                <div className="col-md-12 dynamic-item">
                    <p>Data Structure and Algorithms</p>
                </div>
            </div>
        );
    }
}