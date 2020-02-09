import { GENERATE_TILES, UPDATE_TILE_COLOR, SAVE_TILES } from '../type';

const initialState = {
  data: [],
  saveData: []
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
    case SAVE_TILES:
      const a = {
        // ...state.trending,
        name: action.name,
        save: [ ...action.payload ]
      };
      return {
        ...state,       
        saveData: [ ...state.saveData, a ]
      }
    default:
      return state;
  }
} 