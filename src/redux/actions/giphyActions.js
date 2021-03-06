import { GET_TRENDING_GIFS, GET_MORE_TRENDING_GIFS, GIPHY_LOADING, GIPHY_SEARCH } from '../type';
import { request } from '../../utils/request';
const api_key = 'hsstdMEvSfHb4lwbfOFWPOmLD1yHHpqg';

export const getTrendingGifs = () => dispatch => {
  dispatch(giphyLoading());
  const params = {
    api_key,
    limit: 20
  }

  request('get', 'https://api.giphy.com/v1/gifs/trending', { params })
    .then(res => {
      dispatch({
        type: GET_TRENDING_GIFS,
        payload: res,
      })
    })
}

export const getMoreTrendingGifs = (offset) => dispatch => {
  dispatch(giphyLoading());
  const params = {
    api_key,
    limit: 20,
    offset,
  }

  request('get', 'https://api.giphy.com/v1/gifs/trending', { params })
    .then(res => {
      dispatch({
        type: GET_MORE_TRENDING_GIFS,
        payload: { ...res, offset }
      })
    })
}

export const giphyLoading = () => {
  return ({
    type: GIPHY_LOADING,
  })
}

export const giphySearch = (search) => dispatch => {
  const params = {
    api_key,
    limit: 3,
    q: search,
  }

  request('get', 'https://api.giphy.com/v1/gifs/search', { params })
    .then(res => {
      dispatch({
        type: GIPHY_SEARCH,
        payload: res,
      })
    })
}