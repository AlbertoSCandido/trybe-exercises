const INICIAL_STATE = {
  signIn: {}
};

export const LOGIN = 'login'

function loginReducer(state = INICIAL_STATE, action) {
  switch(action.type) {
    case LOGIN: 
     return {
       signIn: action.data,
     };
    default:
     return state;
  }
}

export default loginReducer;