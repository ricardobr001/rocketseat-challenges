import { runSaga } from 'redux-saga'
import { getTechsSuccess } from '../../../store/modules/techs/action'
import { getTechs } from '../../../store/modules/techs/sagas'

describe('techs saga', () => {
  it('should be able to fetch techs', async () => {
    const dispatch = jest.fn()

    await runSaga({ dispatch }, getTechs).toPromise()

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['NodeJS']))
  })
})
