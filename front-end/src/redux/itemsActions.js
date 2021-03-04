import { axiosWithAuth } from '../utils/axiosWithAuth';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_ITEM = 'ADD_ITEM';

export const fetchItems = () => {
    return dispatch => {
        dispatch({ type: FETCH_START });
        axiosWithAuth()
            .get('/tech_items')
            .then((res) => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_FAILURE })
            })
    }
}