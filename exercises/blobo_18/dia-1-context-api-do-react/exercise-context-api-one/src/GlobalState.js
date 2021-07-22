import React, { Component } from 'react'
import GlobalContext from './GlobalContext'

export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    this.state = {
        red: false,
        blue: false,
        yellow: false,
        signalColor: 'red',
    };
    this.handleClickCars = this.handleClickCars.bind(this);
    this.handleClickSignal = this.handleClickSignal.bind(this);
  }

  handleClickCars(car, side) {
    this.setState({
      [car]: side,
    })
  }

  handleClickSignal(signal) {
    this.setState({
      signalColor: signal,
    })
  }

  render() {
    const state = this.state;
    const obj = {
      state,
      handleClick: this.handleClickCars,
      handleClickSignal: this.handleClickSignal,
    }
    return (
      <GlobalContext.Provider value={obj}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
