import React from 'react'
import { connect } from 'react-redux'
import { fetchPostAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostAndUsers();
    }

    renderList() {
        return this.props.posts.data.map(p => {
            return (<div className="item" key={p.id} >
                <div className="ui divider"></div>
                <i className="ui large midle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </div>
                    <UserHeader userId={p.userId} />
                </div>
            </div>)
        });
    }

    render() {
        if (!this.props.posts) return <div>loading</div>;
        const list = this.renderList();
        return (<div className="ui list">{list}</div>)
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}
export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);