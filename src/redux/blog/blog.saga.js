import { takeLatest, call, put, all } from "redux-saga/effects";
// import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";
import BlogTypes from "./blog.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  addNewPostSucces,
  addNewPostFailure,
  editPostSuccess,
  editPostFailure,
  deletePostSuccess,
  deletePostFailure,
} from "./blog.action";
//Fetch Data Async
export function* fetchCollectionsAsync() {
  try {
    const response = yield firebase
      .database()
      .ref("posts")
      .once("value", (snap) => {
        console.log(snap.val());
        return snap.val();
      });

    const data = [...response.val()];

    yield put(fetchCollectionsSuccess(data.filter((d) => d !== undefined)));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
//Add New Post Async
export function* fetchAddNewPostAsync(post) {
  try {
    const arr = [];
    let id;
    const userId = Math.floor(Math.random() * 5);
    const oldPost = yield firebase
      .database()
      .ref("posts")
      .once("value", (snapshot) => {
        snapshot.forEach((child) => {
          arr.push(child.key);
        });
        id = Number(arr[arr.length - 1]) + 1;
        firebase
          .database()
          .ref("posts/" + id)
          .set({
            id: id + 1,
            userId: userId,
            title: post.payload.title,
            body: post.payload.body,
          });
        return snapshot.val();
      });
    const newPost = {
      id: id + 1,
      title: post.payload.title,
      body: post.payload.body,
      userId: userId,
    };
    const filteredPost = oldPost.val().filter((data) => data !== undefined);
    filteredPost.push(newPost);
    yield put(addNewPostSucces(filteredPost));
  } catch (error) {
    yield put(addNewPostFailure(error.message));
  }
}
//Edit Post Async
export function* fetchEditPostAsync(post) {
  try {
    const id = Number(post.payload.id) + 1;
    yield firebase
      .database()
      .ref("posts/" + id)
      .update({
        id: id,
        title: post.payload.title,
        body: post.payload.body,
        userId: post.payload.userId,
      });
    const updatedPost = yield firebase
      .database()
      .ref("posts")
      .once("value", (snap) => {
        return snap.val();
      });
    const data = [...updatedPost.val()];
    yield put(editPostSuccess(data.filter((d) => d !== undefined)));
  } catch (error) {
    yield put(editPostFailure(error.message));
  }
}
//Delete Async
export function* fetchDeletePostAsync(postId) {
  // const id = post.payload.id;
  console.log(postId);

  try {
    yield firebase
      .database()
      .ref("/posts/" + postId.payload.id)
      .remove();
    yield put(deletePostSuccess());
  } catch (error) {
    yield put(deletePostFailure(error.message));
  }
}
//Call Function
function* fetchAddNewPostStart() {
  yield takeLatest(BlogTypes.ADD_NEW_POST_START, fetchAddNewPostAsync);
}
function* fetchEditPostStart() {
  yield takeLatest(BlogTypes.EDIT_POST_START, fetchEditPostAsync);
}
function* fetchDeletePostStart() {
  yield takeLatest(BlogTypes.DELETE_POST_START, fetchDeletePostAsync);
}

function* fetchCollectionsStart() {
  yield takeLatest(BlogTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
export function* blogSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(fetchAddNewPostStart),
    call(fetchEditPostStart),
    call(fetchDeletePostStart),
  ]);
}
