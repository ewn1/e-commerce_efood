import styled from 'styled-components'
import { Colors } from '../../styles'

export const BannerProfileImg = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px 0;
  }
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${Colors.branco};
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${Colors.branco};
`
