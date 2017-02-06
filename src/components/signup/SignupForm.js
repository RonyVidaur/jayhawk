import React from 'react'
import TextField from '../common/TextField'
import Button from '../common/Button'

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('submitted')
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join the community</h2>

        <TextField
          field='username'
          type="text"
          onChange={this.onChange}
          value={this.state.username}
          label="username"
                    />
        <TextField
          field="email"
          type="text"
          onChange={this.onChange}
          value={this.state.email}
          label="email"
                    />

        <TextField
          field='password'
          type="password"
          onChange={this.onChange}
          value={this.state.password}
          label="password"
                    />
        <TextField
          field='passwordConfirmation'
          type="password"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          label="Confirm password"
                    />
      <Button href="" type="submit" primary>Sign Up</Button>
      </form>

    )
  }
}

export default SignupForm
