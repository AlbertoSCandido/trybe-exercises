import React from 'react'

const useArray = () => {
  const [todos, setTodos] = React.useState([]);
  
  function addTodo(text) {
    setTodos([...todos, text]);
  };

  return {todos, addTodo};
}

export default useArray
