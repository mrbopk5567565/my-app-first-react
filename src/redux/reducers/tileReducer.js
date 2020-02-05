import { GENERATE_TILES, UPDATE_TILE_COLOR } from '../type';

const initialState = {
  data: []
}

export default function(state = initialState, action){
  switch(action.type){
    case GENERATE_TILES:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_TILE_COLOR:
      const { rowIdx, columnIdx, newColor } = action.payload;
      state.data[rowIdx][columnIdx] = newColor;

      return {
        ...state,
        data: [ ...state.data ]
      }
    default:
      return state;
  }
} 