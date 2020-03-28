import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useCounter() {

  const todos  = useSelector((state:RootState)=> state.todos.todos)

  return todos;
}
  