// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="calculator-bg">
        <div className="info-container">
          <h1 className="title">Calculate the letters you enter</h1>
          <label htmlFor="input" className="description">
            Enter the phrase
          </label>
          <br />
          <input
            id="input"
            type="text"
            className="search-input"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <div>
            <p className="button">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
