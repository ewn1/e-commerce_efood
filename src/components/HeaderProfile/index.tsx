import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/logo.png'
import bannerHome from '../../assets/bannerHome.png'

import { RootState } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

const HeaderProfile = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <S.HeaderProfileContainer style={{ backgroundImage: `url(${bannerHome})` }}>
      <S.HeaderProfileContent className="container">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
        <span onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </span>
      </S.HeaderProfileContent>
    </S.HeaderProfileContainer>
  )
}

export default HeaderProfile
