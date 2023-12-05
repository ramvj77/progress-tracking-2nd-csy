import React, { Component } from 'react'

export default class ClassDemo extends Component {
    constructor(props){
        super(props);
        this.state={count1:0};
    }
    handleIncrement=()=>{
        return(
          this.setState(prevState=>({count1:prevState.count1+1}))
        )
    }
    handleDecrement=()=>{  
        if (this.state.count1>0){
            return(this.setState(prevState=>({count1:prevState.count1-1})))
        }
        else{
            return(this.setState(prevState=>({count1:prevState.count1=0})))
        }
    }
    handleAlert =()=>{
        alert(this.state.count1+" "+this.props.item+" added")
    }
  render() {
    return (
    <table>
      <tr>
      <td >
      <img src={this.props.imgUrl} width="100px" height="100px"/>
      </td>
      <td width={"200px"}>{this.props.item}</td>
      <td width={"200px"}><button onClick={this.handleIncrement}> + </button>
      {this.state.count1}
      <button onClick={this.handleDecrement}> - </button></td>
      <td width={"200px"}><button onClick={this.handleAlert}>ADD</button></td>
      </tr>
      </table>
    )
  }
}