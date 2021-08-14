import axios from "axios";

export const getPosts = (page, tag) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_POSTS_REQUEST",
    });
    console.log(tag);
    if (tag !== "all") {
      var { data } = await axios.get("/api/post/tag/" + tag);
    } else {
      var { data } = await axios.get("/api/post/page/" + page);
    }

    dispatch({
      type: "GET_POSTS_DONE",
      payload: data.posts,
    });
  } catch (error) {}
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_POST_REQUEST",
    });
    const { data } = await axios.get("/api/post/" + id);
    dispatch({
      type: "GET_POST_DONE",
      payload: data.post,
    });
  } catch (error) {}
};

export const NumberOfPages = () => async (dispatch) => {
  const { data } = await axios.get("/api/post/pages");
  dispatch({
    type: "GET_PAGES_DONE",
    payload: data.pages,
  });
};
