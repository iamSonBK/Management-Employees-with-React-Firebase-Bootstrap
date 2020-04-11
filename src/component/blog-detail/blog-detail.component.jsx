import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./blog-detail.styles.scss";
import firebase from "../../firebase/firebase.utils";
import {
  editPost,
  deletePost,
  addPostFormHidden,
} from "../../redux/blog/blog.action";
import EditForm from "../edit-form/edit-form.component";
const BlogDetail = ({
  match,
  editPost,
  deletePost,
  history,
  hidden,
  addPostHidden,
}) => {
  const [post, setPost] = useState([]);
  const id = match.params.id;

  useEffect(() => {
    firebase
      .database()
      .ref("/posts/" + id)
      .once("value", (snapshot) => setPost(snapshot.val()));
  }, []);

  return (
    <div className="blog-detail" key={id}>
      <h1>Blog Detail</h1>
      <h3>{post.title}</h3>
      <span>{post.body}</span>
      <br />
      <button
        className="btn-delete"
        onClick={() => {
          history.push("/blog");
          deletePost(post);
        }}
      >
        Delete
      </button>
      <button className="btn-edit" onClick={addPostHidden}>
        Edit
      </button>
      {hidden ? (
        <div className="edit-panel">
          <h2>Edit Post</h2>
          <EditForm id={id} post={post} editPost={editPost}></EditForm>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = ({ post: { hidden } }) => ({
  hidden,
});
const mapDispatchToProps = (dispatch) => ({
  editPost: (post) => dispatch(editPost(post)),
  deletePost: (post) => dispatch(deletePost(post)),
  addPostHidden: () => dispatch(addPostFormHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
