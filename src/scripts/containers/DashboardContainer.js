import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDashboardData } from '../actions/dashboardActions'
import Dashboard from './../components/Dashboard/Dashboard'

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadDashboardData())
  }

  render() {
    const { dashData } = this.props
    return (
        <div>
          <Dashboard dashData={dashData} />
        </div>
    )
  }
}

DashboardContainer.propTypes = {
  dashData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

//TO-DO: Integrate reselect library to remove boilerplate

function mapStateToProps(state) {
  const { dashboardApp } = state
  const dashData = dashboardApp

  return {
    dashData
  }
}

export default connect(mapStateToProps)(DashboardContainer)