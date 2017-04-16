import React from 'react'
import ProfilePicture from './profilePicture'
import picture from '../../assets/images/defaultIcon.png'
class Post extends React.Component {
  render () {
  return(
    <div className="card card-medium">
      <p className="card-username"> <ProfilePicture image={picture}/>User Name</p>
      <p className="card-title">{this.props.title}</p>
    </div>
  )
  }
}

export default Post
