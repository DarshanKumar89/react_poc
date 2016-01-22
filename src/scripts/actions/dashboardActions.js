import fetch from 'isomorphic-fetch'

import { hashHistory } from 'react-router'

export const GET_DASHDATA = 'GET_DASHDATA'
export const GET_DASHDATA_SUCCESS = 'GET_DASHDATA_SUCCESS'
export const GET_DASHDATA_FAILURE = 'GET_DASHDATA_FAILURE'

//TO-DO: Integrate with redux-actions

export function getDashData() {
  return { 
  	type: GET_DASHDATA, 
  	 
  }
}

export function getDashDataSuccess(data) {
  //hashHistory.push('/dashboard'); // Should be moved to middleware? To be called after the login postprocessing is done.
  return { 
  	type: GET_DASHDATA_SUCCESS, 
  	dashData: data,
    receivedAt: Date.now()
  }
}

export function getDashDataFailure() {
  return { 
  	type: GET_DASHDATA_FAILURE, 
  	 
  }
}

export function loadDashboardData() {
	return dispatch => {
		dispatch(getDashData())
		return fetch("http://localhost:3000/dashboard", {
        method: "get" , 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    })
      .then(response => response.json())
      .then(json => dispatch(getDashDataSuccess(json)))
      .catch(err => dispatch(getDashDataFailure(err)))
  }
}