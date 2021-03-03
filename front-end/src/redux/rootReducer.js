import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import itemsReducer from './items/itemsReducer';
import signupReducer from './signup/signupReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    items: itemsReducer,
});

export default rootReducer;