import React from 'react'

const ProfilePicture = (props) => {
  return (
    <img className="profile-picture" src={props.image} alt="Profile" />
  )
}

export default ProfilePicture
