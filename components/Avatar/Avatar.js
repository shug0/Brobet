import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactAvatar from 'react-avatar'

class Avatar extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired
  }

  static defaultProps = {
    size: '20px'
  }

  render () {
    const { user, size } = this.props

    return (
      <ReactAvatar round name={user.pseudo || user.email} size={size} />
    )
  }
}

export default Avatar
