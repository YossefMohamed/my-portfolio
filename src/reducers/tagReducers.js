export const getTagesReducer = (state = { tages: [] }, action) => {
  switch (action.type) {
    case "GET_TAGES_DONE":
      return { ...state, loading: false, tages: action.payload };
    default:
      return state;
  }
};
