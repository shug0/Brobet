import React, { Component } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

import SignupContainer from '../modules/auth/Signup/SignupContainer'

const FormWrapper = styled.div`
  margin: 2rem auto;
  width: ${key('comps.signupWrapper.w')};
  padding: 1rem 2rem;
`

const Wrapper = styled.section`
  height: ${({ theme }) => `calc(100% - ${theme.comps.headerBar.h})`};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = { user: this.props.user }
  }

  render () {
    const { user } = this.state

    return (
      <Wrapper>
        <FormWrapper>
          <h2>Signup</h2>
          <SignupContainer />
        </FormWrapper>
      </Wrapper>
    )
  }
}
