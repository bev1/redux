const initialState = {
    users: [],
    isFetching: false
  }
  
  export function usersReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_USERS_REQUEST':
        return { ...state, users: action.payload, isFetching: true }
      case 'GET_USERS_SUCCESS':
        return { ...state, users: action.payload, isFetching: false }
  
      default:
        return state
    }
  }