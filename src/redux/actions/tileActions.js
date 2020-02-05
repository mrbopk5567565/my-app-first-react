import { GENERATE_TILES, UPDATE_TILE_COLOR, SAVE_TILES } from '../type';

const defaultColor = '#ffffff';

export const generateTiles = (row, column) => dispatch => {
  const data = [];
  const aRowData = [];
  for (var i = 0; i < row; i++){
    for (var j = 0; j < column; j++){
      aRowData[j] = defaultColor;
    }
    data[i] = [...aRowData];
  }
  dispatch({
    type: GENERATE_TILES,
    payload: data
  })
}

export const updateTileColor = (data) => dispatch => {
  dispatch({
    type: UPDATE_TILE_COLOR,
    payload: data
  })
}

export const saveTiles = (data) => dispatch => {
  const saveData = { data }
  dispatch({
    type: SAVE_TILES,
    payload: saveData,
  })
}