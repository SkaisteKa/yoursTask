export const REPOS_LOADING = 'REPOS_LOADING';
export const REPOS_FAIL = 'REPOS_FAIL';
export const REPOS_SUCCESS = 'REPOS_SUCCESS';

export const SET_OWNER_DATA = 'SET_OWNER_DATA';
export const SET_REPO_DATA = 'SET_REPO_DATA';

export interface ReposData extends Array<any> {}

export interface ReposLoading {
  type: typeof REPOS_LOADING;
}

export interface ReposFail {
  type: typeof REPOS_FAIL;
}

export interface ReposSuccess {
  type: typeof REPOS_SUCCESS;
  payload: {
    repos: ReposData;
  };
}

export type ReposDispatchTypes = ReposLoading | ReposFail | ReposSuccess;

export interface SetOwnerData {
  type: typeof SET_OWNER_DATA;
  payload: string;
}

export interface SetRepoData {
  type: typeof SET_REPO_DATA;
  payload: string;
}

export type InputsDispatchTypes = SetOwnerData | SetRepoData;
