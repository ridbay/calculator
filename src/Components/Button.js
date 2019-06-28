import React, {Component} from 'react';

class Button extends Component {
  sendToParent = () => {
    this.props.handleClick(this.props.name)
  }
  render(){
    return (
      <div>
        <button onClick={this.sendToParent} className="btn">{this.props.name}</button>
      </div>
    );
  }
  
}

export default Button;
