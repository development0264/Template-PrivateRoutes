import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSagas from './Sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    applyMiddleware(sagaMiddleware)
)
// sagaMiddleware.run(rootSagas)
export default store;

