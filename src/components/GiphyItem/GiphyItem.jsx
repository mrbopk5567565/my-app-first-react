import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GiphyItem.scss';

class GiphyItem extends Component {
  render() {

    const { img, title } = this.props;

    return (
      <div className="giphy-item">
        <div className="giphy-item__image">
          <img src={img} alt={title} />
        </div>
        <span className="giphy-item__title">{ title }</span>
      </div>
    )
  }
}

export default GiphyItem;