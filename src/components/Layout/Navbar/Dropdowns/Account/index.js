import React from 'react'
import PropTypes from 'prop-types'
import AccountLoggedIn from './LoggedIn'
import AccountNotLoggedIn from './NotLoggedIn'

const AccountDropdown = ({ isLoggedIn = false }) => {
  return isLoggedIn ? <AccountLoggedIn /> : <AccountNotLoggedIn />
}

AccountDropdown.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default AccountDropdown
