import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { LinkWrapper, ButtonWrapper, VanillaLinkWrapper } from './ButtonStyles'

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'warning'])
  }

  render () {
    const { children, to, href, color, ...props } = this.props
    const content = props.disabled ? 'Loading...' : children

    if (to) {
      return (
        <LinkWrapper
          color={color}
          to={to}>
          {content}
        </LinkWrapper>
      )
    }

    if (href) {
      return (
        <VanillaLinkWrapper
          color={color}
          href={href}>
          {content}
        </VanillaLinkWrapper>
      )
    }

    return (
      <ButtonWrapper
        color={color}
        {...props}
      >
        {content}
      </ButtonWrapper>
    )
  }
}

export default Button
