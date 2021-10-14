import Modal from 'react-modal';
import { Container, TransactionContainer, RadioBox } from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/entradas.svg';
import outImg from '../../assets/saidas.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit');

  return(
    <Modal  
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="fechar modal" ></img>
      </button>
    <Container>
      <h2>Cadastrar transação</h2>
      <input placeholder={'Título'}></input>
      <input placeholder={'Valor'} type="number"></input>
      <TransactionContainer>
        <RadioBox 
          type="button" 
          isActive={type === 'deposit'}
          activeColor="green"
          onClick={() => setType('deposit')}
        >
          <img src={IncomeImg} alt="Income" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox 
          type="button" 
          isActive={type === 'withdraw'}
          activeColor="red"
          onClick={() => setType('withdraw')}
        >
        <img src={outImg} alt="Out" />
          <span>Saída</span>
        </RadioBox>
      </TransactionContainer>
      <input placeholder={'Categoria'}></input>
      <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
  )
}