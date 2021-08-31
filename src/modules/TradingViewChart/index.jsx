import PropTypes from 'prop-types'
import { useTradingView } from 'hooks/useTradingView'

import * as S from './styles'

export const TradingViewChart = ({ symbol }) => {
  useTradingView(symbol)

  return (
    <S.Container>
      <S.Chart id="tradingview_4a426" />
    </S.Container>
  )
}

TradingViewChart.propTypes = {
  symbol: PropTypes.string.isRequired
}
