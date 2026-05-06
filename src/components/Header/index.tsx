import bannerHome from '../../assets/bannerHome.png'
import logo from '../../assets/logo.png'
import { HeaderHome, Logo, Titulo } from './styles'

const Header = () => (
  <HeaderHome style={{ backgroundImage: `url(${bannerHome})` }}>
    <div>
      <Logo src={logo} alt="eFood" />
      <Titulo>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Titulo>
    </div>
  </HeaderHome>
)

export default Header
