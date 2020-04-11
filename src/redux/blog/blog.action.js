import BlogTypes from "./blog.types";

export const addPostFormHidden = () => ({
  type: BlogTypes.ADD_POST_HIDDEN,
});
export const editPost = (updatePost) => ({
  type: BlogTypes.EDIT_BLOG,
  payload: updatePost,
});
export const deletePost = (post) => ({
  type: BlogTypes.DELETE_BLOG,
  payload: post,
});
export const addNewPost = (post) => ({
  type: BlogTypes.ADD_BLOG,
  payload: post,
});
