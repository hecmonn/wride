import {combineReducers} from 'redux';
import posts from './posts';
import users from './users';
import auth from './auth';
import following from './following';
import cta from './cta';
import modal from './modal';
export const rootReducer = combineReducers({
    posts,
    auth,
    users,
    following,
    cta,
    modal
});
