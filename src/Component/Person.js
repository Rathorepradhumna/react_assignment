import React, { Component } from 'react';
import PersonElement from './PersonElement';
import '../App.css';
import AddPerson from './AddPerson';


class Person extends Component {

    state = {
        persons: [
            { name: "pradhumna", job: "developer", key: "a1" },
            { name: "namrata", job: "hr", key: "a2" },
            { name: "poorva", job: "testing", Key: "a3" }
        ]
    }

    deleltePerson = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }


    addPerson = (newName, newJob) => {
        console.log(newName, newJob);
        const new_persons = [...this.state.persons];
        new_persons.push({name: newName , job : newJob});
        this.setState({

            persons: new_persons
        })
    }


    render() {

        let persondata = (
            this.state.persons.map((person, index) => {
                return <PersonElement name={person.name} job={person.job} clicked={() => { this.deleltePerson(index) }} />
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
                        {persondata}
                    </tbody>


                </table>
                <AddPerson add={this.addPerson} />


            </div>
        )
    }
};

export default Person;