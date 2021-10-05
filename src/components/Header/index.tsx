import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
      <img src={LogoImg} alt="logo finance app" />
      <button type="button">
        Nova transação
      </button>
      </Content>
    </Container>
  )
}