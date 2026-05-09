import logo from '../../assets/logo.png'
import bannerHome from '../../assets/bannerHome.png'
import { HeaderProfileContainer, HeaderProfileContent } from './styles'

const HeaderProfile = () => (
  <HeaderProfileContainer style={{ backgroundImage: `url(${bannerHome})` }}>
    <HeaderProfileContent className="container">
      <p>Restaurantes</p>
      <img src={logo} alt="eFood" />
      <p>0 produto(s) no carrinho</p>
    </HeaderProfileContent>
  </HeaderProfileContainer>
)

export default HeaderProfile
