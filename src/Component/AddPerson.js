import React from 'react' ; 

const AddPerson =(props) =>{
  let name,job;
  const changeNameHandler = (event) =>{
    name = event.target.value;
    console.log(name);
  }

  const changeJobHandler = (event) =>{
    job = event.target.value;
    console.log(job);
  }

 const AddPersonHandler = () =>{
   console.log(name,job);
    props.add(name,job);
  }
  return (
        <div>
            <h3>add new people</h3>
            <form>
  <div className="form-group">
    <label for="Name">Name</label>
    <input type="text" class="form-control" id="nameField" onChange={changeNameHandler}/>
    
  </div>
  <div className="form-group"> 
    <label for="Job">Job</label>
    <input type="text" class="form-control" id="nameFeild" onChange={changeJobHandler}/>
  </div>
  
  <h6 onClick = {AddPersonHandler}>Submit</h6>
</form>
             
            </div>
    )
};

export default AddPerson;