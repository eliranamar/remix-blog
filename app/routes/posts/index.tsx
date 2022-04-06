import React, { FC } from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';

interface Post {
  id: string;
  title: string;
  body: string;
}

export const loader: LoaderFunction = () => {

  console.log('loader');
  const fakeData: {posts: Post[], error?: Error} = {
    posts: [
      {
        id:    '87b62e44-a389-41c9-8289-1457bfc470d5',
        title: 'Bacon',
        body:  'Bacon ipsum dolor amet beef turkey biltong corned beef, spare ribs fatback shankle. Salami spare ribs shank, kielbasa shankle chicken ground round flank swine meatloaf filet mignon boudin. Turducken chicken kevin ground round spare ribs. Ball tip biltong t-bone turducken.',
      },
      {
        id:    '9824530b-7562-4f1e-be36-4718d400b0a6',
        title: 'Chicken',
        body:  'Boudin salami bacon meatball short ribs, tail flank pork chop t-bone meatloaf rump jowl sausage. Chuck frankfurter landjaeger jerky sausage tail ham. Boudin kielbasa ribeye pork capicola. Chuck venison tri-tip cow swine.',
      },
      {
        id:    '3e4ce450-7d7b-42f2-a236-e24133462b4d',
        title: 'Ribs',
        body:  'Meatloaf fatback cupim pancetta chuck chicken shoulder beef ribs boudin frankfurter turducken brisket burgdoggen salami short loin. Tri-tip pork belly turducken jowl, pig tongue sausage burgdoggen. Bacon fatback cupim leberkas ribeye frankfurter hamburger ground round ham pig pastrami cow. Jowl pig bresaola, pork belly tongue biltong meatloaf swine.',
      },
    ],
    error: undefined,
  };

  return fakeData;
};

const PostItems: FC = () => {

  const { posts } = useLoaderData<{posts: Post[]}>();

  return (
    <>
      <div className="page-header">
        <h1>Latest posts</h1>

        <Link to={`/posts/new`} className="btn">New post</Link>
      </div>

      <ul className="posts-list">

        {(posts || []).map(({ id, title }) => {
          return (
            <li key={`PostItem-${id}`}>
              <Link to={`/posts/${id}`} className="logo">{title}</Link>
            </li>
          );
        })}

      </ul>
    </>
  );
};

export default PostItems;
