import React from "react";

class Input extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const {name, handleChange, type, value, ...properties} = this.props
    return <input type={type} 
    name={name}
    onChange ={handleChange}
    value={value}
    {...properties}
    />;
  }
}

export default Input;
