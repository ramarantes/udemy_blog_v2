import {combineReducers} from 'redux'
import fetchPosts from './postReducer'


export default combineReducers({
    posts: fetchPosts
});