import {ISSUES_TOTAL, IssuesTotalTypes} from '../actions/ActionTypes';

interface IDefaultState {
  total: number;
}

const defaultState: IDefaultState = {
  total: 0,
};

const dataReducer = (
  state: IDefaultState = defaultState,
  action: IssuesTotalTypes,
): IDefaultState => {
  switch (action.type) {
    case ISSUES_TOTAL:
      return {total: action.payload};
    default:
      return state;
  }
};

export default dataReducer;
