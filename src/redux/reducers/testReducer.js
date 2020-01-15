import { TEST_REDUX } from '../type';

const initialState = {
  data: '',
  label: 'hello world',
  id: '1234',
}

export default function(state = initialState, action){
  switch(action.type){
    case TEST_REDUX:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}