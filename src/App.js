import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentInput:""}
    this.handleInput = this.handleInput.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.numArr  = ["0","1","2","3","4","5","6","7","8","9"]
    this.opsArr =["+","-","/","*"]
  }
  
  handleInput(event){

    
    if(!this.state.currentInput==""){
    var lastChar = this.state["currentInput"].charAt(this.state["currentInput"].length -1);
    }else{var lastChar = null;}
    console.log(lastChar);

     if( (event.target.id =="multiply" || event.target.id == "divide") && (this.state["currentInput"].length <=1) && (lastChar ==null || lastChar =="+" || lastChar =="-")){
        console.log("BAD");
        this.setState({currentState:""})
    }
    else
      { // number -> operator input not detected proceed as normal 
        
        if(this.numArr.includes(event.target.value))
          {     
              this.setState({currentInput:(this.state.currentInput+event.target.value)})
          }
       else if(this.opsArr.includes(event.target.value))      // id matches operator 
          {  
          if(this.opsArr.includes(lastChar)) //lastCharacter is already operator 
            {
              var minusLastChar = this.state["currentInput"].slice(0,this.state["currentInput"].length -1);
              this.setState({currentInput:(minusLastChar+event.target.value)})
            }     
          else
            { //last character not operator 
              this.setState({currentInput:(this.state.currentInput+event.target.value)})
            }
          }
       else if(event.target.id == "clear" )
          {
          this.setState({currentInput:"",currentResult:"0",function:""})
          }
        else if (event.target.id = "decimal")
        {  
          if(!this.state.currentInput.includes(".")){
         
          this.setState({currentInput:(this.state.currentInput+".")})
          }
           
        }
      }
  }

  handleEqual(){
  console.log(this.state.currentInput);
 
  if(this.state.currentInput != "" )
  {   if(this.state.currentInput == "+"
      ||this.state.currentInput == "-"
      ||this.state.currentInput == "*" 
      ||this.state.currentInput == "/"
      ||this.state.currentInput == "." )
        {this.setState({currentInput:""});}
      else
      { let curInpt = this.state["currentInput"];
        if(this.opsArr.includes(curInpt.charAt(curInpt.length-1))){
          curInpt =  curInpt.slice(0,curInpt.length -1);
        }
        var result = eval(curInpt);
        if(result % 1 !== 0){result = result.toFixed(4);}
        else{result = result.toString(10);}
        this.setState({currentInput:result})
      }
    }
   
  }

  render (){
  return (
    <header className="App-header">
    <div id="wrapper">
    <Calculator 
    handleEqual ={this.handleEqual} 
    handleInput={this.handleInput}
    currentInput ={this.state.currentInput}
    />
    </div>
    </header>
  );
  }
}
const Button =  (props) => {
  return(
  <button onClick = {props.relevantFunction} value = {props.value} id ={props.id}>{props.text}</button>
  );
}

const Calculator = (props) => {
  return (
  <div className="App">
      
   <div id= "display">{props.currentInput}</div>
    <div id = "buttonsWrapper">
   <div className= "row">
   <Button relevantFunction = {props.handleInput} value ={null} id ={"clear"} text= {"clear"} />
   <Button relevantFunction = {props.handleInput} value ={null} id ={""} text= {""} />
   <Button relevantFunction = {props.handleInput} value ={null} id ={""} text= {""} />
   <Button relevantFunction = {props.handleInput} value ="+" id ={"add"} text= {"+"} />
  </div>
   </div>
   <div className = "row">
          <Button relevantFunction = {props.handleInput} value ="1" id ={"one"} text= {"1"} />   
          <Button relevantFunction = {props.handleInput} value ="2" id ={"two"} text= {"2"} />
          <Button relevantFunction = {props.handleInput} value ="3" id ={"three"} text= {"3"} />
          <Button relevantFunction = {props.handleInput} value ="-" id ={"subtract"} text= {"-"} />
  </div>
   <div className = "row">
          <Button relevantFunction = {props.handleInput} value ="4" id ={"four"} text= {"4"} />
          <Button relevantFunction = {props.handleInput} value ="5" id ={"five"} text= {"5"} />
          <Button relevantFunction = {props.handleInput} value ="6" id ={"six"} text= {"6"} />
          <Button relevantFunction = {props.handleInput} value ="*" id ={"multiply"} text= {"*"} />
   </div>
   <div className = "row">
          <Button relevantFunction = {props.handleInput} value ="7" id ={"seven"} text= {"7"} />
          <Button relevantFunction = {props.handleInput} value ="8" id ={"eight"} text= {"8"} />
          <Button relevantFunction = {props.handleInput} value ="9" id ={"nine"} text= {"9"} />
          <Button relevantFunction = {props.handleInput} value ="/" id ={"divide"} text= {"/"} />
   </div>
   <div className = "row">
   <Button relevantFunction = {props.handleInput} value ="0" id ={"zero"} text= {"0"} />
   <Button relevantFunction = {props.handleInput} value ={"."} id ={"decimal"} text= {"."} />
   <Button relevantFunction = {props.handleEqual} value ={"="} id ={"equals"} text= {"="} />
   
   </div>
  
   </div>
 
    
   
  
  );
}
export default App;
