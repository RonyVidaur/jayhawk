import React, { PropTypes } from 'react'

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username = '',
      email = '',
      password = '',
      passwordConfirmation = '',
      errors = {}
    }
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render () {
    const { errors } = this.state
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    )
  }
}

export default SignupForm
