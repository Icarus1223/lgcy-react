import { legacy_createStore as createStore, combineReducers } from 'redux'
import signinReducer from './reducers/signinReducer';
import { signupReducer } from './reducers/signupReducer';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup:signupReducer
});

const store = createStore(rootReducer);

export default store;