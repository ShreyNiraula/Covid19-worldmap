import React, { Component } from 'react'

// class DashBoard extends Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 {props.country}
//             </div>
//         )
//     }
// }

function DashBoard(props) {
    return(
        <div className="container">
                    {props.country}
        </div>
    );
}

export default DashBoard
