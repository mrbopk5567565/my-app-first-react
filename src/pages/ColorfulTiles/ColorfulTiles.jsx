import React, { Component } from 'react';
import GenerateForm from './GenerateForm';
import Tile from '../../components/Tile';
import { range } from 'lodash';
import './ColorfulTiles.scss';

class ColorfulTiles extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0,
    }
  }

  render() {
    const { row, column } = this.state;
    return (
      <div className="colorful-tiles">
        <h2>Colorful Tiles</h2>
        <GenerateForm
          generateTiles={data => this.setState({ row: data.row, column: data.column })}
        />
        {/* {
          !!row &&
          <div>
            {range(Number(row)).map(row =>
              <div key={row} className="tile-row">
                {!!column && range(Number(column)).map(column =>
                  <Tile key={column} />
                )}
              </div>
            )}
          </div>
        } */}
        {!!row && <div>
          {range(Number(row)).map(row => 
            <div key={ row } className="tile-row">
              {!!column && range(Number(column)).map(column =>
                <Tile key={ column } />  
              )}
            </div>  
          )}
        </div>}
      </div>
    )
  }
}

export default ColorfulTiles;