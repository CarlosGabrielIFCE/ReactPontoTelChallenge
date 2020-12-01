import { FETCH_LAUNCHES_SUCCESS, FETCH_LAUNCHES_FAILURE, FETCHING_LAUNCHES } from '../../constants';
import axios from 'axios';

function getLaunches() {
    return {
        type: FETCHING_LAUNCHES
    }
}

function getLaunchesSuccess(data) {
    return {
        type: FETCH_LAUNCHES_SUCCESS,
        data
    }
}

function getLaunchesError(err) {
    return {
        type: FETCH_LAUNCHES_FAILURE,
        err
    }
}

export function fetchLaunches(page) {
    console.log('oi')
    return (dispatch) => {
        const data = {
            query: {},
            options: {
                limit: 6,
                page: page
            }
        }
        dispatch(getLaunches())
        axios.post('https://api.spacexdata.com/v4/launches/query', data)
            .then(function (response) {
                return (dispatch(getLaunchesSuccess(response.data.docs)))
            })
            .catch(err => dispatch(getLaunchesError(err)))
    }
}