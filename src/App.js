import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoManager from './components/TodoManager';
import TodoBar from './components/TodoBar';
  
const URITodoData = 'https://jsonplaceholder.typicode.com/todos';
const TestAmount = 8;

const App = () => {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(URITodoData).then(
      ({data}) => 
        setTodos(data.splice(0, TestAmount).sort((a, b) => a.completed - b.completed))
      );
  }, [setTodos]);

  return (
    <div className="App">
          <TodoBar setTodos={setTodos} todos={todos}/>
          <TodoManager setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
