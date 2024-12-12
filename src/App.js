import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

let data = {title: 'Title', message: 'this is sample message.'};

const SampleContext = React.createContext(data);

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <Message />
          <Title />
        </div>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div className='card p-2 my-3'>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div className='alert alert-primary'>
        <p className='h5'>{this.context.message}</p>
      </div>
    );
  }
}
    
export default App;
