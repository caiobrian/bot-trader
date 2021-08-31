import PropTypes from 'prop-types'

import * as S from './styles'

export const Ticker = ({ data }) => {
  const {
    o: openPrice,
    h: highPrice,
    l: lowPrice,
    c: lastPrice,
    P: percentage
  } = data

  return (
    <S.Container>
      <S.Title>Ticker 24H</S.Title>
      <S.Label>Open: {openPrice}</S.Label>
      <S.Label>High: {highPrice}</S.Label>
      <S.Label>Low: {lowPrice}</S.Label>
      <S.Label>Last: {lastPrice}</S.Label>
      <S.Label>Change %: {percentage}</S.Label>
    </S.Container>
  )
}

Ticker.propTypes = {
  data: PropTypes.shape({
    o: PropTypes.number,
    h: PropTypes.number,
    l: PropTypes.number,
    c: PropTypes.number,
    P: PropTypes.number
  })
}

Ticker.defaultProps = {
  data: {
    o: 0,
    h: 0,
    l: 0,
    c: 0,
    P: 0
  }
}
