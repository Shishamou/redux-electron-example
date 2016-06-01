import { applyMiddleware, compose } from 'redux';
import { createMainStore } from 'redux-electron';
import rootReducer from './reducers/index';

export default function configureStore() {
  return createMainStore(rootReducer);
}
