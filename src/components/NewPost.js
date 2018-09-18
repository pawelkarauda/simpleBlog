import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addPost } from "../actions";

class NewPost extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label> {field.label} </label>
        <input type="text" {...field.input} className="form-control" />
        <small className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </small>
      </div>
    );
  }

  onSubmit(values) {
    this.props.addPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h2>New post</h2>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" component={this.renderField} label="Title" />
          <Field
            name="categories"
            component={this.renderField}
            label="Categories"
          />
          <Field name="content" component={this.renderField} label="Content" />
          <button type="submit" className="btn btn-primary">
            Add post
          </button>
        </form>

        <Link to="/" className="btn btn-warning">
          Go back
        </Link>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter the content!!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { addPost }
  )(NewPost)
);
