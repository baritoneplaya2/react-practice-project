import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const [name, setName] = React.useState('Maria');
  console.log(name);
  // componentDidMount (ish)
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // Http request...
      setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);
    //[] will only pop up at the beginning
    //[props.persons] will pop up at the beginning and when a persons input is changed

    // componentDidUpdate (ish)
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;