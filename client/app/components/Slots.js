import React from 'react';
import {SlotsForm} from './SlotsForm'
export class Slots extends React.Component {
    constructor() {
            super();
            this.state = {
                showSlotForm: false,
            }
    }

    onShowSlotForm() {
        this.setState({
            showSlotForm: !this.state.showSlotForm,
        });
    }
    render() {
        let isShowSlotForm = this.state.showSlotForm;
        if(isShowSlotForm) {
            return (
                <div className="row dynamic">
               <div className="row">
                <div className="createNew col-md-12">
                    <button onClick={this.onShowSlotForm.bind(this)} className="btn btn-success">Create new</button>
                </div>
                </div>
                <SlotsForm/>
                <div className="row">
                    <div className="col-md-12 dynamic-item">
                        <p>Database Design</p>
                    </div>
                    <div className="col-md-12 dynamic-item">
                        <p>Data Structure and Algorithms</p>
                    </div>
                </div>
            </div>  
            );
        } else {
            return(
            <div className="row dynamic">
               <div className="row">
                <div className="createNew col-md-12">
                    <button onClick={this.onShowSlotForm.bind(this)} className="btn btn-success">Create new</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 dynamic-item">
                    <p>Database Design</p>
                </div>
                <div className="col-md-12 dynamic-item">
                    <p>Data Structure and Algorithms</p>
                </div>
            </div>
          </div>  
        );
        }
    }
}