import { mainApi } from './MainApi';

const auth = {

  signin: (data) => {
    console.log(data)
    return mainApi.authorizationParams(data)
      .then((data) => { localStorage.setItem('token', data.token); });
  },

  signup: (data) => {
    return mainApi.registerParams(data);
  },

  checkToken: (token) => { return mainApi.getUserAuth(token); },

};

export { auth };
