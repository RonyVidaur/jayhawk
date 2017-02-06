import '../styles/splash.css'
import FormHolder from './FormHolder'
import Greeting from './common/Greeting'

import React from 'react'

const Holder = (props) => {
  return (
    <div className="container">
      <div className="left-half">
        <Greeting />
      </div>
      <div className="right-half">
        <FormHolder />
      </div>
    </div>
  )
}

export default Holder
