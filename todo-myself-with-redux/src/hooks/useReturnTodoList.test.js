import React from 'react';
import useReturnTodoList from './useReturnTodoList';
import { renderHook } from '@testing-library/react-hooks';



import { Provider } from 'react-redux';
import reducers from '../modules/todos/reducer';
import { createStore } from 'redux'

// 스토어 생성
const store = createStore(reducers);


describe('ccccccccccccccccccccccc ', () => {
  it('should describe a closed modal by default', () => {
    const { result } = renderHook(() => useReturnTodoList(), {
      wrapper: ({ children }) => <Provider store={store} >{children}</Provider>
    }); 
  });
});