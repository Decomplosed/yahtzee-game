import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
  static defaultProps = {
    numWords: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const { locked } = this.props
    let classes = `Die fas fa-dice-${this.props.numWords[this.props.val - 1]}`
    return (
      <button
        className={classes}
        style={{ backgroundColor: locked ? 'grey' : 'black' }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    )
  }
}

export default Die
