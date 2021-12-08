import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
        Load
      </button>
    );
  }
  return posts.map(post => <Post post={post} key={post.id} />);
};
