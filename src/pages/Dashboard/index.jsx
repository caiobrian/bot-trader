import { useExchangeStream } from 'hooks/useExchangeStream'
import { Profit, SelectTarget, Ticker, TradingViewChart } from 'modules'

import * as S from './styles'

export const Dashboard = () => {
  const { config, setConfig, profit, ticker } = useExchangeStream()

  function onSymbolChange(event) {
    setConfig((prevState) => ({ ...prevState, symbol: event.target.value }))
  }

  function onValueChange(event) {
    setConfig((prevState) => ({
      ...prevState,
      [event.target.id]: parseFloat(event.target.value)
    }))
  }

  return (
    <S.Container>
      <S.Title>Bot Trader 1.0</S.Title>

      <S.Wrapper>
        <TradingViewChart symbol={config.symbol} />

        <S.WrapperActions>
          <SelectTarget
            data={config}
            onValueChange={onValueChange}
            onSymbolChange={onSymbolChange}
          />

          <Profit value={profit.value} percentage={profit.perc} />
          <Ticker data={ticker} />
        </S.WrapperActions>
      </S.Wrapper>
    </S.Container>
  )
}
