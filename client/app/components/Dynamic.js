import React from 'react';

import {Slots} from './Slots';
import {Settings} from './Settings';
/* Dynamic should display all data from all components in it */

export class Dynamic extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showSlots: props.showSlots,
            showSettings: props.showSettings,
        };
    }
    
     componentDidMount() {
        this.props.fetchUser();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showSlots: nextProps,
            showSettings: nextProps,
            showSlotsAndControllers: nextProps,
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    render() {
         let isShowSlots = this.state.showSlots;
         let isShowSettings = this.state.showSettings;
         let isShowSlotsAndControllers = this.state.showSlotsAndControllers;
         if(isShowSlots.showSlots) {
            return (
                <Slots user={this.props.user} todos={this.props.todos} addToList={this.props.addToList} fetchTodo={this.props.fetchTodo}/>
            );
         } 
         if(isShowSettings.showSettings) {
             return(
                 <Settings/>
             );
         }
         else {
             return (
                 <p>Nothing to show</p>
             );
         }          
    }
}