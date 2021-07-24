import React from 'react'
// import context from './Context';
import useArray from './useArray';

const InputTodos = () => {
  const [inputTodo, setInputTodo] = React.useState('');
  const { addTodo, todos, removeTodo } = useArray();

  function setTodo(){
    addTodo(inputTodo);
    setInputTodo('');
  }

  return (
    <div>
      <label>
        <input
          onChange={e => setInputTodo(e.target.value)}
          value={inputTodo}
          type="text"
          placeholder="What needs to be done?"
        />
        <button onClick={setTodo} type="button">Add</button>
      </label>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} onClick={() => removeTodo(i)}>
            {todo}
          </li>))}
      </ul>
    </div>
  )
}

export default InputTodos
