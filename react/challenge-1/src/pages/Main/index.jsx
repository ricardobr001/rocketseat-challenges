import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api'

import Container from '../../components/Container'
import { Form, SubmitButton, List } from './styles'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false
    }
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories')

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) })
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories))
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
    const { newRepo, repositories, loading } = this.state

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

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Details
              </Link>
            </li>
          ))}
        </List>
      </Container>
    )
  }
}
