import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/posts/Posts';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className='App'>
      <Counter />
      <hr />
      <AddPostForm />
      <Posts />
    </main>
  );
}

export default App;
