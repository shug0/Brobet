import styled from 'styled-components'
import { key } from 'styled-theme'
import Link from 'next/link'
import { Icon } from '..'

export const HeaderBarWrapper = styled.header`
  height: ${key('comps.headerBar.h')};
  background-color: ${key('colors.primary')};
  color: white;
  
  & a {
    color: white;
    text-decoration: none;
    padding: 0 1rem;
  }

  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  
  font-weight: 300;
`

export const Title = styled.h1`
  margin: 0 auto 0 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
`

export const LogoutButton = styled(Icon)`
  padding: 10px;
  cursor: pointer;
`

export const TokenDisplay = styled.div`
  padding: 10px;
  font-weight: 300;
  color: ${key('colors.green')};
`
