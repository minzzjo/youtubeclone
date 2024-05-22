export default class Apis {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({ params: { part: 'snippet', maxResult: 30, type: 'video', q: keyword } })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({ params: { part: 'snippet', maxResult: 30, chart: 'mostPopular', regionCode: 'kr' } })
      .then((res) => res.data.items)
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items.map((item) => ({ ...item, url: item.snippet.thumbnails.default.url })));
  }

  async playlists(id) {
    return this.apiClient
      .playlists({ params: { part: 'snippet', maxResult: 30, channelId: id } })
      .then((res) => res.data.items.map((item) => ({ ...item, playlists: item.snippet })));
  }
}