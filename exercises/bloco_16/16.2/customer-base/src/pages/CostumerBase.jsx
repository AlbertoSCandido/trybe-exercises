import React, { Component } from 'react'

export default class CostumerBase extends Component {
  render() {
    return (
      <div>
        <h1>
          Clientes cadastrados
        </h1>
      </div>
    )
  }
}
// listar todos os clientes e caso não tenha cadastrado exibir mensagem 'nenhum cliente cadastrado' juntamente com um botão para ir á página de cadastro