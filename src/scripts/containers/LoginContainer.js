import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../actions/loginActions'
import Login from './../components/Login/Login'

export class LoginContainer extends React.Component {
  render() {
    // Injected by connect() call:
    const { dispatch } = this.props
    return (
        <Login
          loginSubmit = {user =>
            dispatch(doLogin(user))
          } />
    )
  }
}

function select(state) {
  return {
    loginSubmit: state.loginSubmit
  }
}

export default connect(select)(LoginContainer)