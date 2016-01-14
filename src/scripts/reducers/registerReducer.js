import React from 'react';

import { DO_REGISTER, DO_REGISTER_SUCCESS, DO_REGISTER_FAILURE } from './../actions/registerActions'

const initialRegisterState = {
  user: {},
  isFetching: false,
  isError: false
}

export default function registerApp(state = initialRegisterState, action) {
  switch (action.type) {
    case DO_REGISTER:
      return Object.assign({}, state, { isFetching: true }) /// use ...
    case DO_REGISTER_SUCCESS:
      return Object.assign({}, state, { isFetching: false })
    case DO_REGISTER_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isError: true })
    default:
      return state
  }
}