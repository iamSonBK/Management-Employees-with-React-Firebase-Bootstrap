import BlogTypes from "./blog.types";
import { deletePost, editPost, addNewPost } from "./blog.utils";

const INITAL_STATE = {
  hidden: false,
};
const postReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case BlogTypes.ADD_POST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      break;
    case BlogTypes.EDIT_BLOG:
      return {
        ...state,
        post: editPost(action.payload),
      };
      break;
    case BlogTypes.DELETE_BLOG:
      return {
        ...state,
        post: deletePost(action.payload),
      };
      break;
    case BlogTypes.ADD_BLOG:
      return {
        ...state,
        post: addNewPost(action.payload),
      };
      break;
    default:
      return state;
      break;
  }
};
export default postReducer;
