import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import AddForm from "../../component/add-form/add-form.component";
import { addPostFormHidden } from "../../redux/blog/blog.action";
import "./blog.styles.scss";
function Blog({ hidden, addPostHidden }) {
  const [posts, setPosts] = useState([]);
  const [postPerPage, setPostPerPage] = useState(10);
  useEffect(() => {
    firebase
      .database()
      .ref("/posts")
      .once("value", (snapshot) => {
        setPosts(snapshot.val());
        console.log(snapshot.val());
      });
  }, []);

  return (
    <div>
      <div className="add-form">
        <button onClick={() => addPostHidden()} className="btn-new">
          +
        </button>
        {hidden ? <AddForm /> : null}
      </div>
      <div className="post">
        {posts.length > 0 &&
          posts.map((post) => (
            <div className="container" key={post.id}>
              <h3>{post.title}</h3>
              <span>{post.body}</span>
              <Link to={`blog/post/${post.id}`}>
                <span className="readmore">readmore</span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
const mapStateToProps = ({ post: { hidden } }) => ({
  hidden,
});
const mapDispatchToProps = (dispatch) => ({
  addPostHidden: () => dispatch(addPostFormHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
