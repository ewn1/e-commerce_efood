import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import logo from '../../assets/logo.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <img src={logo} alt="eFood" />
    <S.Icons>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </S.Icons>
    <S.Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.
    </S.Disclaimer>
  </S.FooterContainer>
)

export default Footer
