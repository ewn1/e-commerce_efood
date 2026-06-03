import { FoodItem } from '../../types'
import ProductCard from '../ProductCard'
import {
  Modal,
  ModalContainer,
  Overlay,
  ProductListContainer,
  ProfileList,
} from './styles'

import closeIcon from '../../assets/close.png'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

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
    <ProductListContainer className="container">
      <ProfileList>
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
      </ProfileList>
      <Modal className={modalVisible ? 'visible' : ''}>
        <Overlay onClick={() => setModalVisible(null)} />
        {modalVisible && (
          <ModalContainer>
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
          </ModalContainer>
        )}
      </Modal>
    </ProductListContainer>
  )
}

export default ProductList
