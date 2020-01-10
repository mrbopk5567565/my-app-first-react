import React, { Component } from 'react';
import GiphyItem from '../../components/GiphyItem';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common';
import './Giphy.scss';

let index_offset = 0;

class Giphy extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: '',
      offset: 0,
    }
  }

  componentDidMount() {
    this.fetchGiphy('https://api.giphy.com/v1/gifs/trending?limit=20')
  }

  fetchGiphy = (url) => {
    const { data } = this.state
    fetch(`${url}&api_key=hsstdMEvSfHb4lwbfOFWPOmLD1yHHpqg`, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Success:', res);
        // this.setState({ data: res.data })
        // save data on LocalStoreage
        
        if (true) {
          const a = this.state.data;
          const b = res.data;
          const data = [ ...a, ...b ];
          console.log('data',data.length)
          saveDataToLocalStorage('dataGiphy', this.state.data)
          this.setState({
            data: data
          })
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  onSearch = () => {
    const { search } = this.state;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ search }&limit=3`
    this.fetchGiphy(url)
  }

  onLoadMore = () => {
    const { offset } = this.state;
    index_offset+=20;
    console.log(index_offset)
    const url = `https://api.giphy.com/v1/gifs/trending?limit=20&offset=${ index_offset }`;
    this.fetchGiphy(url)
  }

  render() {
    const { data } = this.state;
    return (
      <div className="giphy">
        <div className="giphy-search">
          <input type="text" name="search" onChange={ this.onChange }/>
          <button onClick={ this.onSearch }>Search gifs</button>
        </div>
        <h1>Gif images</h1>
        <div className="giphy-list">
          {data.map((item, idx) =>
            <GiphyItem
              key={idx}
              id={item.id}
              img={item.images.original.url}
              title={item.title}
            />
          )}
        </div>
        <button onClick={ this.onLoadMore }>Load more</button>

      </div>
    )
  }
}

export default Giphy;