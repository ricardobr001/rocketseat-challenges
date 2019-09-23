import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import { addTech } from '../../store/modules/techs/action'
import TechList from '../../components/TechList'

jest.mock('react-redux')

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(callback =>
      callback({
        techs: ['NodeJS', 'React']
      })
    )

    const { getByTestId, getByText } = render(<TechList />)

    expect(getByTestId('tech-list')).toContainElement(getByText('NodeJS'))
    expect(getByTestId('tech-list')).toContainElement(getByText('React'))
  })

  it('should be able to add new tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList />)
    const dispatch = jest.fn()

    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'NodeJS' } })
    fireEvent.submit(getByTestId('tech-form'))

    expect(dispatch).toHaveBeenCalledWith(addTech('NodeJS'))
  })
})
