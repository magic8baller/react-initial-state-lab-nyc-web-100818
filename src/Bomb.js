import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const threat =
      this.state.secondsLeft === 0
        ? 'Boom!'
        : `${this.state.secondsLeft} seconds left before I go boom!`

    return(<div>{threat}</div>
  }
}
