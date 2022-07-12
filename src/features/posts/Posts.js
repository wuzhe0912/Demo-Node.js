import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

function Posts() {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((node) => {
    return (
      <article key={node.id}>
        <h3>{node.title}</h3>
        <p>{node.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
}

export default Posts;
