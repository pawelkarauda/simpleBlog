import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const ADD_POST = "add_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";

const baseURL = "http://reduxblog.herokuapp.com";
const API_KEY = "?key=rocketscience";

export function fetchPosts() {
  const request = axios.get(`${baseURL}/api/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function addPost(values, callback) {
  const request = axios
    .post(`${baseURL}/api/posts${API_KEY}`, values)
    .then(() => {
      callback();
    });

  return {
    type: ADD_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${baseURL}/api/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${baseURL}/api/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
