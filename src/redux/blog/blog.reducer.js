import BlogTypes from "./blog.types";

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
    //Fetch Collections
    case BlogTypes.FETCH_COLLECTIONS_START:
      return { state, isLoading: true };
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
  }
};
export default postReducer;
