import BlogTypes from "./blog.types";
import { deletePost, editPost } from "./blog.utils";

const INITAL_STATE = {
  hidden: false,
  collections: [],
  isLoading: true,
};
const postReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case BlogTypes.ADD_POST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      break;
    case BlogTypes.DELETE_BLOG:
      return {
        ...state,
        post: deletePost(action.payload),
      };
      break;
    //Add New Post
    case BlogTypes.ADD_NEW_POST_START:
      return {
        post: action.payload,
        isLoading: true,
      };
      break;
    case BlogTypes.ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        hidden: false,
        collections: action.payload,
        isLoading: false,
      };
      break;
    case BlogTypes.ADD_NEW_POST_FAILURE:
      return {
        state,
        isLoading: false,
        errorMessage: action.payload,
      };
      break;
    //Edit Post
    case BlogTypes.EDIT_POST_START:
      return {
        ...state,
        hidden: false,
      };
      break;
    case BlogTypes.EDIT_POST_SUCCESS:
      return {
        ...state,
        hidden: false,
        collections: action.payload,
        isLoading: false,
      };
      break;
    case BlogTypes.EDIT_POST_FAILURE:
      return {
        state,
        isLoading: false,
        errorMessage: action.payload,
      };
      break;
    //Delete Post
    case BlogTypes.DELETE_POST_START:
      return {
        ...state,
        hidden: false,
      };
      break;
    case BlogTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        hidden: false,
      };
      break;
    case BlogTypes.DELETE_POST_FAILURE:
      return {
        state,
        isLoading: false,
        errorMessage: action.payload,
      };
      break;
    //Fetch Collections
    case BlogTypes.FETCH_COLLECTIONS_START:
      return { state, isLoading: true };
      break;
    case BlogTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
      };
    case BlogTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
      break;
  }
};
export default postReducer;
