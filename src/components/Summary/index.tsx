import { useContext } from 'react';
import IcomeImg from '../../assets/entradas.svg';
import OutImg from '../../assets/saidas.svg';
import TotalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../hooks/transactionsContext';

import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IcomeImg} alt="" />
        </header>
        <strong>R$1200,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutImg} alt="" />
        </header>
        <strong> - R$100,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="" />
        </header>
        <strong>R$1100,00</strong>
      </div>
    </Container>
  )
}
