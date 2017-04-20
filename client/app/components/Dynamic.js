import React from 'react';

import {Slots} from './Slots';
import {Settings} from './Settings';
import {TodoController} from './Todo-Controller';
/* Dynamic should display all data from all components in it */

export class Dynamic extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showSlots: props.showSlots,
            showSettings: props.showSettings,
            showSlotsAndControllers: props.showControllers,
        };
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
         console.log(isShowSettings);
         if(isShowSlots.showSlots) {
            return (
                <Slots/>
            );
         } 
         if(isShowSettings.showSettings) {
             return(
                 <Settings/>
             );
         }
         if(isShowSlotsAndControllers.showControllers) {
             return(
                 <div>
                    <TodoController/>
                     <Slots/>
                 </div>
             );
         }
         else {
             return (
                 <p>Nothing to show</p>
             );
         }          
    }
}