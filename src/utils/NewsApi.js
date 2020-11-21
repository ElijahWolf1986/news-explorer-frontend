class NewsApi {
  constructor(url, keyword, update, size, apiKey) {
    this._url = url;
    this._keyword = keyword;
    this._update = update;
    this._size = size;
    this._apiKey = apiKey;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.log(res.status);
      return Promise.reject(res.status);
    }
  }

  _handleResponseError(err) {
    console.log(err);
    return Promise.reject(err);
  }

  getNewsCards() {
    return fetch(
      `${this._url}q=${this._keyword}&from=${this._update}&pageSize=${this._size}&apiKey=${this._apiKey}`
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }
}

export default NewsApi;
