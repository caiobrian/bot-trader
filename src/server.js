import axios from 'axios'
import querystring from 'querystring'
import crypto from 'crypto'
import express from 'express'
import cors from 'cors'

const API_KEY = 'api_key'
const API_SECRET = 'api_secret'

const app = express()

app.use(cors())

app.post('/:side/:symbol/:quantity', (req, res) => {
  const { side, symbol, quantity } = req.params

  const data = {
    symbol,
    side,
    quantity,
    type: 'MARKET',
    timestamp: Date.now(),
    recvWindow: 60000
  }

  const signature = crypto
    .createHmac('sha256', API_SECRET)
    .update(querystring.stringify(data))
    .digest('hex')

  const newData = { ...data, signature }
  const url =
    'https://testnet.binance.vision/api/v3/order?' +
    querystring.stringify(newData)

  axios
    .post(url, null, { headers: { 'X-MBX-APIKEY': API_KEY } })
    .then((result) => {
      console.log(result.data)
      res.json(result.data)
    })
    .catch((err) => {
      console.error(err.response.data)
      res.sendStatus(500)
    })
})

app.listen(3001, () => {
  console.log('Server listening on 3001')
})
