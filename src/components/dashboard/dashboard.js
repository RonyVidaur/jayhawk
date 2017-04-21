import React from 'react'
import NavBar from '../common/navbar'
import SideBar from '../common/sidebar-s'
import Dock from '../common/dock'
import Post from '../common/post'

const posts = [
  {
    title: 'blah blah',
    author: 'Rony Vidaur',
    timestamp: '2001',
    id: 0
  },
  {
    title: 'LOL',
    author: 'Karla Murillo',
    timestamp: '2002',
    id: 3
  },
  {
    title: 'Hey Ho',
    author: 'Karla Murillo',
    timestamp: '2002',
    id: 1
  }
]

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: posts}
  }
  render () {
    return (
      <div>
        <NavBar />
        <SideBar />
        <Dock />
        <div className="post-wrapper">
        {this.state.posts.map(item =>
        <div key={item.id}>
          <Post title={item.title}/>
        </div>
        )}
        </div>
      </div>
    )
  }
}

export default Dashboard
