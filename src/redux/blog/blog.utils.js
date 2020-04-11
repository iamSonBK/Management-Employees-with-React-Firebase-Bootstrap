import firebase from "../../firebase/firebase.utils";
import "firebase/database";

export const editPost = (updatePost) => {
  const id = updatePost.id + 1;
  firebase
    .database()
    .ref("posts/" + id)
    .set({
      id: id + 1,
      userId: 1,
      title: updatePost.title,
      body: updatePost.body,
    });
};

export const deletePost = (post) => {
  const id = post.id - 1;
  firebase
    .database()
    .ref("/posts/" + id)
    .remove();
};
export const addNewPost = (post) => {
  const arr = [];
  let id;
  firebase
    .database()
    .ref("posts")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        arr.push(child.key);
      });

      id = Number(arr[arr.length - 1]) + 1;
      console.log(id);

      firebase
        .database()
        .ref("posts/" + id)
        .set({ id: id + 1, userId: 1, title: post.title, body: post.body });
    });
};
