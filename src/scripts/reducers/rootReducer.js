import { combineReducers } from 'redux';

import loginApp from './loginReducer'
import registerApp from './registerReducer'
import dashboardApp from './dashboardReducer'

//Add all reducers here
const rootReducer = combineReducers({
  loginApp,
  registerApp,
  dashboardApp  
})

export default rootReducer