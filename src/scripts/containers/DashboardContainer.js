import React from 'react'
import { connect } from 'react-redux'
import { loadDashboardData } from '../actions/dashboardActions'
import Dashboard from './../components/Dashboard/Dashboard'

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
      const dispatch = this.props.dispatch
      dispatch(loadDashboardData())
      .then(json => {
        console.log("I")
        // console.log(json.dashData)
        this.state.dashData = json.dashData
        this.setState({})
      })
  }

  render() {
    return (
        <div>
          <Dashboard dashData={this.state.dashData} />
        </div>
    )
  }
}


function select(state) {
  return {}
}

export default connect(select)(DashboardContainer)