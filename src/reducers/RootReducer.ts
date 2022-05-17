import {combineReducers} from 'redux';
import reposReducer from './ReposReducer';

const RootReducer = combineReducers({
  repos: reposReducer,
});

export default RootReducer;
