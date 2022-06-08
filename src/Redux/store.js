import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSagas from './Sagas/rootSaga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import combineReducers from './Reducers'

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
    reducer: combineReducers,
    middleware
}
)

sagaMiddleware.run(rootSagas)
export default store;

