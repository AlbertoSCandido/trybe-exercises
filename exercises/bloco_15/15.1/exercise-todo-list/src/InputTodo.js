import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' })
    callback(value)
  }

  render() {
    const { addTodo, listTodo, remTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => this.addItem(textTodo, addTodo)} />
        <input 
        id="btnRemo" 
        type="button" 
        data-testid="id-remove"
        value="Remover"
        onClick={ remTodo }
        disabled={ listTodo.length <= 0 }
        />
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
