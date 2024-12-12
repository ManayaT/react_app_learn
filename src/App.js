import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Rect from './Rect';
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const clickFunk = () => {
    setCount(count + 1);
  }
  const flagFunk = (e) => {
    setFlag(e.target.checked);
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4"></h1>
      <div className="container">
        <h4 className="my-3">Hooks Sample</h4>

        {flag ?
        <div className="alert alert-primary text-center">
          <p className='h5 mb-3'>count: {count} times!</p>
          <div><button className="btn btn-primary" onClick={clickFunk}>Click me!</button></div>
      </div>
      :
      <div className="card p-3 border-primary text-center">
        <p className='h5 mb-3 text-left text-primary'>count: {count} times!</p>
        <div><button className="btn btn-primary" onClick={clickFunk}>Click me!</button></div>
      </div>
        }
        <div className="form-group h6 text-center pt-3">
          <input type="checkbox" className="form-check-input" id="check1" onChange={flagFunk}/>
          <label className="form-check-label" htmlFor="check1">Change form style</label>
        </div>
      </div>
    </div>
  );
}

export default App;
