import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer';
 
const loggerMiddleware = createLogger()
 
export default function configureStore(preloadedState) {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      reducer,
      preloadedState,
      applyMiddleware(
        thunkMiddleware
      )
    )
  } else {
    return createStore(
      reducer,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  }
}