import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component {
  // data = []

  // area = {
  //   width: "500px",
  //   height: "500px",
  //   border: "1px solid blue"
  // }

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello Component!',
      counter: 0,
      fig: true,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(event){
    this.setState({
      counter: this.state.counter + 1,
      msg: '*** count: ' + this.state.counter + ' ***',
      fig: !this.state.fig
    })
  }

  render() {
    return (
      <div>
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>count number</p>
          {
            this.state.fig ?
              <div className='alert alert-primary text-right'>
                <p className='h5'>count: {this.state.msg}</p>
                </div>
              :
                <div className='alert alert-primary text-left'>
                  <p className='h5'>{this.state.msg}です．</p>
                </div>
          }
          <div className='text-center'>
            <button className='btn btn-primary' onClick={this.doAction}>Click</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
