import React,{Fragment} from 'react';

const buttons =(props) =>{
    return(
        <Fragment>
        <div className="row">
        <button type="button" className="btn btn-primary" onClick={props.addition}>+</button>
        <button type="button" className="btn btn-primary" onClick={props.substraction}>-</button>
        <button type="button" className="btn btn-primary" onClick={props.division}>/</button>
        <button type="button" className="btn btn-primary" onClick={props.multiplication}>*</button>
        </div>
        <div className="row">
        <button type="button" className="btn btn-primary" onClick={props.result}>=</button>
        <button type="button" className="btn btn-primary" onClick={props.clearAll}>c</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(0)}}>0</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(9)}}>9</button>
        </div>
        
        <div className="row">
        <button type="button" className="btn btn-primary" onClick={()=>{props.click(8)}}>8</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(7)}}>7</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(6)}}>6</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(5)}}>5</button>
        </div>
        
        <div className="row">
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(1)}}>1</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(2)}}>2</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(3)}}>3</button>
        <button type="button" className="btn btn-primary"  onClick={()=>{props.click(4)}}>4</button>
        </div>
        </Fragment>
   )
}

export default buttons;