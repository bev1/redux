const initialState = {
    posts: [],
    isFetching: false
  }
  
  export function postsReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_POSTS_REQUEST':
        return { ...state, posts: action.payload, isFetching: true }
      case 'GET_POSTS_SUCCESS':
        return { ...state, posts: action.payload, isFetching: false }
  
      default:
        return state
    }
  }