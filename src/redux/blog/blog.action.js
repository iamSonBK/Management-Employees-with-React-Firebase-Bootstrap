import BlogTypes from "./blog.types";

export const addPostFormHidden = () => ({
  type: BlogTypes.ADD_POST_HIDDEN,
});
export const deletePost = (post) => ({
  type: BlogTypes.DELETE_BLOG,
  payload: post,
});
//Add New Post
export const addNewPostStart = (newPost) => ({
  type: BlogTypes.ADD_NEW_POST_START,
  payload: newPost,
});
export const addNewPostSucces = (post) => ({
  type: BlogTypes.ADD_NEW_POST_SUCCESS,
  payload: post,
});
export const addNewPostFailure = (errorMessage) => ({
  type: BlogTypes.ADD_NEW_POST_FAILURE,
  payload: errorMessage,
});
//Edit Post
export const editPostStart = (updatePost) => ({
  type: BlogTypes.EDIT_POST_START,
  payload: updatePost,
});
export const editPostSuccess = (updatedPost) => ({
  type: BlogTypes.EDIT_POST_SUCCESS,
  payload: updatedPost,
});
export const editPostFailure = (errorMessage) => ({
  type: BlogTypes.EDIT_POST_FAILURE,
  payload: errorMessage,
});
//Delete Post
export const deletePostStart = (postId) => ({
  type: BlogTypes.DELETE_POST_START,
  payload: postId,
});
export const deletePostSuccess = () => ({
  type: BlogTypes.DELETE_POST_SUCCESS,
});
export const deletePostFailure = (errorMessage) => ({
  type: BlogTypes.DELETE_POST_FAILURE,
  payload: errorMessage,
});
//Fetch Collection
export const fetchCollectionsStart = () => ({
  type: BlogTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionMap) => ({
  type: BlogTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: BlogTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
