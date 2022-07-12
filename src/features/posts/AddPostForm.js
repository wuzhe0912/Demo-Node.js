import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      // initialize form
      setTitle('');
      setContent('');
    }
  };

  const canSave = Boolean(title && content && userId);

  const usersOptions = users.map((node) => {
    return (
      <option key={node.id} value={node.id}>
        {node.name}
      </option>
    );
  });

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
      <label htmlFor='postAuthor'>Author : </label>
      <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
        <option value=''></option>
        {usersOptions}
      </select>
      <label htmlFor='postContent'>Content : </label>
      <input
        type='text'
        id='postContent'
        name='postContent'
        value={content}
        onChange={onContentChanged}
      />
      <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
        Add Post
      </button>
    </section>
  );
};

export default AddPostForm;
