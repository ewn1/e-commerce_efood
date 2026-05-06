import logo from '../../assets/logo.png'
import bannerHome from '../../assets/bannerHome.png'
import { HeaderProfileContainer } from './styles'

const HeaderProfile = () => (
  <HeaderProfileContainer style={{ backgroundImage: `url(${bannerHome})` }}>
    <p>Restaurantes</p>
    <img src={logo} alt="eFood" />
    <p>0 produto(s) no carrinho</p>
  </HeaderProfileContainer>
)

export default HeaderProfile
