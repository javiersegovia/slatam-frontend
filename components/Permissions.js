import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Error from './ErrorMessage'
import Table from './styles/Table'
import SickButton from './styles/SickButton'

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE'
]

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION(
    $permissions: [Permission]
    $userId: ID!
  ) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      name
      email
      permissions
    }
  }
`

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <Error error={error} />
      return (
        <>
          <h2>Manage Permissions</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(perm => (
                  <th key={perm}>{perm}</th>
                ))}
                <th>♫</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <UserPermissions user={user} key={user.id} />
              ))}
            </tbody>
          </Table>
        </>
      )
    }}
  </Query>
)

class UserPermissions extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array
    }).isRequired
  }

  state = {
    permissions: this.props.user.permissions
  }

  handlePermissionChange = e => {
    const checkbox = e.target

    // take a copy of the current permissions
    let updatedPermissions = [...this.state.permissions]

    // figure out if we need to remove or add this permission
    if (checkbox.checked) {
      updatedPermissions.push(checkbox.value)
    } else {
      updatedPermissions = updatedPermissions.filter(
        perm => perm !== checkbox.value
      )
    }

    this.setState({
      permissions: updatedPermissions
    })
  }

  render() {
    const { user } = this.props
    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{
          permissions: this.state.permissions,
          userId: user.id
        }}
      >
        {(updatePermissions, { loading, error }) => {
          if (error)
            return (
              <tr>
                <td colSpan="100%">
                  <Error error={error} />
                </td>
              </tr>
            )
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {possiblePermissions.map(perm => (
                <td key={perm}>
                  <label htmlFor={`${user.id}-permission-${perm}`}>
                    <input
                      type="checkbox"
                      id={`${user.id}-permission-${perm}`}
                      checked={this.state.permissions.includes(perm)}
                      value={perm}
                      onChange={this.handlePermissionChange}
                    />
                  </label>
                </td>
              ))}
              <td>
                <SickButton
                  type="button"
                  disabled={loading}
                  onClick={updatePermissions}
                >
                  Updat{loading ? 'ing' : 'e'}
                </SickButton>
              </td>
            </tr>
          )
        }}
      </Mutation>
    )
  }
}

export default Permissions
