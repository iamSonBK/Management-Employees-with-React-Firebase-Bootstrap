import React, { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import AddForm from "../../component/add-form/add-form.component";
import {
  addPostFormHidden,
  fetchCollectionsStart,
} from "../../redux/blog/blog.action";

import "./blog.styles.scss";
function Blog({ collections, hidden, addPostHidden, isLoading }) {
  // const [posts, setPosts] = useState(collections);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(20);
  // //Get current post
  // console.log(collections);
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPosts = collections.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);
  // console.log(typeof currentPosts);

  return (
    <div>
      <div className="add-form">
        <button onClick={addPostHidden} className="btn-new">
          +
        </button>
        {hidden ? <AddForm /> : null}
      </div>

      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="post">
          {collections.length > 0 &&
            collections.map((post) => (
              <div className="container" key={post.id}>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
                <Link to={`blog/post/${post.id}/${post.userId}`}>
                  <span className="readmore">readmore</span>
                </Link>
              </div>
            ))}
          <div>
            <button>Prev Page</button>
            <button>Next Page</button>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({ post: { hidden, collections, isLoading } }) => ({
  hidden,
  collections,
  isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  addPostHidden: () => dispatch(addPostFormHidden()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
