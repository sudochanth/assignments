import axios from 'axios';

const KEY = 'AIzaSyB_TLE2rFI_O6NCT3vnGnpNpketSDdhMqQ';

axios.get('')

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})