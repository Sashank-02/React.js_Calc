import React, { Component } from 'react';
import './Clear.css';


class Clear extends Component { 

 
  render () {
    return(
        <div className="clear-button"
        onClick={()=>this.props.handleClear()}
        >

          {this.props.children}  

        </div>
  
  );
 }
}

export default Clear;

 

 
