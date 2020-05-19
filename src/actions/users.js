import axios from 'axios';
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export function getUsers(users) {
    return dispatch => {
      dispatch({
        type: GET_USERS_REQUEST,
        payload: users
      })
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(users => {
          dispatch({
            type: GET_USERS_SUCCESS,
            payload: [...users.data]
          })
        })
    }
  }