import {Component} from 'react'
import './index.css'

class CharactersCounter extends Component {
  state = {
    textInput: '',
  }

  onChangeTextInput = event => {
    const {value} = event.target
    this.setState({textInput: value})
  }

  render() {
    const {textInput} = this.state
    const charactersCount = textInput.length
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Count the Characters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="input-element"
                id="phraseText"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onChangeTextInput}
                value={textInput}
              />
            </div>
            <p className="letters-count">No of Characters: {charactersCount}</p>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CharactersCounter
