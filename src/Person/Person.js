import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';

// ES6 code
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

// class Person extends Component {
//     state = {
//         name: '' ,
//         age: undefined
//     }
//     render() {
//         return (
//             <div className="Person">
//                 <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
//                 <p>{this.props.children}</p>
//                 <input type="text" onChange={this.props.changed} value={this.props.name} />
//             </div>
//         ) 
//     }
// }

export default Radium(person);
