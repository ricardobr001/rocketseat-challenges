import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'
import api from '../../../services/api'

import {
  getTechsSuccess,
  getTechsFailure
} from '../../../store/modules/techs/action'
import { getTechs } from '../../../store/modules/techs/sagas'

const apiMock = new MockAdapter(api)

describe('techs saga', () => {
  it('should be able to fetch techs', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('techs').reply(200, ['NodeJS'])
    await runSaga({ dispatch }, getTechs).toPromise()

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['NodeJS']))
  })

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('techs').reply(500)
    await runSaga({ dispatch }, getTechs).toPromise()

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure())
  })
})
