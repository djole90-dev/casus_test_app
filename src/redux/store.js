import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];
let configStore = applyMiddleware(...middleware)

if (process.env.NODE_ENV === 'development') {
  configStore = composeWithDevTools(applyMiddleware(...middleware));
}

const store = createStore(rootReducer, configStore);
sagaMiddleware.run(rootSaga);

export default store;