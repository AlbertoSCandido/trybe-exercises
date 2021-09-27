import { ADD_CLIENTE } from '../reducers/clientesReducer'

function addClienteAction(obj) {
  return {
    type: ADD_CLIENTE,
    newCliente: obj,
  }
}

export default addClienteAction;