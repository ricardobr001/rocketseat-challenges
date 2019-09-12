import React from 'react'

import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles'

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub />
        Repositories
      </h1>

      <Form>
        <input type="text" placeholder="Add repository" />

        <SubmitButton disabled>
          <FaPlus color="#FFFFFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default Main
