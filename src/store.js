import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  getPostsReducer,
  getPostReducer,
  numberOfPagesReducer,
} from "./reducers/postReducers";
import { getTagesReducer } from "./reducers/tagReducers";
const reducers = combineReducers({
  getPostsReducer,
  getTagesReducer,
  getPostReducer,
  numberOfPagesReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
