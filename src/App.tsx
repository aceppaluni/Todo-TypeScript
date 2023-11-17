import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault()
    

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo('')
    }
  }

  console.log(todo) 
  return (
    <div className="App">
      <h1 className='heading'>Taskie</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handelAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;


// When back: 
// fix styling 
// updlaod to github 
// continue learning typescript
// review content from class for understanding
