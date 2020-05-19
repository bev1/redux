import axios from 'axios';
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export function getPosts(posts) {
    return dispatch => {
      dispatch({
        type: GET_POSTS_REQUEST,
        payload: posts
      })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
          dispatch({
            type: GET_POSTS_SUCCESS,
            payload: [...posts.data]
          })
        })
    }
  }