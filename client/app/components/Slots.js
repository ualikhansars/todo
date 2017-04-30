import React from 'react';
import {SlotsForm} from './SlotsForm';

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

    // to bind form to the DOM
    onAddFormToDOM() {
        document.addEventListener("DOMContentLoaded", function(event) { 
        this.onShowSlotForm();
        });
    }

    fetchTodosFromDatabase() {
        let request = new XMLHttpRequest();
        req.open('GET', '/todo', true);
        req.onload = function() {
            let todos = JSON.parse(request.responseText);
            console.log(todos);
        }
        request.send();
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
                <SlotsForm showSlotsForm={this.onAddFormToDOM.bind(this)}/>
                <div className="row">
                    <p>Item 1</p>
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
                    <span>Item 1</span>
                </div>
            </div>
          </div>  
        );
        }
    }
}