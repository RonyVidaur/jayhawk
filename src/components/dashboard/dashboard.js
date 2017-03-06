import React, { PropTypes } from 'react'
import NavBar from '../common/navbar'
import SideBar from '../common/sidebar-s'
import Dock from '../common/dock'

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <SideBar />
        <Dock />
      </div>
    )
  }
}

export default Dashboard
