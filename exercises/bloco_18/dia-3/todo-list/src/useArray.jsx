import React from 'react'

const useArray = () => {
  const [todos, setTodos] = React.useState([]);
  
  function addTodo(text) {
    setTodos([...todos, text]);
  };

  function removeTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return {todos, addTodo, removeTodo};
}

export default useArray
