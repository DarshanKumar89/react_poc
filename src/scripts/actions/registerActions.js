import React from 'react';
import fetch from 'isomorphic-fetch'

import { hashHistory } from 'react-router'

export const DO_REGISTER = 'DO_REGISTER'
export const DO_REGISTER_SUCCESS = 'DO_REGISTER_SUCCESS'
export const DO_REGISTER_FAILURE = 'DO_REGISTER_FAILURE'

//TO-DO: Integrate with redux-actions

export function doRegister(user) {
  return { 
  	type: DO_REGISTER, 
  	user 
  }
}

export function doRegisterSuccess(user) {
  hashHistory.push('/thanks'); // Should be moved to middleware? To be called after the login postprocessing is done.
  return { 
  	type: DO_REGISTER_SUCCESS, 
  	user 
  }
}

export function doRegisterFailure(user) {
  return { 
  	type: DO_REGISTER_FAILURE, 
  	user 
  }
}

export function registerUser(user) {
	return dispatch => {
		dispatch(doRegister(user))
		return fetch("http://www.reddit.com/r/reactjs.json")
      .then(response => response.json())
      .then(json => dispatch(doRegisterSuccess(user, json)))
      .catch(err => dispatch(doRegisterFailure(user, err)))

      // .then(response => response.json())
      // .then(json => 
      // 	dispatch(doRegisterSuccess(json))
      // ).fail(json =>
      // 	dispatch(doRegisterFailure(json))
      // )
  }
}