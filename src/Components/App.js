import React, {Component} from 'react';
import Screen from './Screen'
import Button from './Button'
import '../Styles/App.css'
import '../Styles/Calculator.css'
import '../Styles/Button.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      current: [],
      result: 0,
      operator: '+'
    }
  }

  switchOperators = (operator) => {
      switch(operator){
        case '÷':
          return '/'
        case 'x':
          return '*'
      }
  }
doMath = (num1, operator, num2) => {
  let result;
  operator = operator.replace(/[x÷]/, this.switchOperators);
  if(!isNaN(num2)){
    result = eval(num1 + operator + num2);
    this.setState({result})
  }

}
  handleClick = (button) =>{
   let current = [...this.state.current]
   const result = this.state.result;
   let operator = this.state.operator
   const num = parseFloat(current.join(''))

   switch(true){
     case /[+x\-÷]/.test(button):
       this.doMath(result, operator, num);
       operator = button;
       current = operator
       break
      case /\d/.test(button):
        if(/[+x\-÷]/.test(current)){
          current = []
        }
          current.push(button)
      break
   }

   this.setState({current, operator})
  }

  render(){
    const buttons = ['AC', '±', '%', '÷', '7', '8','9', 'x', '4', '5', '6','-','1','2','3','+', '0','.', '=']
    return (
      <div>
        <h1>Calculator</h1>
      
      <div className="calculator">
        
        <Screen current={this.state.current} result={this.state.result}/>
        <div className="btn-container">
          {buttons.map((button, i) => <Button handleClick={this.handleClick} key={i} name={button}/>)}
        </div>
        

      </div>
      </div>
    );
  }
  
}

export default App;
