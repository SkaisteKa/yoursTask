import {
  SET_OWNER_DATA,
  SET_REPO_DATA,
  InputsDispatchTypes,
} from '../actions/ActionTypes';

interface IDefaultState {
  inputs: {};
  // owner: string;
  // repository: string;
}

const defaultState: IDefaultState = {
  inputs: {
    owner: '',
    repository: '',
  },
};

const inputsReducer = (
  state: IDefaultState = defaultState,
  action: InputsDispatchTypes,
): IDefaultState => {
  switch (action.type) {
    case SET_OWNER_DATA:
      return {...state, inputs: {...state.inputs, owner: action.payload}};
    case SET_REPO_DATA:
      return {...state, inputs: {...state.inputs, repository: action.payload}};
    default:
      return state;
  }
};

export default inputsReducer;
