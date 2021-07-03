import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addClienteAction} from '../actions';

class CostumerBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCliente: '',
    }
    this.submitCliente = this.submitCliente.bind(this);
  }

  handleChange = ({target}) => {
    const newCliente = target.value;
    this.setState({newCliente})
  }

  submitCliente() {
    const { newCliente } = this.state;
    const { addCliente } = this.props;
    if (newCliente.trim() === '') return;
    addCliente(newCliente);
  }

  render() {
    const { clientes } = this.props;
    return (
      <div>
        <h1>
          Clientes cadastrados
        </h1>
        <div>
          <input onChange={this.handleChange}></input>
          <button onClick={this.submitCliente}>Adicionar cliente</button>
        </div>
        {clientes.length > 0 && (
          <div>
            {clientes.map((cliente) => <h3>{cliente}</h3>)}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clientes: state.clientesReducer,
})

const mapDispatchToProps = dispatch => ({
  addCliente: (cliente) => dispatch(addClienteAction(cliente))
})

export default connect(mapStateToProps, mapDispatchToProps)(CostumerBase)

// listar todos os clientes e caso não tenha cadastrado exibir mensagem 'nenhum cliente cadastrado' juntamente com um botão para ir á página de cadastro