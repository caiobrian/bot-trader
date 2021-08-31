import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h3`
  color: var(--text-primary);
  font-size: 2rem;
`

export const Label = styled.label`
  color: var(--text-primary);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.6rem 0;

  > input,
  select {
    height: 4rem;
    width: 80%;
    padding: 0 1rem;
    margin-left: 0.8rem;
  }
`
