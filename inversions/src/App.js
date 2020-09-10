import React from 'react';
import './App.css';
import PersonCard from './components/personcard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Andrew" lastName = "Clark" age = {20} hairColor= "Brown" />
      <PersonCard firstName = "Ryan" lastName = "Clark" age = {25} hairColor= "Brown" />
      <PersonCard firstName = "John" lastName = "Clark" age = {29} hairColor= "Brown" />
      <PersonCard firstName = "John" lastName = "Clark" age = {55} hairColor= "Black" />
    </div>
  );
}

export default App;
