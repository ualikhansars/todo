import React from 'react';
import {render} from "react-dom";
class App extends React.Component {
    render() {
        return (
           <div className="page-wrapper"> 
                <h1>Hello React</h1>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));