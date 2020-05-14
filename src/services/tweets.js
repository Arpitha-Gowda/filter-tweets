import axios from 'axios'
const baseUrl = 'https://www.tronalddump.io/'

const getTags = () => {
  const url = "tag"
  const request = axios.get(`${baseUrl}/`+ url)
  return request.then(response => response.data)
}

const getTweets = (tag) => {
    const url = "search/quote?tag="+tag;
    const request = axios.get(`${baseUrl}/`+url)
    return request.then(response => response.data)
  }

export default { getTags, getTweets }