import {combineReducers} from 'redux';
import posts from './posts';
import users from './users';
export const rootReducer = combineReducers({
    posts,
    users
});
