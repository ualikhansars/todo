import React from 'react';

export class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <div className="row menu-item">
                    <div className="col-md-12">
                        <p>Profile</p>
                    </div>
                </div>
                <div className="row menu-item" onClick={this.props.showSlots}>
                    <div className="col-md-12">
                        <p>Slots</p>
                    </div>
                </div>
                <div className="row menu-item" onClick={this.props.showSettings}>
                    <div className="col-md-12">
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        );
    }
}