import Modal from 'react-modal';
import { Container, TransactionContainer } from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/entradas.svg';
import outImg from '../../assets/saidas.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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
        <button type="button" onClick={() => {}}>
          <img src={IncomeImg} alt="Income" />
          <span>Entrada</span>
        </button>
        <button type="button" onClick={() => {}}>
        <img src={outImg} alt="Out" />
          <span>Saída</span>
        </button>
      </TransactionContainer>
      <input placeholder={'Categoria'}></input>
      <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
  )
}