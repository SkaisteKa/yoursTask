import {combineReducers} from 'redux';
import inputsReducer from './InputsReducer';
import reposReducer from './ReposReducer';

const RootReducer = combineReducers({
  repos: reposReducer,
  inputs: inputsReducer,
});

export default RootReducer;
