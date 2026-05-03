import bannerHome from '../../assets/bannerHome.png'
import logo from '../../assets/logo.png'
import { HeaderContainer, Logo, Titulo } from './styles'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${bannerHome})` }}>
    <div>
      <Logo src={logo} alt="logomarca eFood" />
      <Titulo>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Titulo>
    </div>
  </HeaderContainer>
)

export default Header
