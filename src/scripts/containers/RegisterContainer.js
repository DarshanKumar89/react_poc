import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/registerActions'
import Register from './../components/Register/Register'

class RegisterContainer extends React.Component {

  render() {
    const dispatch = this.props.dispatch
    return (
        <Register
          registerSubmit={user =>
            dispatch(registerUser(user))
          } />
    )
  }
}

function select(state) {
  return {}
}

export default connect(select)(RegisterContainer)