import bannerHome from '../../assets/bannerHome.png'
import logo from '../../assets/logo.png'
import * as S from './styles'

const Header = () => (
  <S.HeaderHome style={{ backgroundImage: `url(${bannerHome})` }}>
    <div>
      <S.Logo src={logo} alt="eFood" />
      <S.Titulo>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </S.Titulo>
    </div>
  </S.HeaderHome>
)

export default Header
