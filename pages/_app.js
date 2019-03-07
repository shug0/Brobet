import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'

import theme from '../constants/theme'
import { HeaderBar, Loader } from '../components'
import clientCredentials from '../constants/credentials/client'

class MyApp extends App {
  state = {
    loading: true,
    user: null
  }

  componentDidMount () {
    firebase.initializeApp(clientCredentials)
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user,
        loading: false
      })
    })
  }

  render () {
    const { Component } = this.props
    const _props = {
      user: this.state.user,
      loading: this.state.loading
    }

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <HeaderBar {..._props} />
          <Loader loading={_props.loading}>
            <Component {..._props} />
          </Loader>
        </Container>
      </ThemeProvider>
    )
  }
}

export default MyApp
