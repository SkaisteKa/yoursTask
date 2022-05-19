import axios from 'axios';
import {Dispatch} from 'redux';
import {
  ReposDispatchTypes,
  REPOS_LOADING,
  REPOS_FAIL,
  REPOS_SUCCESS,
} from './ActionTypes';

export const GetRepos =
  (
    owner: string,
    repository: string,
    state: string,
    perPage: number = 5,
    page: number = 1,
  ) =>
  async (dispatch: Dispatch<ReposDispatchTypes>) => {
    try {
      dispatch({
        type: REPOS_LOADING,
      });
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repository}/issues?state=${state}&per_page=${perPage}&page=${page}`,
      );
      dispatch({
        type: REPOS_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: REPOS_FAIL,
      });
    }
  };
