import React , {Fragment} from 'react';
import './App.css';
import Calculator from './components/Calculator'

const app =(props) => {

  return (
    <div className="App">
      <Fragment>
        <Calculator>

        </Calculator>
      </Fragment>
    </div>
  );
 
}

export default app;
