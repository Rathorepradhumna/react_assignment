import React, { Component } from 'react';
import Button from './buttons/Buttons'
import Input from './input/Input';
import logger from './logger' ;
const { Logform } = require('winston');
const { resolve } = require('path');
class Calculator extends Component {

    state = {
        input: 0,
        previousNumber: '',
        operator: '', 
        currentNumber: 0,

    }

    addValToInput = val => {
        this.setState({ input: this.state.input + val });
    };
    add = () => {
        this.setState({previousNumber:this.state.input});
        this.setState({ input: "" });
        this.setState({operator:'add'});
    };

    subtract = () => {
        this.setState({previousNumber:this.state.input});
        this.setState({ input: "" });
        this.setState({operator:'subtract'});
    };

    multiply = () => {
        this.setState({previousNumber:this.state.input});
        this.setState({ input: "" });
        this.setState({operator:'multiply'});
    };

    divide = () => {
      this.setState({previousNumber:this.state.input});
        this.setState({ input: "" });
        this.setState({operator:'divide'});
    };
    evaluate = () => {
        
        this.setState({currentNumber:this.state.input} ,(answer)=>{
            switch(this.state.operator){
                case('add') :
                        logger.info('inside add');
                        answer = parseInt(this.state.previousNumber) +
                        parseInt(this.state.currentNumber)
                    ;
                    break;
                case('subtract') :
                      logger.info('inside subtract');
                      answer =  parseInt(this.state.previousNumber) -
                        parseInt(this.state.currentNumber)
                    ;
                    break;   
                case('multiply') :
                logger.info('inside multilpy');
                     answer =  parseInt(this.state.previousNumber) *
                     parseInt(this.state.currentNumber)
                    ;
                    break;  
                 case('divide') :
                        logger.info('inside divide');
                        try{
                            if( parseInt(this.state.currentNumber)!==0)
                        {
                            answer =  parseInt(this.state.previousNumber) /
                            parseInt(this.state.currentNumber)
                        }
                        else{
                            logger.error('divide bt zero error reporte');
                            throw "zero should not be in demoninator";
                        }
                        }
                        catch(err){
                            answer = err;
                        }
                    ;
                    break;     
                 default : answer = "no opeator selected";          
                     
            }
            console.log(answer);
            this.setState({input:answer});
        });
        //console.log(this.state.previousNumber , this.state.operator, this.state.currentNumber)
      //  this.setState({input:''});
        
        
       
      }
      clear = () =>{
          this.setState({input: 0,
          previousNumber: '',
          currentNumber: '',
          operator: ''
  })
      }
render(){
    return (
        <div>
            <Input val={this.state.input}/>
            <Button click={this.addValToInput} 
            addition={this.add} 
            substraction = {this.subtract}
            multiplication ={this.multiply}
            division={this.divide}
            clearAll = {this.clear}
            result={this.evaluate}/>
        </div>
    )
}
}

export default Calculator;