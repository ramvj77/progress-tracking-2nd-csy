import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={seconds:0,
            isActive: false
        };
        this.interval=null;
    }
    componentDidMount(){
       setTimeout(
            ()=>{
                alert('advertisement')
            },5000
        );
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    handleStart=()=>{
        if(!this.state.isActive){
            this.interval=setInterval(()=>
            {
                this.setState((prevState)=>({seconds:prevState.seconds+1}));
            },1000);
        this.setState({isActive:true,});
        }
    };
    handleStop=()=>{
        clearInterval(this.interval);
        this.setState({isActive:false});
    };
    handleReset=()=>{
        clearInterval(this.interval);
        this.setState({
            seconds:0,
            isActive:false,
        });
    };
  render() {
    const {seconds,isActive}=this.state;
    return (
      <div>
      <h1>Timer:{seconds} seconds</h1>
      <button onclick={this.handleStart} disabled={isActive}>Start</button>
      <button onclick={this.handleStop} disabled={!isActive}>Stop</button>
      <button onclick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
