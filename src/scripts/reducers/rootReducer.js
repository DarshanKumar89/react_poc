import React from 'react';
import { combineReducers } from 'redux';

import loginApp from './loginReducer'

//Add all reducers here
const rootReducer = combineReducers({
  loginApp
})

export default rootReducer