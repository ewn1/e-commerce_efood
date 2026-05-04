import styled from 'styled-components'
import { Props } from '.'
import { Colors } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${Colors.salmao};
  color: ${Colors.bege};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'small' ? '6px 4px' : '4px 6px')};
  display: inline-block;
`
