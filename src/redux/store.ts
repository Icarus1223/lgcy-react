import { legacy_createStore as createStore, combineReducers } from 'redux'
import signinReducer from './reducers/signinReducer';

const rootReducer = combineReducers({
  signin: signinReducer,
});

const store = createStore(rootReducer);

export default store;