import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeaderProfileContainer = styled.div`
  width: 100%;
  height: 186px;

  @media (max-width: 768px) {
    height: auto;
  }
`

export const HeaderProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 0;
  font-weight: bold;
  color: ${Colors.salmao};

  a {
    color: ${Colors.salmao};
    text-decoration: none;
  }

  span {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 24px 0;
    text-align: center;

    span {
      display: block;
      max-width: 160px;
      line-height: 1.4;
    }
  }
`
