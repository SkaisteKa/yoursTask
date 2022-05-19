import {SET_OWNER_DATA, SET_REPO_DATA} from './ActionTypes';

export const setOwnerData = (owner: string) => {
  return {
    type: SET_OWNER_DATA,
    payload: owner,
  };
};

export const setRepoData = (repository: string) => {
  return {
    type: SET_REPO_DATA,
    payload: repository,
  };
};
