import {combineReducers} from 'redux';
import posts from './posts';
import users from './users';
import auth from './auth';
export const rootReducer = combineReducers({
    posts,
    auth,
    users
});
