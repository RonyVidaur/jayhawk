import React from 'react'
import ProfilePicture from './profilePicture'
import picture from '../../assets/images/defaultIcon.png'
const NavBar = (props) => {
  return (
    <div className="nav">
      <ProfilePicture image={picture}/>
    </div>
  )
}

export default NavBar
