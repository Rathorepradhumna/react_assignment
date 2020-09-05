import React, { Component } from 'react';
import Person from './Component/Person'
import './App.css';
import AddPerson from './Component/AddPerson';

class App extends Component {



  render() {

    return (
      <div className="App">

        <Person />
        <AddPerson/>
      </div>
    );
  }
}

export default App;
