import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';

function Posts() {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((node) => {
    return (
      <article key={node.id}>
        <h3>{node.title}</h3>
        <p>{node.content.substring(0, 100)}</p>
        <p className='postCredit'>
          <PostAuthor userId={node.userId} />
        </p>
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
