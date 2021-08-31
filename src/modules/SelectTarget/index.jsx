import PropTypes from 'prop-types'

import * as S from './styles'

export const SelectTarget = ({ data, onSymbolChange, onValueChange }) => {
  const { symbol, buy, sell } = data

  return (
    <S.Container>
      <S.Title>Target</S.Title>
      <S.Label>
        Symbol:
        <select id="symbol" defaultValue={symbol} onChange={onSymbolChange}>
          <option>BTCUSDT</option>
          <option>ETHUSDT</option>
          <option>ADAUSDT</option>
          <option>BNBUSDT</option>
          <option>XRPUSDT</option>
        </select>
      </S.Label>

      <S.Label>
        Buy at:
        <input
          type="number"
          id="buy"
          defaultValue={buy}
          onChange={onValueChange}
        />
      </S.Label>

      <S.Label>
        Sell at:
        <input
          type="number"
          id="sell"
          defaultValue={sell}
          onChange={onValueChange}
        />
      </S.Label>
    </S.Container>
  )
}

SelectTarget.propTypes = {
  data: PropTypes.shape({
    symbol: PropTypes.string,
    buy: PropTypes.number,
    sell: PropTypes.number
  }),
  onSymbolChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
}
