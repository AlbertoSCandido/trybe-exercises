import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addClienteAction} from '../actions';

class CostumerBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age:'',
      email: ''
    }
    this.submitCliente = this.submitCliente.bind(this);
  }

  handleChange = ({target}) => {
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  submitCliente() {
    const { name, email, age } = this.state;
    const { addCliente } = this.props;
    if (name.trim() === '') return;
    addCliente({name,email,age});
  }

  render() {
    const { clientes } = this.props;
    return (
      <div>
        <h1>
          Clientes cadastrados
        </h1>
        <div>
          <input onChange={this.handleChange} name="name"></input>
          <input onChange={this.handleChange} name="age"></input>
          <input onChange={this.handleChange} name="email"></input>
          <button onClick={this.submitCliente}>Adicionar cliente</button>
        </div>
        {clientes.length > 0 && (
          <div>
            {clientes.map(({name, age, email}) => <h3>{`${name} ${age} ${email}`}</h3>)}
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