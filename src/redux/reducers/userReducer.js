import * as Types from '../actions/types';

const initialState = {
  status: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case Types.BOTAO_CLICADO_REQUEST: {
      console.log('REQUESTED...');
      return state;
    }

    case Types.BOTAO_CLICADO_SUCCESS: {
      console.log('SUCCESS =)')
      const newState = { ...state };
      newState.status = true;
      newState.error = false;
      return newState;
    }

    case Types.BOTAO_CLICADO_FAILURE: {
      console.log('ERROR =)')
      const newState = { ...state };
      newState.error = true;
      return newState;
    }

    default: return state;
  }
}