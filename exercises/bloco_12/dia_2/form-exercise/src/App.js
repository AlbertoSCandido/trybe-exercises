import './App.css';
import React from 'react';
import Input from './Input';
import estados from './Data'
class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipo: ""
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: name === "nome" ? value.toUpperCase() : value
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <Input
              type="text"
              name="nome"
              handleChange={this.handleChange}
              placeholder="Nome"
              maxlength="40"
              required
              value={this.state.nome}
            />
            <Input
              type="text"
              name="email"
              handleChange={this.handleChange}
              placeholder="Email"
              maxlength="50"
              required
              value={this.state.email}
            />
            <Input
              type="text"
              name="cpf"
              handleChange={this.handleChange}
              placeholder="CPF"
              maxlength="11"
              required
            />
            <Input
              type="text"
              name="endereco"
              handleChange={this.handleChange}
              placeholder="Endereco"
              maxlength="200"
              required
            />
            <Input
              type="text"
              name="cidade"
              handleChange={this.handleChange}
              placeholder="Cidade"
              maxlength="28"
              required
            />
            <select name='estado'>
              {estados.map(({uf, nome}) => <option value={uf}>{nome}</option>)}
            </select>
            <label>Casa
            <input name='tipo' id='Casa' type='radio' required checked></input>
            </label>
            <label>Apartamento
            <input name='tipo' id='AP' type='radio'></input>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
