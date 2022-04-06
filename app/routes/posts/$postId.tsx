import React, { FC } from 'react';
import { useParams } from '@remix-run/react';

const Post: FC = () => {

  const { postId } = useParams();
  console.log(postId);
  return (
    <div>

      <h1>Post {postId}</h1>
    </div>
  );
};

export default Post;
