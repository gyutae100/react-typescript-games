import { useDispatch } from 'react-redux';
import { deleteTodoITem,  toggleTodoITem} from '../modules/todos';
import { useCallback } from 'react';

export default function useTodoActions() {
  
  const dispatch = useDispatch();

  const onDeleteTodoITem = useCallback(
    (id: number) => dispatch(deleteTodoITem(id)),[dispatch]);

   const onToggleTodoITem = useCallback(
    (id: number) => dispatch(toggleTodoITem(id)),[dispatch]);
    

  return {
    onDeleteTodoITem,
    onToggleTodoITem
  };
}