import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage';



function App() {

  const [numbersArray, setNumbersArray] = useState([1, 2, 3]);
  const [number, setNumber] = useState(0);

  //initial useEffect that runs on first render, checks to see if localData contains the key,
  //if it exists it sets the state with the parsed data from local storage
  React.useEffect(() => {
    const localData = localStorage.getItem('numbersArray');
    if (localData) {
      setNumbersArray(JSON.parse(localData));
    }
  }, []);

  //if we want to add elements to local storage, this is where it happens.
  //this runs whenever the numbersArray changes, ie whenever a new value needs to be added to local-storage
  React.useEffect(() => {
    console.log('updating storage')
    localStorage.setItem('numbersArray', JSON.stringify(numbersArray));
  }, [numbersArray]);

  //this pushes new values to loalStorage
  const pushToArray = (number) => {
    console.log('hello')
    setNumbersArray([...numbersArray, Number(number)])
  };

  return (
    <div>
      <input value={number} onChange={((e) => setNumber(e.target.value))}></input>
      <button onClick={() => pushToArray(number)}>push</button>
    </div>
  );

};

export default App;
