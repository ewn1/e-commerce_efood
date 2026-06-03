import logo from '../../assets/logo.png'
import bannerHome from '../../assets/bannerHome.png'
import { HeaderProfileContainer, HeaderProfileContent } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { open } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'

const HeaderProfile = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <HeaderProfileContainer style={{ backgroundImage: `url(${bannerHome})` }}>
      <HeaderProfileContent className="container">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
        <span onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </span>
      </HeaderProfileContent>
    </HeaderProfileContainer>
  )
}

export default HeaderProfile
