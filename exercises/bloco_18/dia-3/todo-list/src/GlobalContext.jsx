import React from 'react'
import Context from './Context'
import useArray from './useArray';

const GlobalContext = (props) => {
  const {todos, addTodo} = useArray();
  const provider = {
    todos,
    addTodo,
  };

  return (
    <Context.Provider value={provider}>
      {props.children}
    </Context.Provider>
  )
}

export default GlobalContext
