import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Lista = styled.ul`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
