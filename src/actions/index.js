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

//memoized version 
// export const fetchUser = id => dispatch => _fetchUser(id,dispatch);  

// const _fetchUser = _.memoize(async (id,dispatch) => {
//     var result = await API.get(`/users/${id}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:result.data 
//     })
// })

export const fetchUser = id => async dispatch => {
    var result = await API.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:result.data 
    })
}

export const fetchPostAndUsers = id => async (dispatch,state) => {
    await dispatch(fetchPosts());

    let data = state().posts.data;

    // let userIds = data.map(p => p.userId); //work as well
    let userIds = _.map(data,'userId');
    userIds = _.uniq(userIds);

    //request individual users
    userIds.map(p => dispatch(fetchUser(p)));
}