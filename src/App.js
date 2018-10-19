import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycard from './Card/Mycard';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        "showtext":""
    }
}
onChange(e){
    this.setState({"showtext":e.target.value})
    console.log(e.target.value)
}
render() {
    
    let test = "Hello first"
    return (<div>
        <input onChange={(e)=>this.onChange(e)}
        type="password"
        value={this.state.showtext}/>

        <Mycard name={this.state.showtext}/>
        </div>
      
    );
  }
}

export default App;
