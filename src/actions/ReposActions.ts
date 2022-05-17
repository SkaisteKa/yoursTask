import axios from 'axios';
import {Dispatch} from 'redux';
import {
  ReposDispatchTypes,
  REPOS_LOADING,
  REPOS_FAIL,
  REPOS_SUCCESS,
} from './ReposActionTypes';

export const GetRepos =
  (owner: string, repository: string) =>
  async (dispatch: Dispatch<ReposDispatchTypes>) => {
    try {
      dispatch({
        type: REPOS_LOADING,
      });
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repository}/issues?state=all`,
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
