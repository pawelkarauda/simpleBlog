import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reducers from "./reducers";
import promise from "redux-promise";

import NewPost from "./components/NewPost";
import PostsIndex from "./components/PostsIndex";
import Post from "./components/Post";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={PostsIndex} />
        <Route exact path="/posts/new" component={NewPost} />
        <Route exact path="/posts/:id" component={Post} />
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
