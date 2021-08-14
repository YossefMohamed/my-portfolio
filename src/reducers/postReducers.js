// export const messageReducers = (
//     state = { type: "alert", message: "" },
//     action
//   ) => {
//     switch (action.type) {
//       case "ADD_MESSAGE":
//         return action.payload;
//       default:
//         return state;
//     }
//   };
export const numberOfPagesReducer = (state = { pages: 0 }, action) => {
  switch (action.type) {
    case "GET_PAGES_DONE":
      return { ...state, pages: action.payload };
    default:
      return state;
  }
};
export const getPostsReducer = (
  state = { loading: false, posts: [] },
  action
) => {
  switch (action.type) {
    case "GET_POSTS_REQUEST":
      return { ...state, loading: true };
    case "GET_POSTS_DONE":
      return { ...state, loading: false, posts: action.payload };
    default:
      return state;
  }
};
export const getPostReducer = (
  state = { loading: false, post: {} },
  action
) => {
  switch (action.type) {
    case "GET_POST_REQUEST":
      return { ...state, loading: true };
    case "GET_POST_DONE":
      return { ...state, loading: false, post: action.payload };
    default:
      return state;
  }
};
