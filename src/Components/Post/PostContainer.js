import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import useInput from "../../Hooks/useInput";

import PostPresenter from "./PostPresenter";
import { ADD_COMMENT, TOGGLE_LIKE } from "./PostQueries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  caption,
  location,
}) => {
  const [isLikedState, setIsLiked] = useState(true);
  const [likeCountState, setlikeCount] = useState(10);
  const [currentItem, setCurrentItem] = useState(0);

  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });

  const comment = useInput("");

  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value },
  });

  //   console.log("Files: ", files.length);

  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };

  useEffect(() => {
    slide();
  }, [currentItem]);

  //   console.log(currentItem);
  const toggleLike = async () => {
    if (isLikedState === true) {
      setIsLiked(false);
      setlikeCount(likeCountState - 1);
    } else {
      setIsLiked(true);
      setlikeCount(likeCountState + 1);
    }
    try {
      await toggleLikeMutation();
    } catch (error) {
      console.log(error);
      toast.error("Cannot complete request. Please try again");
      setIsLiked(!isLikedState);
    }
  };

  const onKeyUp = (event) => {
    event.preventDefault();
    const { keyCode } = event;
    if (keyCode === 13) {
      addCommentMutation();
      comment.setValue("");
    }
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      caption={caption}
      location={location}
      likeCount={likeCountState}
      isLiked={isLikedState}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setlikeCount={setlikeCount}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyUp={onKeyUp}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,

  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,

  likeCount: PropTypes.number.isRequired,

  isLiked: PropTypes.bool.isRequired,

  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,

  caption: PropTypes.string.isRequired,
  location: PropTypes.string,

  createdAt: PropTypes.string.isRequired,
};

export default PostContainer;
