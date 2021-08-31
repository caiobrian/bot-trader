import PropTypes from 'prop-types'

import * as S from './styles'

export const Profit = ({ value, percentage }) => {
  return (
    <S.Container>
      <S.Title>Profit</S.Title>
      <S.Wrapper>
        <S.Label>Profit: {value.toFixed(8)}</S.Label>
        <S.Label>Profit %: {percentage.toFixed(2)}</S.Label>
      </S.Wrapper>
    </S.Container>
  )
}

Profit.propTypes = {
  value: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired
}
