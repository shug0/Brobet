import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WrapperCard = styled.div`
  background-color: white;
  padding: ${props => props.padding || '2rem'};
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 
    0 4px 6px rgba(50,50,93,.11), 
    0 1px 3px rgba(0,0,0,.08);
  ;
  color: ${({theme}) => theme.colors.fontLight};
`

class Card extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    const { children, ...props } = this.props

    return (
      <WrapperCard {...props}>
        {children}
      </WrapperCard>
    )
  }
}

export default Card
