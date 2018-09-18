import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const ADD_POST = "add_post";

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
