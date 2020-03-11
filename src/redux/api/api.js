import axios from 'axios';

class Api {
  constructor() {
    this.BASE_URL = process.env.REACT_APP_BASE_API_URL;
    this.headers = { 'Content-Type': 'application/json' };
    this.loginUser = this.loginUser.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.getAllDocuments = this.getAllDocuments.bind(this)
    this.getOneDocument = this.getOneDocument.bind(this)
    this.editDocument = this.editDocument.bind(this)
    window.addEventListener('DOMContentLoaded', this.setAuthHeaders.bind(this))
  }

  setCredentials(user) {
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  removeCredentials() {
    localStorage.removeItem('currentUser')
  }

  setAuthHeaders() {
    if (localStorage.currentUser) {
      const currentUser = JSON.parse(localStorage.currentUser)
      this.headers = {
        ...this.headers,
        Authorization: 'Bearer ' + currentUser.token
      };
    }
  }

  api() {
    return axios.create({
      baseURL: this.BASE_URL,
      headers: this.headers
    });
  }

  async getAllDocuments() {
    return await this.api().get('/documents');
  }

  async getOneDocument(id) {
    return await this.api().get('/documents/' + id);
  }

  async editDocument(id, query) {
    return await this.api().patch('/documents/' + id, query);
  }

  async registerUser(data) {
    return await this.api().post('/auth/register', data);
  }

  async loginUser(data) {
    return await this.api().post('/auth/login', data);
  }

  async ping() {
    return await this.api().get('/ping')
  }
}

const api = new Api()

export default api
