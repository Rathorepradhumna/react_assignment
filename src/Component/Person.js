import React, {Component} from 'react';
import PersonElement from './PersonElement';
import '../App.css';

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
          <table>
              <tr>
                  <th>Name</th>
                  <th>job</th>
              </tr>
              {persondata}
          </table>
          
        </div>
    )
}
};

export default Person;