import React from 'react' ; 

const PersonElement =(props) =>{
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
        </tr>
    )
};

export default PersonElement;