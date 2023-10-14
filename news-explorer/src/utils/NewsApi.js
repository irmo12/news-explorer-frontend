class NewsApi {
  constructor({ baseURL, headers, q, apiKey, from, to, pageSize }) {
    this._baseURL = baseURL;
    this._headers = headers;
    this._q = q;
    this._apiKey = apiKey;
    this._from = from;
    this._to = to;
    this._pageSize = pageSize;
  }

  _processResponse = (res) => {
    return res.ok ? res : Promise.reject(`Error: ${res.statusText}`);
  };

  searchArticles(q) {
    return fetch(`${this._baseURL}?apiKey=${this._apiKey}&from=${this._from}&to=${this._to}&pageSize=${this._pageSize}&q=${q}`, {
      headers: this._headers,
      method: 'GET'
    }).then(res => this._processResponse(res));
  }
}

let currentDate = new Date();
let fromDate = new Date(currentDate);

let toDate = currentDate.toISOString().split('T')[0];
fromDate.setDate(currentDate.getDate() - 7);
fromDate = fromDate.toISOString().split('T')[0];

const newsApi = new NewsApi({
  baseURL: 'https://nomoreparties.co/news/',
  headers: { 'Content-Type': 'application/json' },
  apiKey: '1d69077a4808446e9ba0af576fa91c61',
  from: fromDate,
  to: toDate,
  pageSize: 100,
});

export { newsApi };
