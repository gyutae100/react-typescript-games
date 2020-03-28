import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <CounterContainer />
      <Counter2 />
      <Counter3 />

      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
