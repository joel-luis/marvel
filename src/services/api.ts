import axios from 'axios'
import md5 from 'md5'

const publicKey = '546a7931958b15da5182960cec1be9c9'
const privateKey = 'fd7d0bee8c206ea078654143e0af2cd0d88e1204'

const ts = Number(new Date())
const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash
  }
})

export default api
