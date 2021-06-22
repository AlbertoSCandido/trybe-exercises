import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedTodo: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.remTodo = this.remTodo.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }
  
  changeSelected(selectedTodo) {
    this.setState({
      selectedTodo,
    })
  }

  remTodo() {
    const { listTodo, selectedTodo } = this.state;
    const filteredList = listTodo.filter(todo => todo !== selectedTodo);
    this.setState({
      listTodo: filteredList,
      selectedTodo: '',
    })
  }

  render() {
    const { listTodo, selectedTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={this.addTodo} remTodo={this.remTodo} listTodo={listTodo} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} changeSelected={this.changeSelected} selectedTodo={selectedTodo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
