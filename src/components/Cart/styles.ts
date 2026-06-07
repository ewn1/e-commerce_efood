import styled from 'styled-components'
import { Colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
  }
`

export const SideBar = styled.aside`
  background-color: ${Colors.salmao};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  p {
    color: ${Colors.branco};
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${Colors.bege};
  margin-bottom: 16px;
  position: relative;
  padding: 8px;

  > img {
    object-fit: cover;
    width: 80px;
    height: 80px;
    margin-right: 8px;
    flex-shrink: 0; /* Impede a imagem do prato de ser esmagada no celular */
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1; /* Faz a div ocupar o espaço restante */
    min-width: 0; /* Evita que os textos internos estufem a div */
    padding-right: 24px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
      color: ${Colors.salmao};
      white-space: normal; /* Força a quebra de linha do título na versão responsiva */
      word-break: break-word; /* Para quebrar longas palavras, se necessário */
    }

    span {
      font-size: 14px;
      margin-bottom: 8px;
      color: ${Colors.salmao};
    }

    img {
      display: block;
      width: 16px;
      height: 16px;
      object-fit: cover;
      cursor: pointer;
      position: absolute;
      bottom: 8px;
      right: 8px;
      margin-left: 0;
    }
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin-top: 24px;
  color: ${Colors.bege};
`

export const DeliveryForm = styled.div`
  .row-inputs {
    display: flex;
    gap: 34px;
  }
`
export const PaymentForm = styled.div`
  .row-inputs {
    display: flex;
    gap: 34px;
  }

  .cardNumberInput {
    width: 228px;
  }
`

export const CartButtonGroup = styled.div`
  margin-top: 24px;

  button:nth-child(2) {
    margin-top: 8px;
  }
`

export const CartButton = styled.button`
  height: 24px;
  width: 100%;
  margin-top: 16px;
  background-color: ${Colors.bege};
  color: ${Colors.salmao};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;

  label {
    color: ${Colors.bege};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    background-color: ${Colors.bege};
    border: 1px solid ${Colors.bege};
    height: 32px;
    padding: 0 8px;
    color: ${Colors.black};
    font-weight: bold;
    font-size: 14px;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const SuccessMessageContainer = styled.div`
  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    text-align: left;
    color: ${Colors.bege};
  }
`
