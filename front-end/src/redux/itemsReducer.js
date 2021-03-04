import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from './itemsActions'
const initialState = {
    items: [],
    isLoading: false,
    error: ''
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                isLoading: true,
            })
        case (FETCH_SUCCESS):
            return ({
                ...state,
                items: action.payload,
                isLoading: false,
                error: '',
            })
        case (FETCH_FAILURE):
            return ({
                ...state,
                error: action.payload,
                isLoading: false,
            })
        default:
            return state;
    }
}

export default itemsReducer;