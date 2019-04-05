import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ebd39d52c7d417f916be30adaec9d68569798371b2c62e20e13f17f05005c558'
  }
})