import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Posts/Posts";
import "./Blog.css";
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from '../NewPost/NewPost'

const AsyncComponent = asyncComponent(() => { 
  return import('../NewPost/NewPost')
})

class Blog extends Component {
  state = {
    auth: true
  }
  
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> <NavLink to="/posts" activeClassName="active">Posts</NavLink> </li>
              <li> <NavLink to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post</NavLink> </li>
            </ul>
          </nav>
        </header>
        <Switch>
          { this.state.auth ? <Route path="/new-post" component={AsyncComponent}/> : null }
          <Route path="/posts" component={Posts}/>
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts"></Redirect> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
