import React, { Component } from 'react';
import TextInput from '../../../components/Forms/TextInput';
import './GenerateForm.scss'

import { connect } from 'react-redux';
import { generateTiles } from '../../../redux/actions/tileActions';

import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../../utils/common';

class GenerateForm extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0,
      data: getDataFromLocalStorage('Colorful__Tile') || ''
    }
  }

  onChange = e => {
    console.log(e.target.name, ': ', e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onGenerate = () => {
    const { row, column } = this.state;
    this.props.generateTiles(row,column)
  }

  setAllToDefault = () => {
    this.props.generateTiles({ row: 0, column: 0 })
    setTimeout(() => this.props.generateTiles(this.state))
  }

  saveTile = () => {
    
  }

  openHistory = (item) => {
    console.log('asd', item)
    const a = {
      row: item[0].row,
      column: item[0].column,
    }
    const b = item[1]
    console.log('acasc', b)
    this.props.generateTiles( a )
  }

  render() {
    const { row, column, data } = this.state;
    return (
      <div className="generate-form">
        <TextInput name="row" label="Row" value={row} onChange={this.onChange} />
        <TextInput name="column" label="Column" value={column} onChange={this.onChange} />
        <div className="generate-form__buttons">
          <button className="button" onClick={this.onGenerate}>Generate</button>
          <button className="button button--grey" onClick={ this.setAllToDefault }>Set all to default</button>
          <button className="button" onClick={this.saveTile}>Save</button>
        </div>
        <div className="generate-form__history">
          {!!data && data.map((item, idx) =>
            <button key={idx} onClick={() => this.openHistory(item)}>{`data ${item[0].row} x ${item[0].column}`}</button>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tiles: state.tile.data,
})

export default connect(null, { generateTiles })(GenerateForm);
// export default (GenerateForm);