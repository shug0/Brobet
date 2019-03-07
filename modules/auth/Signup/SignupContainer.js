import React, { PureComponent } from 'react'
import Router from 'next/router'

import SignupForm from './SignupForm'

import {
  createUserAuth,
  createUserInStore,
  updateUserAuth,
  getCurrentUserIdToken
} from '../../../actions/client/auth'
import { initCurrentUserWallet } from '../../../actions/client/wallets'

class SignupContainer extends PureComponent {
  state = {
    error: false
  }

  handleSignup = (values, setSubmitting) => {
    createUserAuth(values)
      .then(({ user }) => createUserInStore(user, values))
      .then(() => updateUserAuth(values))
      .then(getCurrentUserIdToken)
      .then(initCurrentUserWallet)
      .then(() => Router.push('/'))
      .catch(error => {
        this.setState({ error })
        setSubmitting(false)
      })
  }

  render () {
    return (
      <SignupForm
        handleSubmit={this.handleSignup}
        error={this.state.error}
      />
    )
  }
}

export default SignupContainer
