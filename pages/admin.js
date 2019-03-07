import React, { Component } from 'react'
import { Wrapper } from '../components'

import AdminContainer from '../modules/admin/AdminContainer'

export default class Admin extends Component {
  componentDidMount () {

  }

  render () {
    const { user } = this.props

    return (
      <Wrapper>
        {user ? (
          <AdminContainer user={user} />
        ) : (
          <h3>You are not allowed to access this area.</h3>
        )}
      </Wrapper>
    )
  }
}
