import React, { PropTypes } from 'react'
import TextField from '../common/TextField'

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation : '',
      errors: {}
    }
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('submitted')
  }

  render () {
    const { errors } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join the community</h2>
        <TextField
          field={this.state.username}
          placeholder="choose wisely"
          type="text"
          value={this.state.username}
          label="user"
                    />
        <TextField
          field={this.state.email}
          placeholder="E-mail address"
          type="text"
          value={this.state.email}
          label="email"
                    />

        <TextField
          field={this.state.password}
          placeholder=""
          type="password"
          value={this.state.password}
          label="password"
                    />
        <button href="" type="submit" className="button">Sign Up</button>
      </form>

    )
  }
}

export default SignupForm
