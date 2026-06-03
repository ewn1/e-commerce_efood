import {
  CartContainer,
  CartItem,
  Overlay,
  SideBar,
  CartButton,
  TotalPrice,
} from './styles'
import deleteIcon from '../../assets/deleteIcon.png'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, itemAtual) => {
      return acumulador + itemAtual.preco
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                <img
                  onClick={() => dispatch(remove(item.id))}
                  src={deleteIcon}
                  alt="Remover produto"
                />
              </div>
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          <span>Valor Total:</span>
          <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
        </TotalPrice>
        <CartButton>Continuar com a entrega</CartButton>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
