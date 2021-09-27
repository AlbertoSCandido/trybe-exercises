import { LOGIN } from '../reducers/loginReducer';

function signIn(obj) {
  return {
    type: LOGIN,
    data: obj
  }
}

export default signIn