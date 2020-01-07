import React, { Component } from 'react';
import GiphyItem from '../../components/GiphyItem';
import './Giphy.scss';

class Giphy extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: '',
    }
  }

  componentDidMount() {
    this.fetchGiphy('https://api.giphy.com/v1/gifs/trending?limit=20')
  }

  fetchGiphy = (url) => {
    fetch(`${url}&api_key=hsstdMEvSfHb4lwbfOFWPOmLD1yHHpqg`, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Success:', res);
        this.setState({ data: res.data })
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
              img={item.images.original.url}
              title={item.title}
            />
          )}
        </div>

      </div>
    )
  }
}

export default Giphy;