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
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            showSlots: nextProps,
            showSettings: nextProps
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    render() {
         let isShowSlots = this.state.showSlots;
         let isShowSettings = this.state.showSettings;
         console.log(isShowSettings);
         if(isShowSlots.showSlots) {
            return (
                <Slots/>
            );
         } 
         if(isShowSettings) {
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