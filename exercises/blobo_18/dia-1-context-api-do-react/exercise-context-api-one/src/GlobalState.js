import React, { Component } from 'react'
import GlobalContext from './GlobalContext'

export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    this.state = {
        red: false,
        blue: false,
        yellow: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(car, side) {
    this.setState({
      [car]: side,
    })
   }

  render() {
    const cars = this.state;
    const obj = {
      cars,
      handleClick: this.handleClick,
    }
    return (
      <GlobalContext.Provider value={obj}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
