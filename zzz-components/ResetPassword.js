import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'
import { CURRENT_USER_QUERY } from './User'

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      name
      email
    }
  }
`

export default class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: ''
  }

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Mutation
        mutation={RESET_PASSWORD_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          ...this.state
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(requestReset, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await requestReset()
              this.setState({ password: '', confirmPassword: '' })
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Reset your password</h2>
              {error && <Error error={error} />}
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="confirmPassword">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Change my password</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}
