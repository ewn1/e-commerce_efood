import styled from 'styled-components'
import { Colors } from '../../styles'

export const ProductListContainer = styled.div`
  padding: 56px 0 120px;
`

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  width: 100%;
  max-width: 100%;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visible {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${Colors.salmao};
  color: ${Colors.branco};
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  display: flex;
  gap: 24px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 24px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
      text-align: justify;
    }

    button {
      background-color: ${Colors.bege};
      color: ${Colors.salmao};
      border: none;
      padding: 8px 16px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      margin-top: auto;
      width: fit-content;
    }
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`
