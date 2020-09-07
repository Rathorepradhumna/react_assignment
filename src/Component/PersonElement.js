import React from 'react' ; 

const PersonElement =(props) =>{

    
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
           <td onClick={props.clicked}> <button type="buton" >Remove</button></td>
        </tr>
    )
};

export default PersonElement;