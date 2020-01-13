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
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchGiphy('https://api.giphy.com/v1/gifs/trending?limit=20')
  }

  fetchGiphy = (url, more) => {
    this.setState({ loading: true })
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
        let offet = this.state.offset;
        let data = res.data;
        
        // save data on LocalStoreage        
        if (more) {
          const storedData = getDataFromLocalStorage('dataGiphy');
          data = [ ...storedData, ...data ];
          console.log('data', data.length)
          offet = offet + 20;
        }
        
        this.setState({
          data: data,
          offet: offet
        })
        // saveDataToLocalStorage('dataGiphy', this.state.data)
        saveDataToLocalStorage('dataGiphy', data)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => this.setState({ loading: false }))
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
    const offet = this.state.offset + 20;
    console.log(offet)
    const url = `https://api.giphy.com/v1/gifs/trending?limit=20&offset=${ offet }`;
    this.fetchGiphy(url, true)
  }

  render() {
    const { data, loading } = this.state;
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
        <div className="buttons">
          { !loading && <button className="button" onClick={ this.onLoadMore }>Load more</button> }
        </div>
      </div>
    )
  }
}

export default Giphy;