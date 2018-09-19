import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class Post extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <Link to="/"> Go back </Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn-btn-danger pull-xs-right"
        >
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categiores}</h6>
        <p>{post.content}</p>
        <Link to="/"> Delete </Link>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  {
    fetchPost,
    deletePost
  }
)(Post);
