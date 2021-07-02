const INICIAL_STATE = [];
export const ADD_CLIENTE = 'add'

function loginReducer(state = INICIAL_STATE, action) {
  switch(action.type) {
    case ADD_CLIENTE: 
     return [...state, action.newCliente]
    default:
     return state;
  }
}

export default loginReducer;