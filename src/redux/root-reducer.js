import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "./blog/blog.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["post"],
};
const rootReducer = combineReducers({
  post: postReducer,
});
export default persistReducer(persistConfig, rootReducer);
