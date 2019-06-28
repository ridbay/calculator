import React, {Component} from 'react';

class Screen extends Component {
  render(){
    return (
      <div className="screen">
          <p>{this.props.current}</p>
          <p>{this.props.result}</p>
        
      </div>
    );
  }
  
}

export default Screen;
