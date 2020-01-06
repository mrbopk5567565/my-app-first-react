import React, { Component } from 'react';
import TextInput from '../../../components/Forms/TextInput';
import './GenerateForm.scss'

class GenerateForm extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0,
    }
  }

  onChange = e => {
    console.log(e.target.name, ': ', e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onGenerate = () => {
    this.props.generateTiles(this.state);
  }

  setAllToDefault = () => {
    this.props.generateTiles({ row: 0, column: 0})
    setTimeout(() => this.props.generateTiles(this.state))
  }

  render() {
    const { row, column } = this.state;
    return (
      <div className="generate-form">
        <TextInput name="row" label="Row" value={row} onChange={this.onChange} />
        <TextInput name="column" label="Column" value={column} onChange={this.onChange} />
        <div className="generate-form__buttons">
          <button className="button" onClick={this.onGenerate}>Generate</button>
          <button className="button button--grey" onClick={ this.setAllToDefault}>Set all to default</button>
        </div>
      </div>
    )
  }
}

export default GenerateForm;