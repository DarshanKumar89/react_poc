import React from 'react';
import { combineReducers } from 'redux';

import loginApp from './loginReducer'
import registerApp from './registerReducer'

//Add all reducers here
const rootReducer = combineReducers({
  loginApp: loginApp,
  registerApp: registerApp
})

export default rootReducer