import React, { Component } from 'react';
import GiphyItem from '../../components/GiphyItem';
import './Giphy.scss';

import { connect } from 'react-redux';
import { getTrendingGifs, getMoreTrendingGifs, giphySearch } from '../../redux/actions/giphyActions';

class Giphy extends Component {
  constructor(){
    super();

    this.state = {
      search: undefined,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  componentDidMount(){
    this.props.getTrendingGifs()
  }

  render() {
    const { trendingGifs, loading, offset, getMoreTrendingGifs, giphySearch } = this.props;
    const { search } = this.state;
    return (
      <div className="giphy">
        <div className="giphy-search">
          <input type="text" name="search" onChange={ this.onChange }/>
          <button onClick={ () => giphySearch(search) }>Search gifs</button>
        </div>
        <h1>Gif images</h1>
        { !!trendingGifs && 
          <div className="giphy-list">
            {trendingGifs.map((item, idx) =>
              <GiphyItem
                key={idx}
                id={item.id}
                img={item.images.original.url}
                title={item.title}
              />
            )}
          </div>
        }
        <div className="buttons">
          { !loading && <button className="button" onClick={ () => getMoreTrendingGifs(offset + 20) }>Load more</button> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trendingGifs: state.giphy.trending.data,
  offset: state.giphy.trending.offset || 0,
  loading: state.giphy.loading,
})

export default connect(mapStateToProps, { getTrendingGifs, getMoreTrendingGifs, giphySearch })(Giphy);