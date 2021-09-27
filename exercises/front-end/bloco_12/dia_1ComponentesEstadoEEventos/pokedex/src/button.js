import React from 'react';

class Button extends React.Component {
  render(){
    const {click, pokType} = this.props;
    return <button className='btn' onClick={click}>{pokType}</button>
  }
}

export default Button;