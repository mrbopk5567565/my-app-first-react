import React, { Component } from 'react';
import { randomColor, defaultColor } from '../../utils/common';
import { connect } from 'react-redux';
import { updateTileColor } from '../../redux/actions/tileActions';
import './Tile.scss';

import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common';

class Tile extends Component {
  updateColor = () => {
    const { rowIdx, columnIdx, currentColor, updateTileColor, color } = this.props;
    let newColor = '';

    if (currentColor !== defaultColor){
      newColor = defaultColor;
    } else {
      newColor = randomColor();
    }

    updateTileColor({ rowIdx, columnIdx, newColor })
  }

  render() {
    const { color } = this.props;
    return (
      <div
        className="tile"
        // onMouseMove={ this.updateColor }
        onClick={ this.updateColor }
        style={{ backgroundColor: color }}
        >
      </div>
    )
  }
}

export default connect(null, { updateTileColor })(Tile);