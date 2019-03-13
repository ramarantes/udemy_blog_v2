import API from '../API'

export const fetchPosts = () => 
    async dispatch => {
        var result = await API.get('/POSTS');

        dispatch( {
            type: 'FETCH_POSTS',
            payload:result
        });
    };

export const fetchUser = id => async dispatch => {
    var result = await API.get(`/user/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:result.data 
    })
}
