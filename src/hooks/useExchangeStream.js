import axios from 'axios'
import { useState } from 'react'
import useWebSocket from 'react-use-websocket'

export function useExchangeStream() {
  const [ticker, setTicker] = useState({
    o: 0,
    h: 0,
    l: 0,
    c: 0,
    P: 0
  })
  const [config, setConfig] = useState({
    buy: 0,
    sell: 0,
    side: 'BUY',
    symbol: 'BTCUSDT'
  })

  const [profit, setProfit] = useState({
    value: 0,
    perc: 0,
    lastBuy: 0
  })

  const symbol = config.symbol.toLowerCase()

  function buyNow() {
    axios
      .post('https://localhost:3001/BUY/' + config.symbol + '/0.01')
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => console.error(err))
  }

  function sellNow() {
    axios
      .post('https://localhost:3001/SELL/' + config.symbol + '/0.01')
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => console.error(err))
  }

  function processData(ticker) {
    const lastPrice = parseFloat(ticker.c)
    if (config.side === 'BUY' && config.buy > 0 && lastPrice <= config.buy) {
      buyNow()
      setConfig((prevState) => ({ ...prevState, side: 'SELL' }))
      setProfit({
        value: profit.value,
        perc: profit.perc,
        lastBuy: lastPrice
      })
    } else if (
      config.side === 'SELL' &&
      config.sell > profit.lastBuy &&
      lastPrice >= config.sell
    ) {
      sellNow()
      setConfig((prevState) => ({ ...prevState, side: 'BUY' }))

      const lastProfit = lastPrice - profit.lastBuy

      setProfit({
        value: profit.value + lastProfit,
        perc: profit.perc + ((lastProfit * 100) / profit.lastBuy - 100),
        lastBuy: 0
      })
    }
  }

  const { lastJsonMessage } = useWebSocket(
    `wss://stream.binance.com:9443/stream?streams=${symbol}@ticker`,
    {
      onMessage: () => {
        if (lastJsonMessage && lastJsonMessage.data) {
          if (lastJsonMessage.stream === `${symbol}@ticker`) {
            setTicker(lastJsonMessage.data)
            processData(lastJsonMessage.data)
          }
        }
      },
      onError: (event) => {
        alert(event)
      }
    }
  )

  return {
    ticker,
    profit,
    config,
    setConfig
  }
}
