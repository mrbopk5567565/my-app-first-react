import React, { Component } from 'react';
import GenerateForm from './GenerateForm';
import { connect } from 'react-redux';
import Tile from '../../components/Tile';
import { range } from 'lodash';
import './ColorfulTiles.scss';

import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common';

class ColorfulTiles extends Component {
  componentDidMount(){
    console.log(this.props.tiles)
  }
  render() {

    const { tiles } = this.props;

    return (
      <div className="colorful-tiles">
        <h2>Colorful Tiles</h2>
        <GenerateForm />

        {/* {!!row && <div className="colorful-tile" ref={tilesRef => { this.tilesRef = tilesRef }}>
          {range(Number(row)).map(row =>
            <div key={row} className="tile-row">
              {!!column && range(Number(column)).map(column =>
                <Tile key={column} row={row} column={column} />
              )}
            </div>
          )}
        </div>} */}

        {!!tiles && <div>
          {tiles.map((row, rowIdx) => 
            <div key={ rowIdx } className="tile-row">
              {row.map((tile, columnIdx) =>
                <Tile
                  key={ columnIdx }
                  rowIdx={ rowIdx }
                  columnIdx={ columnIdx }
                  currentColor={ tiles[rowIdx][columnIdx] }
                  color= { tile }
                />
              )}
            </div>
          )}
        </div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tiles: state.tile.data,
})

export default connect(mapStateToProps)(ColorfulTiles);