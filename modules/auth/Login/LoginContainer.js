import React, { Component } from 'react'
import Router from 'next/router'

import { login } from '../../../actions/client/auth'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    error: false
  }

  handleLogin = (values, setSubmitting) => (
    login(values)
      .then(() => { Router.push('/') })
      .catch(error => {
        this.setState({ error })
        setSubmitting(false)
      })
  )

  render () {
    return (
      <LoginForm
        error={this.state.error}
        handleSubmit={this.handleLogin}
      />
    )
  }
}

export default LoginContainer
