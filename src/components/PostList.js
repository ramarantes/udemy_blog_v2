import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render() {
        if(!this.props.posts) return <div>loading</div>;
        const list = this.props.posts.data.map(p => {return (<div key={p.id} >{p.title}</div>)});
        return(<div>{list}</div>)
    }
}

const mapStateToProps = state =>
{
    return {posts : state.posts}
}
export default connect(mapStateToProps,{fetchPosts})(PostList);