import React, { PropTypes } from 'react'
import '../styles/splash.css'
import FormHolder from './FormHolder'
import Greeting from './common/Greeting'
class Holder extends React.Component {
  render () {
    return(
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
}

export default Holder
