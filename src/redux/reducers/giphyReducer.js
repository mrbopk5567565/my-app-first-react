import { GET_TRENDING_GIFS, GET_MORE_TRENDING_GIFS, GIPHY_LOADING, GIPHY_SEARCH } from '../type';

const initialState = {
  trending: {
    offset: 0,
  },
  loading: false,
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_TRENDING_GIFS:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      }
    case GET_MORE_TRENDING_GIFS:
      return {
        ...state,
        trending: {
          ...action.payload,
          data: [ ...state.trending.data, ...action.payload.data ]
        },
        loading: false,
      };
    case GIPHY_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GIPHY_SEARCH:
      return {
        ...state,
        trending: action.payload
      }
    default:
      return state;
  }
}