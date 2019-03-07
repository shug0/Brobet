import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'

import { signOut } from '../../actions/client/auth'
import { getCurrentUserWallet } from '../../actions/client/wallets'
import { Icon, Avatar } from '..'

import {
  HeaderBarWrapper,
  Title,
  LogoutButton,
  TokenDisplay,
} from './HeaderBar.styled'

class HeaderBar extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    loading: PropTypes.bool.isRequired
  }

  state = {
    tokens: null
  }

  handleLogout = () => {
    signOut()
    Router.push('/')
  }

  getTokens = () => {
    getCurrentUserWallet().then(tokens => (
      this.setState({ tokens })
    ))
  }

  componentWillReceiveProps (nextProps, nextContext) {
    const { tokens } = this.state
    if (nextProps.user && !tokens) {
      this.getTokens()
    }
  }

  render () {
    const { user, loading } = this.props
    const { tokens } = this.state

    return (
      <HeaderBarWrapper>
        <Title>
          <Link href="/">
            <a>Bro Bet</a>
          </Link>
        </Title>

        {!loading && (
          user ? (
            <>
              <Link href="/admin">
                <a>Admin</a>
              </Link>

              {tokens && (
                <>
                  <TokenDisplay>{tokens}</TokenDisplay>
                  <Icon name='far fa-gem' />
                </>
              )}


              <Link href="/profile">
                <a><Avatar user={user} size='30px' /></a>
              </Link>
              <LogoutButton name='fas fa-sign-out-alt' onClick={this.handleLogout} />
            </>
          ) : (
            <>
              <Link prefetch href="/signup">
                <a>Signup</a>
              </Link> 
              <Link prefetch href="/login">
                <a>Login</a>
              </Link>
            </> 
          )
        )}
      </HeaderBarWrapper>
    )
  }
}

export default HeaderBar
