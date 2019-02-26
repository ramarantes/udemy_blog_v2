import API from '../API'

export const fetchPosts = () => 
    async dispatch => {
        var result = await API.get('/POSTS');

        dispatch( {
            type: 'FETCH_POSTS',
            payload:result
        });
    };


