import { useEffect } from 'react'

export function useTradingView(symbol) {
  useEffect(() => {
    new window.TradingView.widget({
      autosize: true,
      symbol: `BINANCE:${symbol}`,
      interval: '60',
      timezone: 'America/Sao_Paulo',
      theme: 'dark',
      style: '1',
      locale: 'br',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: true,
      details: true,
      container_id: 'tradingview_4a426'
    })
  }, [symbol])
}
