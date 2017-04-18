import React from 'react';

import {Slots} from './Slots';
/* Dynamic should display all data from all components in it */

export class Dynamic extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return(
            <Slots/>
        );
    }
}