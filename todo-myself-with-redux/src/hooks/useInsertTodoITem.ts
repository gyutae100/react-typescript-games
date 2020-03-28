import { useDispatch } from 'react-redux';
import { insertTodoItem } from '../modules/todos';
import { useCallback } from 'react';

export default function useInsertTodoItem() {
  
  const dispatch = useDispatch();

  const onInsertTodoItem = useCallback(
    (content: string) => dispatch(insertTodoItem(content)),[dispatch]);

  return {
    onInsertTodoItem
  };
}