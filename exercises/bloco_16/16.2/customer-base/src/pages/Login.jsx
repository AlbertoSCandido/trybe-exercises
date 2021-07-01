import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target
    this.setState({
      [name]:value,
    })
  }

  submitLogin() {
    const {mail, password} = this.state;
    return mail.trim() === '' || password.trim() === ''
    //   alert('login não efetuado')
    //   return;
    // }
    // // mandar dados para store
    // return <Redirect to="/costumer-base" />
  }
  
  render() {
    const { mail, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitLogin}>
          <label htmlFor="login-email">
            <input type="mail" id="login-email" name="mail" onChange={this.handleChange} placeholder="Digite seu e-mail" value={mail}/>
          </label>
          <label htmlFor="login-email">
            <input type="text" id="login-email" name="password" onChange={this.handleChange} placeholder="Digite sua senha" value={password}/>
          </label>
          <button disabled={!mail || !password}>Login</button>
        </form>
      </div>
    )
  }
}
