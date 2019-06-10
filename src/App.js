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
      ||this.state.currentInput == "/" )
        {this.setState({currentInput:""});}
      else
      { let curInpt = this.state["currentInput"];
        var result = eval(curInpt);
        if(result % 1 !== 0){result = result.toFixed(4);}
        else{result = result.toString(10);}
        this.setState({currentInput:result})
      }
    }
   
  }

  render (){
  return (
    <div className="App">
      
      <div id= "display2">{this.state.currentInput}</div>
      <div>
      <button onClick = {this.handleEqual} id ="equals">=</button>
      <button onClick = {this.handleInput} value ="0" id ="zero">0</button>
      <button onClick = {this.handleInput} value = "1" id ="one">1</button>
      <button onClick = {this.handleInput} value = "2" id ="two">2</button>
      <button onClick = {this.handleInput} value = "3" id ="three">3</button>
      <button onClick = {this.handleInput} value = "4" id ="four">4</button>
      <button onClick = {this.handleInput} value = "5" id ="five">5</button>
      <button onClick = {this.handleInput} value ="6" id ="six">6</button>
      <button onClick = {this.handleInput} value = "7"id ="seven">7</button>
      <button onClick = {this.handleInput} value ="8" id ="eight">8</button>
      <button onClick = {this.handleInput} value = "9" id ="nine">9</button>
      </div>
      <div> 
      <button onClick = {this.handleInput} value = "+" id ="add">+</button>
      <button onClick = {this.handleInput} value = "-" id ="subtract">-</button>
      <button onClick = {this.handleInput} value = "*" id ="multiply">X</button>
      <button onClick = {this.handleInput} value = "/" id ="divide">/</button>
      </div>

      <button onClick = {this.handleInput} id ="decimal">.</button>
      <button onClick = {this.handleInput} id ="clear">clear</button>
    </div>
  );
  }
}

export default App;
