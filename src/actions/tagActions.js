import axios from "axios";
// import { addImage } from "./userActions";
export const getTages = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/tag");
    console.log(data);
    dispatch({
      type: "GET_TAGES_DONE",
      payload: data.tages,
    });
  } catch (error) {}
};
