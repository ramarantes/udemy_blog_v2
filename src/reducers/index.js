import {combineReducers} from 'redux'
import fetchPosts from './postReducer'
import userReducer from './userReducer'

export default combineReducers({
    posts: fetchPosts,
    users: userReducer
});