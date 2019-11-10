import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      title
      description
      price
    }
  }
`

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
    }
  }
`

export default class UpdateItem extends Component {
  state = {}

  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({
      [name]: val
    })
  }

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault()
    updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    })
  }

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error here!</p>
          if (!data.item) return <p>No item found for the ID {this.props.id}</p>
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading: loadingMutation, errorMutation }) => (
                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                  <Error error={errorMutation} />
                  <fieldset
                    disabled={loadingMutation}
                    aria-busy={loadingMutation}
                  >
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Insert title here"
                        defaultValue={data.item.title}
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Description your product"
                        defaultValue={data.item.description}
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="How much does it cost?"
                        defaultValue={data.item.price}
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <button type="submit">
                      Sav{loadingMutation ? 'ing' : 'e'} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}
