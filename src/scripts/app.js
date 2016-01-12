// import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import Routes from './routes'
import loginApp from './reducers/loginReducer'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, 
  loggerMiddleware 
)(createStore)

let store = createStoreWithMiddleware(loginApp)

ReactDOM.render(<Provider store={store}>
									<Routes/>
								</Provider>, document.getElementById("app"));

            


