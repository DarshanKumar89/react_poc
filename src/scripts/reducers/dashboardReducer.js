import { GET_DASHDATA, GET_DASHDATA_SUCCESS, GET_DASHDATA_FAILURE } from './../actions/dashboardActions'

const initialDashboardState = {
  isFetching: false,
  isError: false,
  dashData: {
    sidebar: {
      navigationLinks: []
    }
  }
}

export default function dashboardApp(state = initialDashboardState, action) {
  switch (action.type) {
    case GET_DASHDATA:
      // return Object.assign({}, state, { isFetching: true }) /// use ...
      return {...state, isFetching: true }
    case GET_DASHDATA_SUCCESS:
      return {
          ...state, 
          isFetching: false,
          dashData: action.dashData,
          lastUpdated: action.receivedAt 
      }
    case GET_DASHDATA_FAILURE:
      return {...state, isFetching: false, isError: true }
    default:
      return state
  }
}