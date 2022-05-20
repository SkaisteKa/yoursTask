import {ISSUES_TOTAL} from './ActionTypes';

export const issueTotal = (total: number) => {
  return {
    type: ISSUES_TOTAL,
    payload: total,
  };
};
