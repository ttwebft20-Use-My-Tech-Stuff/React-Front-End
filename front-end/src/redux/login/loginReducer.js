import { LOGIN } from './loginTypes';

const initialState = {

}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {

            }
        default:
            return state;
    }
}

export default loginReducer;