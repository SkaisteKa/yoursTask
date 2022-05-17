export const REPOS_LOADING = 'REPOS_LOADING';
export const REPOS_FAIL = 'REPOS_FAIL';
export const REPOS_SUCCESS = 'REPOS_SUCCESS';

// export interface ReposData {
//     number: number
//     title: string
//     state: string
// }

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
