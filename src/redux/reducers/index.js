import { combineReducers } from 'redux';
import testReducer from './testReducer';
import giphyReducer from './giphyReducer';

export default combineReducers({
  test: testReducer,
  giphy: giphyReducer,
})