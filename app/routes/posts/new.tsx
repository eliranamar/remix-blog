import React, { FC } from 'react';
import { Link } from '@remix-run/react';

const NewPost: FC = () => {

  return (
    <div>
      <div className="page-header">
        <h1>NewPost</h1>
        <Link to={`/posts`} className="btn btn-reverse">Back</Link>
      </div>

      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Content</label>
            <textarea name="body" id="body" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
