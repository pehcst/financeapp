import Modal from 'react-modal';
import { Container } from './styles';
import CloseImg from '../../assets/close.svg';

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
      <input placeholder={'Categoria'}></input>
      <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
  )
}