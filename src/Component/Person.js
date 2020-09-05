import React, {Component} from 'react';
import PersonElement from './PersonElement';
import '../App.css';
import AddPerson from './AddPerson';


class Person extends Component{

    state = {
        persons : [
          {name : "pradhumna" , job : "developer"},
          {name : "namrata" , job : "hr"},
          {name : "poorva" , job : "testing"}
        ]
      }

render(){

    let persondata = (
        this.state.persons.map(person=>{
            return  <PersonElement name= {person.name} job ={person.job}/> 
        })
       
    )

    return (
        <div>
            
          <table className="table">
              <thead>
              <tr>
                  <th>Name</th>
                  <th>job</th>
                  <th>Remove</th>
              </tr>
              </thead>
              <tbody>
                  
              </tbody>
              
              
          </table>
            

        </div>
    )
}
};

export default Person;