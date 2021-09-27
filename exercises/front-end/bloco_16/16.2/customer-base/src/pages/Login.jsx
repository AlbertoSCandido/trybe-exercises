import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { loginAction } from '../actions';
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
      redirect: false,
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

  submitLogin(e) {
    const { login } = this.props;
    e.preventDefault();
    const {mail, password} = this.state;
    if(mail.trim() === '' || password.trim() === '') {
      alert('login não efetuado')
      return;
    }
    login({ mail, password })
    this.setState({
      redirect: true,
    })
  }
  
  render() {
    const { mail, password, redirect } = this.state;
    return (
      <div>
        <form onSubmit={this.submitLogin}>
          <label htmlFor="login-email">
            <input type="mail" id="login-email" name="mail" onChange={this.handleChange} placeholder="Digite seu e-mail" value={mail}/>
          </label>
          <label htmlFor="login-email">
            <input type="text" id="login-email" name="password" onChange={this.handleChange} placeholder="Digite sua senha" value={password}/>
          </label>
          <button to="/costumer-base" type="button" disabled={!mail || !password} onClick={this.submitLogin}>Login</button>
        </form>
        {redirect && <Redirect to="/costumer-base" />}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (object) => dispatch(loginAction(object)),
})

export default connect(null, mapDispatchToProps)(Login)