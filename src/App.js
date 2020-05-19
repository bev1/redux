import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import Home from './components/Home';
import Posts from './containers/Posts';
import Users from './containers/Users';
import { getPosts } from './actions/posts';
import { getUsers } from './actions/users';

class App extends React.Component {
  render() {
    const { users, posts, getPostsAction, getUsersAction } = this.props
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/posts">
              <Posts posts={posts} getPosts={getPostsAction} />
            </Route>
            <Route path="/users">
              <Users users={users} getUsers={getUsersAction}/>
            </Route>
            <Route path="/">
              <Home logo={logo}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users,
    posts: store.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPostsAction: posts => dispatch(getPosts(posts)),
    getUsersAction: users => dispatch(getUsers(users))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)