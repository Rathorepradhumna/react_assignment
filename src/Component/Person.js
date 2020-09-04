import React, {Component} from 'react';

const Person = (props) =>{

    return (
        <div>
            <p>{props.name} {props.job}</p>
        </div>
    )
};

export default Person;