import React from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

const LogoWrapper = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Logo = () => {
  return (
    <LogoWrapper>
      Bro Bet
    </LogoWrapper>
  )
}

export default Logo
