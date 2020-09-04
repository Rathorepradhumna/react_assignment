import React , {Component} from 'react';
import Person from './Component/Person'
import './App.css';

class App extends Component {

state = {
  persons : [
    {name : "pradhumna" , job : "developer"},
    {name : "namrata" , job : "hr"},
    {name : "poorva" , job : "testing"}
  ]
}
  
 render() {

  let persons = (
    <div>
      {this.state.persons.map((person) =>{
        return <Person 
        name = {person.name}
        job = {person.job}/>
      })}
    </div>
  )

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p><span>Name </span><span>  Job</span></p>
      {persons}
    </div>
  );
 }
}

export default App;
