import { FETCH_LAUNCHES_SUCCESS, FETCH_LAUNCHES_FAILURE, FETCHING_LAUNCHES } from '../../constants';

const initialState = {
    launches: [],
    isFetching: false,
    error: false
}

export default function launchesReducer(state = initialState, action) {

    switch (action.type) {
        case FETCHING_LAUNCHES:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_LAUNCHES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                launches: action.data
            }
        case FETCH_LAUNCHES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}