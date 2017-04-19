import React from 'react';

import {Slots} from './Slots';
import {Settings} from './Settings';
/* Dynamic should display all data from all components in it */

export class Dynamic extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showSlots: props.showSlots
        };
    }
    render() {
         const isShow = this.state.showSlots;
         console.log(isShow);
         if(isShow) {
            return (
                <Slots/>
            );
         } else {
             return (
                 <Settings/>
             );
         }    
         
    }
}