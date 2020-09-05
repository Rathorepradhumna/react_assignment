import React from 'react' ; 

const AddPerson =(props) =>{
    return (
        <div>
            <h3>add new people</h3>
            <form>
  <div className="form-group">
    <label for="Name">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label for="Job">Job</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            
            </div>
    )
};

export default AddPerson;