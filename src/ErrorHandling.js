import React, { Component } from 'react'

class ErrorHandling extends Component {
    constructor(props){
        super(props);
        this.state={hasError:false,error:null,errorInfo:null};
    }
    static getDerivedStateFromError(error){
        return{hasError: true};
    }   
    componentDidCatch(error,errorInfo){
        this.setState({error,errorInfo});
        console.error("Error caught by error boundry:",error,errorInfo);
    }
  render() {
    if(this.state.hasError){
    return (
      <div>
      <h1>Something went Wrong</h1>
      <p>{this.state.error && this.state.error.toString()}</p>
      <details style={{whiteSpace:'pre-wrap'}}>
      {this.state.errorInfo&&this.state.errorInfo.componenetStack}
      </details>
      </div>
    );
  }
return this.props.children;
  }
}
class MyComponent extends Component{
    render(){
        if(this.props.shouldError){
            throw new Error('Error in MyComponent');
        }
        return <div>Normal rendering</div>;
}
}
class App extends Component{
    render(){
        return(
            <ErrorHandling>
            <MyComponent shouldError={true}/>
            </ErrorHandling>
        )
    }
}
export default App;
