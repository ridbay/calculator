import React, {Component} from 'react';
import Screen from './Screen'
import Button from './Button'

class App extends Component {
  constructor(){
    super()
    this.state = {
      current: [],
      result: 0
    }
  }

  handleClick = (button) =>{
   const current = [...this.state.current]
   current.push(button)
   this.setState({current})
  }

  render(){
    const buttons = ['AC', '±', '%', '÷', '7', '8','9', 'x', '4', '5', '6','-','1','2','3','+', '0','.', '=']
    return (
      <div className="App">
        <h1>App Component</h1>
        <Screen current={this.state.current} result={this.state.result}/>
        {buttons.map((button, i) => <Button handleClick={this.handleClick} key={i} name={button}/>)}

      </div>
    );
  }
  
}

export default App;
