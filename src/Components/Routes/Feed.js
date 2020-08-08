import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import Helmet from "rl-react-helmet";

import Loader from "../Loader";
import Post from "../Post";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  min-height: 70vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Extragram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            caption={post.caption}
            location={post.location}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};
