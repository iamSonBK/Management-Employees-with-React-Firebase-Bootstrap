import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editPost } from "../../redux/blog/blog.action";
import "./edit-form.styles.scss";
const EditForm = ({ id, post, editPost }) => {
  const [updatePost, setUpdateNewPost] = useState({
    id: id,
    title: "",
    body: "",
  });
  useEffect(() => {
    setUpdateNewPost({
      ...updatePost,
      title: post.title,
      body: post.body,
    });
  }, [post]);

  const { title, body } = updatePost;

  const handleSubmit = (event) => {
    event.preventDefault();
    editPost(updatePost);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateNewPost({ ...updatePost, [name]: value });
  };
  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <br />
        <label>Body</label>
        <input type="text" name="body" value={body} onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  editPost: (updatePost) => dispatch(editPost(updatePost)),
});
export default connect(null, mapDispatchToProps)(EditForm);
