import { takeLatest, call, put, all } from "redux-saga/effects";
// import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";
import BlogTypes from "./blog.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./blog.action";
//Fetch Data Async
export function* fetchCollectionsAsync() {
  try {
    let data = [];
    var t0 = performance.now();
    yield firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
        return data;
      });
    var t1 = performance.now();
    console.log(t1 - t0);

    yield put(fetchCollectionsSuccess(data));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(BlogTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
export function* blogSagas() {
  yield all([call(fetchCollectionsStart)]);
}
