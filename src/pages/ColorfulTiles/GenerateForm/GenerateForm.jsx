import React, { Component } from 'react';
import TextInput from '../../../components/Forms/TextInput';
import Tile from '../../../components/Tile'
import './GenerateForm.scss'

import { connect } from 'react-redux';
import { generateTiles, saveTiles, updateTileColor } from '../../../redux/actions/tileActions';

import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../../utils/common';

class GenerateForm extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0,
      value_tile: '',
      isShow: false,
      show_tile: false,
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
    this.props.saveTiles(this.props.tiles, this.state.value_tile)
    this.setState({
      value_tile: ''
    })
  }

  openHistory = (item) => {
    const { isShow } = this.state;
    if (isShow) {
      this.setState({ show_tile: false });
    } else {
      this.setState({ show_tile: true });
    }
    this.setState({ isShow: !isShow})
  }

  render() {
    const { row, column, show_tile } = this.state;
    const { saveData } = this.props;

    return (
      <div className="generate-form">
        <TextInput name="row" label="Row" value={row} onChange={this.onChange} />
        <TextInput name="column" label="Column" value={column} onChange={this.onChange} />
        <div className="generate-form__buttons">
          <button className="button" onClick={this.onGenerate}>Generate</button>
          <button className="button button--grey" onClick={ this.setAllToDefault }>Set all to default</button>
          <button className="button" onClick={this.saveTile}>Save</button>
          <input name="value_tile" onChange={this.onChange} placeholder="name file ..."></input>
        </div>
        <div className="generate-form__history">
          {!!saveData && saveData.map((item, idx) =>
            <div key={idx} className="item-file">
              <button className="button" onClick={() => this.openHistory(item)}>{item.name}</button>
              {!!show_tile &&
                <div className="load-tile">
                  {item.save.map((row, rowIdx) =>
                    <div key={ rowIdx } className="tile-row">
                      { row.map((tile, columnIdx) =>
                        <Tile
                          key={ columnIdx }
                          color={ tile }
                        />
                      )}
                    </div>
                  )}
                </div>              
              }
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tiles: state.tile.data,
  saveData: state.tile.saveData,
})

export default connect(mapStateToProps, { generateTiles, saveTiles, updateTileColor })(GenerateForm);
// export default (GenerateForm);