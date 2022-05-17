import {
  ReposDispatchTypes,
  REPOS_FAIL,
  REPOS_LOADING,
  REPOS_SUCCESS,
  ReposData,
} from '../actions/ReposActionTypes';

interface IDefaultState {
  loading: boolean;
  repos?: ReposData;
}

const defaultState: IDefaultState = {
  loading: false,
};

const reposReducer = (
  state: IDefaultState = defaultState,
  action: ReposDispatchTypes,
): IDefaultState => {
  switch (action.type) {
    case REPOS_LOADING:
      return {loading: true}; // why not? {...state, loading: true}
    case REPOS_FAIL:
      return {loading: false};
    case REPOS_SUCCESS:
      return {loading: false, repos: action.payload};
    default:
      return state;
  }
};

export default reposReducer;
