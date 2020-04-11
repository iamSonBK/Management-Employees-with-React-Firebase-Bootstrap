import { createSelector } from "reselect";

const selectPost = (state) => state.post;

export const addPostHidden = createSelector(
  [selectPost],
  (post) => post.hidden
);
