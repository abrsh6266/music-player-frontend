import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import musicSaga from './musicSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware:()=> [sagaMiddleware],
});

sagaMiddleware.run(musicSaga)

export default store