import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Cabecalho = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    height: 280px;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-top: 55px;
`

export const Slogan = styled.p`
  line-height: 40px;
  font-weight: bold;
  font-size: 36px;
  width: 540px;
  text-align: center;
  margin-top: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 2;
    width: 80%;
    margin-top: 60px;
  }
`
