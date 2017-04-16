import React from 'react'
import NavBar from '../common/navbar'
import SideBar from '../common/sidebar-s'
import Dock from '../common/dock'
import Post from '../common/post'
class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <SideBar />
        <Dock />
        <div className="post-wrapper">
          <Post title="Hi"/>
          <Post title="Hey"/>
          <Post title="Sup"/>
        </div>
      </div>
    )
  }
}

export default Dashboard
