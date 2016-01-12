import fetch from 'isomorphic-fetch'

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
		return fetch("http://www.reddit.com/r/reactjs.json")
      .then(response => response.json())
      .then(json => 
      	dispatch(doLoginSuccess(json))
      ).fail(json =>
      	dispatch(doLoginFailure(json))
      )
  }
}