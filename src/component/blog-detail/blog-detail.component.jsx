import React from "react";
import { connect } from "react-redux";
import "./blog-detail.styles.scss";
import {
  deletePostStart,
  addPostFormHidden,
} from "../../redux/blog/blog.action";
import EditForm from "../edit-form/edit-form.component";
const BlogDetail = ({
  match,
  deletePost,
  history,
  hidden,
  collections,
  addPostHidden,
}) => {
  const id = match.params.id;
  const userId = match.params.userId;
  const post = collections[id - 1];
  return (
    <div>
      {post ? (
        <div className="blog-detail" key={id}>
          <h1>Blog Detail</h1>
          <h3>{post.title ? post.title : null}</h3>
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
              <EditForm id={id} userId={userId} post={post}></EditForm>
            </div>
          ) : (
            <div>Loading....</div>
          )}
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = ({ post: { hidden, collections } }) => ({
  hidden,
  collections,
});
const mapDispatchToProps = (dispatch) => ({
  deletePost: (post) => dispatch(deletePostStart(post)),
  addPostHidden: () => dispatch(addPostFormHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
