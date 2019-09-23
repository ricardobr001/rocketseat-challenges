import reducer, { INITIAL_STATE } from '../../../store/modules/techs/reducer'
import * as Techs from '../../../store/modules/techs/action'

describe('Techs reducer', () => {
  it('ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, Techs.addTech('NodeJS'))

    expect(state).toStrictEqual(['NodeJS'])
  })
})
