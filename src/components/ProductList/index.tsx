import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { FoodItem } from '../../types'
import ProductCard from '../ProductCard'

import closeIcon from '../../assets/close.png'

import * as S from './styles'

export type Props = {
  products: FoodItem[]
}

const ProductList = ({ products }: Props) => {
  const [modalVisible, setModalVisible] = useState<FoodItem | null>(null)

  const dispatch = useDispatch()

  const addToCart = () => {
    if (modalVisible) {
      dispatch(add(modalVisible))
      dispatch(open())
      setModalVisible(null)
    }
  }

  return (
    <S.ProductListContainer className="container">
      <S.ProfileList>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.foto}
              title={product.nome}
              description={product.descricao}
              onMoreDetails={() => setModalVisible(product)}
            />
          ))}
      </S.ProfileList>
      <S.Modal className={modalVisible ? 'visible' : ''}>
        <S.Overlay onClick={() => setModalVisible(null)} />
        {modalVisible && (
          <S.ModalContainer>
            <img src={modalVisible.foto} alt={modalVisible.nome} />
            <div>
              <h3>{modalVisible.nome}</h3>
              <p>{modalVisible.descricao}</p>
              <p>Porção: {modalVisible.porcao}</p>
              <button onClick={addToCart}>
                Adicionar ao Carrinho - R${' '}
                {modalVisible.preco.toFixed(2).replace('.', ',')}
              </button>
            </div>
            <img
              src={closeIcon}
              alt="Fechar"
              className="close-button"
              onClick={() => setModalVisible(null)}
            />
          </S.ModalContainer>
        )}
      </S.Modal>
    </S.ProductListContainer>
  )
}

export default ProductList
