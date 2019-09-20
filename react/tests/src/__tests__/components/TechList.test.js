import React from 'react'
import { useSelector } from 'react-redux'
import { render } from '@testing-library/react'

import TechList from '../../components/TechList'

jest.mock('react-redux')

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(callback => callback({
      techs: ['NodeJS', 'React']
    }))

    const { getByTestId, getByText } = render(<TechList />)

    expect(getByTestId('tech-list')).toContainElement(getByText('NodeJS'))
    expect(getByTestId('tech-list')).toContainElement(getByText('React'))
  })
})
