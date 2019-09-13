import React, { Component } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Form, SubmitButton } from './styles'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true })
    const { newRepo, repositories } = this.state

    const res = await api.get(`/repos/${newRepo}`)
    const data = {
      name: res.data.full_name
    }

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false
    })
  }

  render() {
    const { newRepo, loading } = this.state

    return (
      <Container>
        <h1>
          <FaGithub />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFFFFF" size={14} />
            ) : (
              <FaPlus color="#FFFFFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    )
  }
}
