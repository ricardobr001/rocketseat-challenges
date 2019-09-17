import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const enchancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : null
/* eslint-enable */

const store = createStore(rootReducer, enchancer)
sagaMiddleware.run(rootSaga)

export default store
