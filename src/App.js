import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component
// Hook
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ],
  // this value won't change when the above value is changed below
  otherState: 'some other value'
});

// you can have as many useState calls as you want
const [otherState, setOtherState] = useState(otherState: 'some other value');

console.log(personsState, otherState);

const switchNameHandler = () => {
  // to test that it works on the console
  // console.log('Was clicked!');

  // DO NOT DO THIS: 
  // this.state.persons[0].name = 'Maximilian';

  // right way of doing it:
  setPersonsState({
    persons: [
      { name: 'Maximilian', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ],
  });
};

  // render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name}  age={personsState.persons[1].age}  >My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name}  age={personsState.persons[2].age} />
      </div>
    );
    // above code gets translated into below code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
};

export default app;