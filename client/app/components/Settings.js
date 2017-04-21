import React from 'react';

export class Settings extends React.Component {
    render() {
        return(
           <div className="row dynamic">
               <div className="col-md-12 dynamic-item">
                    <p>Colors</p>
               </div>
                <div className="col-md-12 dynamic-item">
                   <p>Change Profile Picture</p>
               </div>
           </div>
        )
    }
}