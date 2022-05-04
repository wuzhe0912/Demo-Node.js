import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state);
  console.log(1, count);
  return <div>Counter</div>;
}

export default Counter;
