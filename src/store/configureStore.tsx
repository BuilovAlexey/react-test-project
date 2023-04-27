import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { beersReducer } from '../pages/beers/modules/beers/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  Beers: beersReducer,
})

export default () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  })
  return {
    store,
    runSaga: sagaMiddleware.run(rootSaga),
  }
}
