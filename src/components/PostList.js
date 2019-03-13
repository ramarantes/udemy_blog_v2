import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.data.map(p => {
            return (<div className="item" key={p.id} >
                <i className="large midle aligned icon user" />
                <div className="content">
                
                    <div className="description">
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </div>
                    <UserHeader userId={p.userId}/>
                </div>
            </div>)
        });
    }

    render() {
        if (!this.props.posts) return <div>loading</div>;
        const list = this.renderList();
        return (<div>{list}</div>)
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}
export default connect(mapStateToProps, { fetchPosts })(PostList);