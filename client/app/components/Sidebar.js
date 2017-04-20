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
                <div className="row menu-item">
                    <div className="col-md-12">
                        <p onClick={this.props.showSlots}>Slots</p>
                    </div>
                </div>
                <div className="row menu-item">
                    <div className="col-md-12">
                        <p onClick={this.props.showSettings}>Settings</p>
                    </div>
                </div>
            </div>
        );
    }
}