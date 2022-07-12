import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      // initialize form
      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <label htmlFor='postTitle'>Post Title : </label>
      <input
        type='text'
        id='postTitle'
        name='postTitle'
        value={title}
        onChange={onTitleChanged}
      />
      <label htmlFor='postContent'>Content : </label>
      <input
        type='text'
        id='postContent'
        name='postContent'
        value={content}
        onChange={onContentChanged}
      />
      <button type='button' onClick={onSavePostClicked}>
        Add Post
      </button>
    </section>
  );
};

export default AddPostForm;
