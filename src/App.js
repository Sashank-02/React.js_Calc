import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from  './components/Input';
import Clear from './components/Clear';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:" ",
      previousNum:" ",
      currentNum:" ",
      operator:" "
    };
  }
  addToInput= val=>{
    this.setState({input:this.state.input+val});
  }
  addDecimal = val => {
   if(this.state.input.indexOf(".")===-1){
    this.setState({input: this.state.input +val}) 
   }
  
  };
  clearInput = ()=>{
    this.setState({input:" "});
  }

  addZeroToInput=val=>{
    // if this.state.input is not empty then add zero
    if(this.state.input !==" ") {
     this.setState({input: this.state.input+val});
    }
   };
   add = () => {
     this.state.previousNum=this.state.input;
     this.setState({input: " "});
     this.state.operator = "plus";
   };
     subt = () => {
     this.state.previousNum=this.state.input;
     this.setState({input: " "});
     this.state.operator = "subtract";
   };
   multiply = () => {
     this.state.previousNum=this.state.input;
     this.setState({input: " "});
     this.state.operator = "multiply";
   };
   divide = () => {
     this.state.previousNum=this.state.input;
     this.setState({input: " "});
     this.state.operator = "divide";
   };


   equal = () => {
   this.state.currentNum=this.state.input;
   if(this.state.operator=="plus"){
     this.setState({
       input: parseFloat(this.state.previousNum)+ parseFloat(this.state.currentNum)
      });
    }
    else if(this.state.operator=="subtract"){
     this.setState({
       input: parseFloat(this.state.previousNum)-parseFloat(this.state.currentNum)
      });
  }
   else if(this.state.operator=="multiply"){
     this.setState({
       input: parseFloat(this.state.previousNum)*parseFloat(this.state.currentNum)
      });
   }
    else if(this.state.operator=="divide"){
     this.setState({
       input: parseFloat(this.state.previousNum)/parseFloat(this.state.currentNum)
      });
      

   } }

 render() {
  return ( 
     <div className="App">
      <div className="calc_setup">
        <div className="row">
        <Input>{this.state.input}</Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row"> 
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
      </div>
      <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
    </div>
    <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.equal}>=</Button>
          <Button handleClick={this.subt}>-</Button>
       </div> 
       <div className="row">
        <Clear handleClear={this.clearInput}>Clear</Clear> 
       </div>
       </div>
       </div>
  );
  }
}

export default App;
