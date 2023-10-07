class MainApi {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _processResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
  };

  getArticles(token) {
    return fetch(`${this._baseURL}/articles`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._processResponse(res));
  }

  saveNewArticle(data, token) {
    return fetch(`${this._baseURL}/articles`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => this._processResponse(res));
  }

  deleteArticle(id, token) {
    return fetch(`${this._baseURL}/articles/${id}`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      method: 'DELETE',
    }).then((res) => this._processResponse(res));
  }

  registerParams(data) {
    return fetch(`${this._baseURL}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => this._processResponse(res));
  }

  authorizationParams(data) {
    return fetch(`${this._baseURL}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => this._processResponse(res));
  }

  getUserAuth(token) {
    return fetch(`${this._baseURL}/users/me`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      method: 'GET',
    }).then((res) => this._processResponse(res));
  }
}

const mainApi = new MainApi({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { mainApi };
