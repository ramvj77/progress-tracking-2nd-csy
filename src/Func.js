function Func(){
    return <Greetings name="Priya"/>
}
  function Greetings(props){
    return(
        <h1>
        Hello,{props.name}!WELCOME!!
        </h1>
    );
  }
  export default Func;