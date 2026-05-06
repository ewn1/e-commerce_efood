import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import logo from '../../assets/logo.png'
import { FooterContainer, Icons, Disclaimer } from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="eFood" />
    <Icons>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </Icons>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.
    </Disclaimer>
  </FooterContainer>
)

export default Footer
