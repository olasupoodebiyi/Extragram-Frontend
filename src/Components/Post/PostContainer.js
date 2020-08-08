import React, { useState } from "react";
import { PropTypes } from "prop-types";
import useInput from "../../Hooks/useInput";

import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
}) => {
  return <PostPresenter />;
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  files: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  isLiked: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default PostContainer;
