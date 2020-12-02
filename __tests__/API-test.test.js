import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import { FETCHING_LAUNCHES } from '../src/common/commonConstants'
import { fetchLaunches } from '../src/store/actions/actions'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mock = new MockAdapter(axios)

describe('getLaunches actions', () => {
    let store

    beforeEach(() => {
        store = mockStore({
            launches: [],
            isFetching: false,
            error: false
        })
    });


    it('creates FETCHING_LAUNCHES after successfuly fetching launches', () => {
        mock.onPost('/launches/query').reply(200, {
            response: getLaunchesMock,
        })

        const expectedActions = [
            { type: FETCHING_LAUNCHES },
        ];

        store.dispatch(fetchLaunches(1))

        expect(store.getActions()).toEqual(expectedActions)
    });
});