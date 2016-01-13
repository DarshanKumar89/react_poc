import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/loginActions'
import Login from './../components/Login/Login'

class LoginContainer extends React.Component {

  render() {
    const dispatch = this.props.dispatch
    return (
        <Login
          loginSubmit={user =>
            dispatch(authenticateUser(user))
          } />
    )
  }
}

function select(state) {
  return {}
}

export default connect(select)(LoginContainer)