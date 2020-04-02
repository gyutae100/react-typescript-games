import React from 'react';
import useInsertTodoITem from './useInsertTodoITem';
import { renderHook } from '@testing-library/react-hooks';



import { Provider } from 'react-redux';
import reducers from '../modules/todos/reducer';
import { createStore } from 'redux'

// 스토어 생성
const store = createStore(reducers);


describe('The useModalManagement hook', () => {
  it('should describe a closed modal by default', () => {
    const { result } = renderHook(() => useInsertTodoITem(), {
      wrapper: ({ children }) => <Provider store={store} >{children}</Provider>
    });

    console.log(result.current.onInsertTodoItem(3))
    console.log(store.getState().todos);
 
  });
});