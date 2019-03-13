import API from '../API'
import _ from 'lodash'

export const fetchPosts = () => 
    async dispatch => {
        var result = await API.get('/POSTS');

        dispatch( {
            type: 'FETCH_POSTS',
            payload:result
        });
    };

export const fetchUser = id => dispatch => _fetchUser(id,dispatch);  

const _fetchUser = _.memoize(async (id,dispatch) => {
    var result = await API.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:result.data 
    })
})