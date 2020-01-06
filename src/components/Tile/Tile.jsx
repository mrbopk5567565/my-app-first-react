import React, { Component } from 'react';
import { randomColor } from '../../utils/common';
import './Tile.scss';

const defaultColor = '#ffffff';

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      color: defaultColor
    }
  }

  updateColor = () => {
    const { color } = this.state;
    let newColor = '';

    if (color != defaultColor){
      newColor = defaultColor;
    } else {
      newColor = randomColor();
    }

    this.setState({ color: newColor })
  }

  render() {
    const { color } = this.state;
    return (
      <div
        className="tile"
        onMouseMove={ this.updateColor }
        onClick={ this.updateColor }
        style={{ backgroundColor: color }}
        >
      </div>
    )
  }
}

export default Tile;