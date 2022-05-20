import {combineReducers} from 'redux';
import inputsReducer from './InputsReducer';
import reposReducer from './ReposReducer';
import dataReducer from './DataReducer';

const RootReducer = combineReducers({
  repos: reposReducer,
  inputs: inputsReducer,
  total: dataReducer,
});

export default RootReducer;
