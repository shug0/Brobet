import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Appear = styled.div`
  transition: ease all 0.2s;
  width: 100%;
  height: 100%;
  
  ${({ loading }) => loading ? css`
    opacity: 0;
    transform: translateX(-10px);
  ` : css`
    opacity: 100%;
    transform: translateX(0);
  `}
 `

class Loader extends Component {
  render () {
    const { loading, children } = this.props

    return (
      <Appear loading={loading}>
        {!loading && children}
      </Appear>
    )
  }
}

export default Loader
