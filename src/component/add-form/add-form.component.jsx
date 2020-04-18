import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewPostStart } from "../../redux/blog/blog.action";
import "./add-form.styles.scss";
const AddForm = ({ addNewPost }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  const { title, body } = newPost;
  const handleSubmit = async (event) => {
    event.preventDefault();

    addNewPost(newPost);
    console.log(newPost);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewPost({ ...newPost, [name]: value });
  };
  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <label>Body</label>
        <input type="text" name="body" value={body} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (newPost) => dispatch(addNewPostStart(newPost)),
});
export default connect(null, mapDispatchToProps)(AddForm);
