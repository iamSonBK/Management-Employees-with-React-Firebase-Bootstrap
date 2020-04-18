import { call, all } from "redux-saga/effects";
import { blogSagas } from "./blog/blog.saga";
export default function* rootSagas() {
  yield all([call(blogSagas)]);
}
