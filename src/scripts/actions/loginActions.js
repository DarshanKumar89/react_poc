import React from 'react';
import fetch from 'isomorphic-fetch'

import { hashHistory } from 'react-router'

export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGIN_SUCCESS = 'DO_LOGIN_SUCCESS'
export const DO_LOGIN_FAILURE = 'DO_LOGIN_FAILURE'

//TO-DO: Integrate with redux-actions

export function doLogin(user) {
  return { 
  	type: DO_LOGIN, 
  	user 
  }
}

export function doLoginSuccess(user) {
  hashHistory.push('/dashboard'); // Should be moved to middleware? To be called after the login postprocessing is done.
  return { 
  	type: DO_LOGIN_SUCCESS, 
  	user 
  }
}

export function doLoginFailure(user) {
  return { 
  	type: DO_LOGIN_FAILURE, 
  	user 
  }
}

export function authenticateUser(user) {
	return dispatch => {
		dispatch(doLogin(user))
		return fetch("http://localhost:3000/login", {
        method: "post" , 
        body: JSON.stringify(user),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    })
      .then(response => response.json())
      .then(json => dispatch(doLoginSuccess(user, json)))
      .catch(err => dispatch(doLoginFailure(user, err)))
  }
}