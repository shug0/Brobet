import React, { Component } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

import { Wrapper } from '../components'
import LoginContainer from '../modules/auth/Login/LoginContainer'

const CenteredWrapper = styled(Wrapper)`
  height: calc(100% - ${key('comps.headerBar.h')});
`

export default class Login extends Component {
  render () {
    return (
      <CenteredWrapper>
        <LoginContainer />
      </CenteredWrapper>
    )
  }
}
